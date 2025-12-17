import React, { useState, useEffect } from 'react';
import DataTable from '../components/EnhancedDataTable';
import { supabase } from '@/lib/supabase';

interface RecetteRow {
  id: number;
  nom: string;
  secteur: string;
  'responsable 1': string | null;
  'responsable 2': string | null;
  '2023': number;
  '2024': number;
  variation: number;
  estimation: boolean;
  commentaire: string;
}

export default function Revenues() {
  const [revenuesData, setRevenuesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [total2024, setTotal2024] = useState(0);

  useEffect(() => {
    async function loadRevenues() {
      try {
        const { data, error } = await supabase
          .from('recettes')
          .select('*')
          .order('2024', { ascending: false });

        if (error) {
          console.error('Error loading recettes:', error);
          return;
        }

        if (data && data.length > 0) {
          const converted = data.map((row: RecetteRow) => {
            const responsibles = [row['responsable 1'], row['responsable 2']].filter(Boolean);
            return {
              id: row.id.toString(),
              name: row.nom,
              sector: row.secteur,
              responsible: responsibles.length > 1 ? responsibles : responsibles[0] || '',
              year2023: row['2023'],
              year2024: row['2024'],
              variation: row.variation,
              description: row.commentaire,
              estimation: row.estimation,
            };
          });

          setRevenuesData(converted);
          const sum = data.reduce((acc: number, row: RecetteRow) => acc + row['2024'], 0);
          setTotal2024(sum);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadRevenues();
  }, []);

  if (loading) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px]">
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
          Chargement des recettes...
        </p>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px]">
      <DataTable
        title="Total"
        description={`En 2024, l'ensemble des institutions publiques en France ont collecté ${total2024} milliards d'euros de recettes.`}
        data={revenuesData}
      />
    </div>
  );
}
