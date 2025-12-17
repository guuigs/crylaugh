import { supabase } from './supabase.js';

const tables = ['anecdote', 'dette', 'deficit', 'recettes', 'depenses', 'detenteurs', 'synthese'];

async function checkTable(tableName) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📋 Table: ${tableName.toUpperCase()}`);
  console.log('='.repeat(70));

  try {
    // Test de lecture simple
    const { data, error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact' });

    if (error) {
      console.log(`❌ Erreur: ${error.message}`);
      return;
    }

    console.log(`✅ Nombre de lignes: ${count ?? 0}`);

    if (data && data.length > 0) {
      console.log(`\n📊 Structure (colonnes):`);
      const columns = Object.keys(data[0]);
      console.log(`   ${columns.join(', ')}`);

      console.log(`\n📄 Aperçu des données (5 premières lignes):`);
      data.slice(0, 5).forEach((row, idx) => {
        console.log(`\n   Ligne ${idx + 1}:`);
        for (const [key, value] of Object.entries(row)) {
          const displayValue = typeof value === 'string' && value.length > 50
            ? value.substring(0, 50) + '...'
            : value;
          console.log(`      ${key}: ${displayValue}`);
        }
      });
    } else {
      console.log(`⚠️  Aucune donnée trouvée`);
    }

  } catch (err) {
    console.log(`❌ Erreur lors de la lecture: ${err.message}`);
  }
}

async function main() {
  console.log('\n🔍 VÉRIFICATION DU CONTENU DES TABLES SUPABASE');
  console.log('='.repeat(70));
  console.log(`📍 URL: ${supabase.supabaseUrl}`);
  console.log('='.repeat(70));

  for (const table of tables) {
    await checkTable(table);
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  console.log('\n\n✅ Vérification terminée!\n');
}

main().catch(console.error);
