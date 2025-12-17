import React, { useState, useEffect } from 'react';
import DataTable from '../components/EnhancedDataTable';
import { supabase } from '@/lib/supabase';

interface DetteRow {
  id: number;
  nom: string;
  secteur: string;
  responsable: string;
  '2023': number;
  '2024': number;
  variation: number;
  estimation: boolean;
  commentaire: string;
}

interface DeficitRow {
  id: number;
  nom: string;
  secteur: string;
  responsable: string;
  '2023': number;
  '2024': number;
  variation: number;
  estimation: boolean;
  commentaire: string;
}

interface DetenteurRow {
  id: number;
  nom: string;
  secteur: string;
  responsable: string;
  '2023': number;
  '2024': number;
  variation: number;
  estimation: boolean;
  commentaire: string;
}

export default function Debt() {
  const [detteData, setDetteData] = useState<any[]>([]);
  const [deficitData, setDeficitData] = useState<any[]>([]);
  const [detenteurData, setDetenteurData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalDette2024, setTotalDette2024] = useState(0);
  const [totalDeficit2024, setTotalDeficit2024] = useState(0);

  useEffect(() => {
    async function loadAllData() {
      try {
        // Charger les dettes
        const { data: detteRows, error: detteError } = await supabase
          .from('dette')
          .select('*')
          .order('2024', { ascending: false });

        if (detteError) {
          console.error('Error loading dette:', detteError);
        } else if (detteRows && detteRows.length > 0) {
          const converted = detteRows.map((row: DetteRow) => ({
            id: row.id.toString(),
            name: row.nom,
            sector: row.secteur,
            responsible: row.responsable,
            year2023: row['2023'],
            year2024: row['2024'],
            variation: row.variation,
            description: row.commentaire,
            estimation: row.estimation,
          }));
          setDetteData(converted);
          const sum = detteRows.reduce((acc: number, row: DetteRow) => acc + row['2024'], 0);
          setTotalDette2024(sum);
        }

        // Charger les déficits
        const { data: deficitRows, error: deficitError } = await supabase
          .from('deficit')
          .select('*')
          .order('2024', { ascending: true });

        if (deficitError) {
          console.error('Error loading deficit:', deficitError);
        } else if (deficitRows && deficitRows.length > 0) {
          const converted = deficitRows.map((row: DeficitRow) => ({
            id: row.id.toString(),
            name: row.nom,
            sector: row.secteur,
            responsible: row.responsable,
            year2023: row['2023'],
            year2024: row['2024'],
            variation: row.variation,
            description: row.commentaire,
            estimation: row.estimation,
          }));
          setDeficitData(converted);
          const sum = deficitRows.reduce((acc: number, row: DeficitRow) => acc + row['2024'], 0);
          setTotalDeficit2024(sum);
        }

        // Charger les détenteurs
        const { data: detenteurRows, error: detenteurError } = await supabase
          .from('detenteurs')
          .select('*')
          .order('2024', { ascending: false });

        if (detenteurError) {
          console.error('Error loading detenteurs:', detenteurError);
        } else if (detenteurRows && detenteurRows.length > 0) {
          const converted = detenteurRows.map((row: DetenteurRow) => ({
            id: row.id.toString(),
            name: row.nom,
            sector: row.secteur,
            responsible: row.responsable,
            year2023: row['2023'],
            year2024: row['2024'],
            variation: row.variation,
            description: row.commentaire,
            estimation: row.estimation,
          }));
          setDetenteurData(converted);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadAllData();
  }, []);

  if (loading) {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px]">
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373]">
          Chargement des données...
        </p>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-[10px] gap-[20px]">
      {/* Tableau Dette */}
      <DataTable
        title="Dette totale"
        description={`En 2024, la dette publique totale de la France s'élève à ${totalDette2024} milliards d'euros.`}
        data={detteData}
      />

      {/* Tableau Déficit */}
      <DataTable
        title="Déficit annuel"
        description={`En 2024, le déficit public total s'élève à ${totalDeficit2024} milliards d'euros.`}
        data={deficitData}
      />

      {/* Tableau Détenteurs */}
      <DataTable
        title="Détenteurs de la dette de l'État"
        description="Répartition des détenteurs de la dette publique française en 2024."
        data={detenteurData}
      />
    </div>
  );
}
