import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js';
// import { projectId, publicAnonKey } from '../../../utils/supabase/info';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const supabase = createClient(
  //   `https://${projectId}.supabase.co`,
  //   publicAnonKey
  // );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Réactiver l'authentification Supabase
      setError('Authentification Supabase désactivée temporairement');

      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password,
      // });

      // if (error) throw error;

      // if (data.session) {
      //   localStorage.setItem('access_token', data.session.access_token);
      //   navigate('/admin');
      // }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Erreur lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
      <div className="bg-white rounded-[16px] shadow-lg w-full max-w-[400px] p-[32px]">
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] text-[#0a0a0a] mb-[8px]">
          Connexion Admin
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] mb-[24px]">
          Connectez-vous pour accéder à l'interface d'administration
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-[8px] p-[12px] mb-[20px]">
            <p className="font-['Inter:Medium',sans-serif] text-[14px] text-red-600">
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-[20px]">
            <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] mb-[8px]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-[12px] py-[10px] border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent"
              placeholder="admin@example.com"
            />
          </div>

          <div className="mb-[24px]">
            <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] mb-[8px]">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-[12px] py-[10px] border border-[#e5e5e5] rounded-[8px] font-['Inter:Regular',sans-serif] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-[16px] py-[12px] bg-[#0a0a0a] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[16px] text-white hover:bg-[#171717] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-[24px] text-center">
          <button
            onClick={() => navigate('/')}
            className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] hover:text-[#0a0a0a] transition-colors"
          >
            ← Retour au site
          </button>
        </div>
      </div>
    </div>
  );
}