import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js';
// import { projectId, publicAnonKey } from '../../../utils/supabase/info';
import { LogOut, Database, Table, LineChart } from 'lucide-react';

type AdminSection = 'chart' | 'expenses' | 'revenues' | 'debt';

export default function Admin() {
  const [activeSection, setActiveSection] = useState<AdminSection>('chart');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>({ email: 'admin@demo.com' });
  const navigate = useNavigate();

  // const supabase = createClient(
  //   `https://${projectId}.supabase.co`,
  //   publicAnonKey
  // );

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // TODO: Réactiver l'authentification Supabase
      // const { data: { session } } = await supabase.auth.getSession();

      // if (!session) {
      //   navigate('/login');
      //   return;
      // }

      // setUser(session.user);
    } catch (error) {
      console.error('Auth check error:', error);
      // navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      // await supabase.auth.signOut();
      localStorage.removeItem('access_token');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9]">
        <p className="font-['Inter:Medium',sans-serif] text-[16px] text-[#737373]">
          Chargement...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1400px] mx-auto px-[32px] py-[20px] flex items-center justify-between">
          <div>
            <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#0a0a0a]">
              Administration
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
              Gérez les données du site
            </p>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="text-right">
              <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a]">
                {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-[8px] px-[16px] py-[8px] bg-[#0a0a0a] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white hover:bg-[#171717] transition-colors"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-[32px] py-[32px]">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e5e5e5] p-[4px] mb-[24px] flex gap-[4px]">
          <button
            onClick={() => setActiveSection('chart')}
            className={`flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[10px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
              activeSection === 'chart'
                ? 'bg-[#0a0a0a] text-white'
                : 'text-[#737373] hover:bg-[#f5f5f5]'
            }`}
          >
            <LineChart size={18} />
            Données Graphique
          </button>
          <button
            onClick={() => setActiveSection('expenses')}
            className={`flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[10px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
              activeSection === 'expenses'
                ? 'bg-[#0a0a0a] text-white'
                : 'text-[#737373] hover:bg-[#f5f5f5]'
            }`}
          >
            <Table size={18} />
            Dépenses
          </button>
          <button
            onClick={() => setActiveSection('revenues')}
            className={`flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[10px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
              activeSection === 'revenues'
                ? 'bg-[#0a0a0a] text-white'
                : 'text-[#737373] hover:bg-[#f5f5f5]'
            }`}
          >
            <Table size={18} />
            Recettes
          </button>
          <button
            onClick={() => setActiveSection('debt')}
            className={`flex-1 flex items-center justify-center gap-[8px] px-[16px] py-[10px] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] transition-colors ${
              activeSection === 'debt'
                ? 'bg-[#0a0a0a] text-white'
                : 'text-[#737373] hover:bg-[#f5f5f5]'
            }`}
          >
            <Database size={18} />
            Dette
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e5e5e5] p-[32px]">
          {activeSection === 'chart' && <ChartDataManager />}
          {activeSection === 'expenses' && <TableDataManager type="expenses" title="Dépenses" />}
          {activeSection === 'revenues' && <TableDataManager type="revenues" title="Recettes" />}
          {activeSection === 'debt' && <TableDataManager type="debt" title="Dette" />}
        </div>
      </div>
    </div>
  );
}

// Chart Data Manager Component
function ChartDataManager() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const initializeData = async () => {
    setLoading(true);
    setMessage('');

    try {
      // TODO: Réactiver l'API Supabase
      setMessage('❌ API Supabase non disponible - fonctionnalité désactivée temporairement');

      // const accessToken = localStorage.getItem('access_token');
      // const response = await fetch(
      //   `https://${projectId}.supabase.co/functions/v1/make-server-d77343f7/admin/initialize-data`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Authorization': `Bearer ${accessToken}`,
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );

      // const data = await response.json();

      // if (!response.ok) {
      //   throw new Error(data.error || 'Erreur lors de l\'initialisation');
      // }

      // setMessage('✅ Données initialisées avec succès !');
    } catch (error: any) {
      console.error('Initialize error:', error);
      setMessage(`❌ Erreur: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#0a0a0a] mb-[16px]">
        Gestion des données du graphique
      </h2>
      <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] mb-[24px]">
        Initialisez ou mettez à jour les données historiques affichées dans le graphique (3 ans, 10 ans, 50 ans).
      </p>

      {message && (
        <div className={`rounded-[8px] p-[16px] mb-[24px] ${
          message.includes('✅') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <p className="font-['Inter:Medium',sans-serif] text-[14px]">
            {message}
          </p>
        </div>
      )}

      <button
        onClick={initializeData}
        disabled={loading}
        className="px-[24px] py-[12px] bg-[#0a0a0a] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white hover:bg-[#171717] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Initialisation...' : 'Initialiser les données du graphique'}
      </button>

      <div className="mt-[32px] p-[16px] bg-[#f9f9f9] rounded-[8px]">
        <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] mb-[8px]">
          💡 Information
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#737373]">
          Cette action va créer ou mettre à jour les données historiques pour les 3 périodes :
          3 ans (2022-2024), 10 ans (2015-2024) et 50 ans (1974-2024).
        </p>
      </div>
    </div>
  );
}

// Table Data Manager Component
function TableDataManager({ type, title }: { type: string; title: string }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadData();
  }, [type]);

  const loadData = async () => {
    try {
      // TODO: Réactiver l'API Supabase
      setData([]);

      // const response = await fetch(
      //   `https://${projectId}.supabase.co/functions/v1/make-server-d77343f7/table-data/${type}`,
      //   {
      //     headers: {
      //       'Authorization': `Bearer ${publicAnonKey}`,
      //     },
      //   }
      // );

      // const result = await response.json();
      // setData(result.data || []);
    } catch (error) {
      console.error('Load data error:', error);
      setMessage('❌ Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const initializeTableData = async () => {
    setMessage('Cette fonctionnalité sera disponible prochainement.');
  };

  if (loading) {
    return <p className="text-[#737373]">Chargement...</p>;
  }

  return (
    <div>
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#0a0a0a] mb-[16px]">
        Gestion des {title}
      </h2>
      <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] mb-[24px]">
        {data.length} entrée(s) actuellement dans la base de données.
      </p>

      {message && (
        <div className="rounded-[8px] p-[16px] mb-[24px] bg-blue-50 border border-blue-200">
          <p className="font-['Inter:Medium',sans-serif] text-[14px] text-blue-700">
            {message}
          </p>
        </div>
      )}

      <div className="p-[16px] bg-[#f9f9f9] rounded-[8px]">
        <p className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0a0a0a] mb-[8px]">
          💡 Information
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#737373]">
          Les données des tableaux sont actuellement gérées depuis l'application. 
          L'interface d'édition complète sera disponible dans une prochaine mise à jour.
        </p>
      </div>
    </div>
  );
}