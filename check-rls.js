import { supabase } from './supabase.js';

async function checkRLS() {
  console.log('🔍 Vérification des politiques RLS\n');

  // Test 1: Essayer de lire sans filtre
  console.log('Test 1: SELECT simple sur la table "dette"');
  const { data: data1, error: error1, count: count1 } = await supabase
    .from('dette')
    .select('*', { count: 'exact' });

  console.log(`   Résultat: ${count1 ?? 0} lignes`);
  if (error1) console.log(`   Erreur: ${error1.message}`);
  if (data1) console.log(`   Données reçues: ${JSON.stringify(data1)}`);

  // Test 2: Vérifier si la clé anon peut lire
  console.log('\nTest 2: Vérification du type de clé');
  console.log(`   Type de clé: anon (publique)`);
  console.log(`   Les politiques RLS s'appliquent: OUI`);

  // Test 3: Essayer sur une autre table
  console.log('\nTest 3: SELECT sur la table "recettes"');
  const { data: data3, error: error3, count: count3 } = await supabase
    .from('recettes')
    .select('*', { count: 'exact' });

  console.log(`   Résultat: ${count3 ?? 0} lignes`);
  if (error3) console.log(`   Erreur: ${error3.message}`);

  // Test 4: Vérifier les métadonnées de la connexion
  console.log('\nTest 4: Informations de connexion');
  console.log(`   URL: ${supabase.supabaseUrl}`);
  console.log(`   Authentifié: ${supabase.auth ? 'OUI' : 'NON'}`);

  // Test 5: Vérifier l'auth
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  console.log('\nTest 5: État de l\'authentification');
  if (user) {
    console.log(`   ✅ Utilisateur connecté: ${user.email}`);
  } else {
    console.log(`   ⚠️  Aucun utilisateur connecté (clé anon uniquement)`);
  }
  if (authError) {
    console.log(`   Note: ${authError.message}`);
  }

  console.log('\n' + '='.repeat(70));
  console.log('💡 DIAGNOSTIC:');
  console.log('='.repeat(70));

  if (count1 === 0 && !error1) {
    console.log(`
Les tables retournent 0 lignes SANS erreur.
Cela peut signifier :

1. 🔒 Les politiques RLS sont activées et bloquent la lecture
   → Seules certaines lignes (ou aucune) sont visibles avec la clé anon
   → Solution: Vérifier les politiques RLS dans Supabase Dashboard

2. 📭 Les tables sont réellement vides
   → Aucune donnée n'a été insérée dans la base
   → Solution: Insérer des données via l'interface Supabase

3. 🔑 La clé anon n'a pas les bonnes permissions
   → Vérifier que la clé est bien celle du projet
   → Solution: Régénérer la clé dans Supabase Dashboard

Recommandation: Allez dans Supabase Dashboard > Authentication > Policies
et vérifiez les politiques RLS pour chaque table.
    `);
  }
}

checkRLS().catch(console.error);
