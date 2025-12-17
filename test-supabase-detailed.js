import { supabase } from './supabase.js';

const tables = ['anecdote', 'dette', 'deficit', 'recettes', 'depenses', 'detenteurs', 'synthese'];

async function getTableSchema(tableName) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1);

    if (error) {
      return { columns: null, error: error.message };
    }

    if (data && data.length > 0) {
      return { columns: Object.keys(data[0]), hasData: true };
    } else {
      // Table vide - essayer d'obtenir les colonnes via une requête HEAD
      return { columns: null, hasData: false };
    }
  } catch (err) {
    return { columns: null, error: err.message };
  }
}

async function testWritePermission(tableName, columns) {
  if (!columns || columns.length === 0) {
    // Essayer d'insérer un objet vide pour tester les permissions
    try {
      const { error } = await supabase
        .from(tableName)
        .insert([{}]);

      if (error) {
        // Analyser le type d'erreur
        if (error.message.includes('permission') || error.message.includes('denied') || error.code === '42501') {
          return { allowed: false, type: 'permission', message: error.message };
        } else if (error.message.includes('violates') || error.message.includes('required') || error.message.includes('null')) {
          // Erreur de validation = les permissions sont OK mais les données sont invalides
          return { allowed: true, type: 'validation', message: 'Permissions OK (erreur de validation attendue)' };
        } else {
          return { allowed: false, type: 'schema', message: error.message };
        }
      }

      // Si pas d'erreur, l'insertion a réussi (peu probable avec un objet vide)
      return { allowed: true, type: 'success', message: 'Insert réussi' };
    } catch (err) {
      return { allowed: false, type: 'error', message: err.message };
    }
  }

  // Test avec des colonnes connues
  const testData = {};
  const idColumn = columns.find(col => col === 'id' || col.endsWith('_id'));

  // Construire un objet de test minimal
  for (const col of columns) {
    if (col !== 'id' && col !== 'created_at' && col !== 'updated_at') {
      // Essayer de deviner le type de données
      if (col.includes('date')) {
        testData[col] = new Date().toISOString();
      } else if (col.includes('montant') || col.includes('amount') || col.includes('valeur')) {
        testData[col] = 0;
      } else {
        testData[col] = 'test';
      }
    }
  }

  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert([testData])
      .select();

    if (error) {
      if (error.message.includes('permission') || error.message.includes('denied') || error.code === '42501') {
        return { allowed: false, type: 'permission', message: error.message };
      } else {
        return { allowed: true, type: 'validation', message: `Permissions OK - ${error.message}` };
      }
    }

    // Succès - nettoyer
    if (data && data.length > 0 && data[0].id) {
      await supabase.from(tableName).delete().eq('id', data[0].id);
    }

    return { allowed: true, type: 'success', message: 'Insert/Delete réussis' };
  } catch (err) {
    return { allowed: false, type: 'error', message: err.message };
  }
}

async function testTableAccess(tableName) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📋 TABLE: ${tableName.toUpperCase()}`);
  console.log('='.repeat(70));

  // Test de lecture
  try {
    const { data, error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact' })
      .limit(5);

    if (error) {
      console.log(`\n❌ LECTURE: REFUSÉE`);
      console.log(`   Erreur: ${error.message}`);
      console.log(`   Code: ${error.code}`);
      return { read: false, write: false, columns: null };
    }

    console.log(`\n✅ LECTURE: AUTORISÉE`);
    console.log(`   Nombre de lignes: ${count ?? 0}`);

    let columns = null;
    if (data && data.length > 0) {
      columns = Object.keys(data[0]);
      console.log(`   Colonnes (${columns.length}): ${columns.join(', ')}`);
      console.log(`\n   📊 Aperçu des données (${Math.min(data.length, 3)} premières lignes):`);
      data.slice(0, 3).forEach((row, idx) => {
        console.log(`   ${idx + 1}. ${JSON.stringify(row)}`);
      });
    } else {
      console.log(`   ⚠️  Table vide - impossible de déterminer les colonnes`);
    }

    // Test d'écriture
    console.log(`\n🔐 TEST DES PERMISSIONS D'ÉCRITURE...`);
    const writeTest = await testWritePermission(tableName, columns);

    if (writeTest.allowed) {
      console.log(`✅ ÉCRITURE: AUTORISÉE`);
      console.log(`   Type: ${writeTest.type}`);
      console.log(`   Détails: ${writeTest.message}`);
    } else {
      console.log(`❌ ÉCRITURE: REFUSÉE`);
      console.log(`   Type: ${writeTest.type}`);
      console.log(`   Raison: ${writeTest.message}`);
    }

    return { read: true, write: writeTest.allowed, columns, count };
  } catch (error) {
    console.log(`\n❌ ERREUR: ${error.message}`);
    return { read: false, write: false, columns: null };
  }
}

async function runTests() {
  console.log('\n🔍 TEST DE CONNEXION À SUPABASE');
  console.log('='.repeat(70));
  console.log(`📍 URL: ${supabase.supabaseUrl}`);
  console.log(`🔑 Clé: ${supabase.supabaseKey.substring(0, 30)}...`);
  console.log('='.repeat(70));

  const results = {};

  for (const table of tables) {
    results[table] = await testTableAccess(table);
    await new Promise(resolve => setTimeout(resolve, 200)); // Petit délai entre les requêtes
  }

  // Résumé final
  console.log('\n\n' + '='.repeat(70));
  console.log('📊 RÉSUMÉ FINAL DES PERMISSIONS');
  console.log('='.repeat(70));
  console.log('');
  console.log('Table'.padEnd(20) + 'Lecture'.padEnd(15) + 'Écriture'.padEnd(15) + 'Lignes');
  console.log('-'.repeat(70));

  for (const [table, result] of Object.entries(results)) {
    const readStatus = result.read ? '✅ OUI' : '❌ NON';
    const writeStatus = result.write ? '✅ OUI' : '❌ NON';
    const count = result.count ?? 0;
    console.log(
      table.padEnd(20) +
      readStatus.padEnd(15) +
      writeStatus.padEnd(15) +
      count
    );
  }

  console.log('='.repeat(70));
  console.log('\n💡 CONCLUSION:');

  const allRead = Object.values(results).every(r => r.read);
  const allWrite = Object.values(results).every(r => r.write);
  const someWrite = Object.values(results).some(r => r.write);

  if (allRead && allWrite) {
    console.log('   ✅ Vous avez un accès COMPLET (lecture + écriture) sur toutes les tables');
  } else if (allRead && someWrite) {
    console.log('   ⚠️  Vous avez un accès en LECTURE sur toutes les tables');
    console.log('   ⚠️  Accès en ÉCRITURE limité à certaines tables');
  } else if (allRead && !someWrite) {
    console.log('   ℹ️  Vous avez un accès en LECTURE SEULE sur toutes les tables');
    console.log('   ℹ️  Aucune permission d\'écriture/modification');
  } else {
    console.log('   ⚠️  Accès limité ou restreint');
  }

  console.log('');
}

runTests().catch(console.error);
