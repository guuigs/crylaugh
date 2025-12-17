import { supabase } from './supabase.js';

// Liste des tables à tester
const tables = ['anecdote', 'dette', 'deficit', 'recettes', 'depenses', 'detenteurs', 'synthese'];

async function testTableAccess(tableName) {
  console.log(`\n=== Test de la table: ${tableName} ===`);

  // Test de lecture
  try {
    const { data, error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: false })
      .limit(1);

    if (error) {
      console.log(`❌ Lecture: ÉCHOUÉ - ${error.message}`);
      console.log(`   Code: ${error.code}`);
      return { read: false, write: null, error: error.message };
    }

    console.log(`✅ Lecture: AUTORISÉ`);
    console.log(`   Nombre total de lignes: ${count ?? 'inconnu'}`);
    if (data && data.length > 0) {
      console.log(`   Colonnes: ${Object.keys(data[0]).join(', ')}`);
    }

    // Test d'écriture (insertion)
    try {
      const testData = { test_field: 'test_value', created_at: new Date().toISOString() };
      const { data: insertData, error: insertError } = await supabase
        .from(tableName)
        .insert([testData])
        .select();

      if (insertError) {
        console.log(`❌ Écriture (INSERT): REFUSÉ - ${insertError.message}`);
        return { read: true, write: false, error: insertError.message };
      }

      console.log(`✅ Écriture (INSERT): AUTORISÉ`);

      // Nettoyage - essayer de supprimer l'entrée de test
      if (insertData && insertData.length > 0 && insertData[0].id) {
        const { error: deleteError } = await supabase
          .from(tableName)
          .delete()
          .eq('id', insertData[0].id);

        if (deleteError) {
          console.log(`⚠️  Suppression (DELETE): REFUSÉ - ${deleteError.message}`);
          console.log(`   (L'entrée de test n'a pas pu être supprimée)`);
        } else {
          console.log(`✅ Suppression (DELETE): AUTORISÉ`);
        }
      }

      return { read: true, write: true };
    } catch (writeError) {
      console.log(`❌ Écriture: ERREUR - ${writeError.message}`);
      return { read: true, write: false, error: writeError.message };
    }
  } catch (readError) {
    console.log(`❌ Lecture: ERREUR - ${readError.message}`);
    return { read: false, write: null, error: readError.message };
  }
}

async function runTests() {
  console.log('🔍 Test de connexion à Supabase...');
  console.log(`URL: ${supabase.supabaseUrl}`);
  console.log(`Clé utilisée: ${supabase.supabaseKey.substring(0, 20)}...`);

  const results = {};

  for (const table of tables) {
    results[table] = await testTableAccess(table);
  }

  // Résumé
  console.log('\n\n📊 RÉSUMÉ DES ACCÈS:');
  console.log('='.repeat(60));
  console.log('Table'.padEnd(20) + 'Lecture'.padEnd(15) + 'Écriture');
  console.log('-'.repeat(60));

  for (const [table, result] of Object.entries(results)) {
    const readStatus = result.read ? '✅ OUI' : '❌ NON';
    const writeStatus = result.write === null ? '❓ N/A' : (result.write ? '✅ OUI' : '❌ NON');
    console.log(table.padEnd(20) + readStatus.padEnd(15) + writeStatus);
  }

  console.log('='.repeat(60));
}

runTests().catch(console.error);
