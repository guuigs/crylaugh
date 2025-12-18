import { useState, useEffect } from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface SourceCardProps {
  title: string;
  description: string;
  url: string;
}

function SourceCard({ title, description, url }: SourceCardProps) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
              <p className="font-['Geist:Semi_Bold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full">
                {title}
              </p>
              <p className="font-['Geist:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] w-full">
                {description}
              </p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#e5e5e5] transition-colors"
            >
              <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[11px] text-nowrap">
                Visiter
              </p>
              <SquareArrowOutUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SourceRow {
  id: number;
  Nom: string;
  Explication: string;
  Lien: string;
}

export default function Sources() {
  const [sources, setSources] = useState<SourceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSources() {
      try {
        const { data, error } = await supabase
          .from('sources')
          .select('*')
          .order('id', { ascending: true });

        if (error) {
          console.error('Error loading sources:', error);
          setError(error.message);
        } else if (data) {
          setSources(data);
        }
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadSources();
  }, []);

  if (loading) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px]">
        <p className="font-['Geist:Regular',sans-serif] text-[14px] text-[#737373]">
          Chargement des sources...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px]">
        <p className="font-['Geist:Regular',sans-serif] text-[14px] text-red-600">
          Erreur: {error}
        </p>
      </div>
    );
  }

  if (sources.length === 0) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px]">
        <p className="font-['Geist:Regular',sans-serif] text-[14px] text-[#737373]">
          Aucune source trouvée.
        </p>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full max-w-[1200px] mt-[10px]">
      {sources.map((source) => (
        <SourceCard
          key={source.id}
          title={source.Nom}
          description={source.Explication}
          url={source.Lien}
        />
      ))}
    </div>
  );
}