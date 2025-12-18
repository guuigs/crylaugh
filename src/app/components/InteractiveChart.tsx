import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { supabase } from '@/lib/supabase';

interface DataPoint {
  year: string;
  dette: number;
  depenses: number;
  recettes: number;
  pib: number;
}

interface SyntheseRow {
  id: number;
  annee: number;
  dette: number;
  depense: number;
  recette: number;
  pib: number;
}

// Fallback data in case API fails
const fallbackData3Years: DataPoint[] = [
  { year: '2022', dette: 2900, depenses: 1550, recettes: 1400, pib: 2700 },
  { year: '2023', dette: 3100, depenses: 1620, recettes: 1450, pib: 2800 },
  { year: '2024', dette: 3600, depenses: 1670, recettes: 1500, pib: 2900 },
];

const fallbackData10Years: DataPoint[] = [
  { year: '2015', dette: 2000, depenses: 1300, recettes: 1200, pib: 2200 },
  { year: '2016', dette: 2100, depenses: 1350, recettes: 1250, pib: 2300 },
  { year: '2017', dette: 2200, depenses: 1380, recettes: 1280, pib: 2400 },
  { year: '2018', dette: 2400, depenses: 1420, recettes: 1300, pib: 2500 },
  { year: '2019', dette: 2500, depenses: 1450, recettes: 1320, pib: 2550 },
  { year: '2020', dette: 2700, depenses: 1500, recettes: 1350, pib: 2450 },
  { year: '2021', dette: 2800, depenses: 1520, recettes: 1370, pib: 2600 },
  { year: '2022', dette: 2900, depenses: 1550, recettes: 1400, pib: 2700 },
  { year: '2023', dette: 3100, depenses: 1620, recettes: 1450, pib: 2800 },
  { year: '2024', dette: 3600, depenses: 1670, recettes: 1500, pib: 2900 },
];

const fallbackData50Years: DataPoint[] = [
  { year: '1974', dette: 200, depenses: 350, recettes: 340, pib: 500 },
  { year: '1975', dette: 220, depenses: 370, recettes: 350, pib: 520 },
  { year: '1976', dette: 240, depenses: 390, recettes: 365, pib: 540 },
  { year: '1977', dette: 260, depenses: 410, recettes: 380, pib: 560 },
  { year: '1978', dette: 280, depenses: 430, recettes: 395, pib: 580 },
  { year: '1979', dette: 300, depenses: 450, recettes: 410, pib: 600 },
  { year: '1980', dette: 400, depenses: 500, recettes: 480, pib: 800 },
  { year: '1981', dette: 450, depenses: 530, recettes: 500, pib: 850 },
  { year: '1982', dette: 480, depenses: 560, recettes: 520, pib: 880 },
  { year: '1983', dette: 520, depenses: 580, recettes: 540, pib: 920 },
  { year: '1984', dette: 560, depenses: 600, recettes: 560, pib: 960 },
  { year: '1985', dette: 600, depenses: 620, recettes: 580, pib: 1000 },
  { year: '1986', dette: 650, depenses: 640, recettes: 600, pib: 1050 },
  { year: '1987', dette: 700, depenses: 660, recettes: 620, pib: 1100 },
  { year: '1988', dette: 720, depenses: 680, recettes: 640, pib: 1130 },
  { year: '1989', dette: 760, depenses: 700, recettes: 660, pib: 1170 },
  { year: '1990', dette: 800, depenses: 720, recettes: 680, pib: 1200 },
  { year: '1991', dette: 850, depenses: 740, recettes: 700, pib: 1240 },
  { year: '1992', dette: 880, depenses: 760, recettes: 720, pib: 1270 },
  { year: '1993', dette: 920, depenses: 780, recettes: 740, pib: 1300 },
  { year: '1994', dette: 950, depenses: 800, recettes: 760, pib: 1330 },
  { year: '1995', dette: 1000, depenses: 850, recettes: 800, pib: 1400 },
  { year: '1996', dette: 1050, depenses: 870, recettes: 820, pib: 1440 },
  { year: '1997', dette: 1080, depenses: 890, recettes: 840, pib: 1470 },
  { year: '1998', dette: 1100, depenses: 910, recettes: 860, pib: 1500 },
  { year: '1999', dette: 1140, depenses: 930, recettes: 880, pib: 1540 },
  { year: '2000', dette: 1200, depenses: 980, recettes: 920, pib: 1600 },
  { year: '2001', dette: 1250, depenses: 1000, recettes: 950, pib: 1640 },
  { year: '2002', dette: 1280, depenses: 1020, recettes: 970, pib: 1670 },
  { year: '2003', dette: 1310, depenses: 1040, recettes: 990, pib: 1700 },
  { year: '2004', dette: 1350, depenses: 1070, recettes: 1020, pib: 1750 },
  { year: '2005', dette: 1400, depenses: 1100, recettes: 1050, pib: 1800 },
  { year: '2006', dette: 1450, depenses: 1130, recettes: 1080, pib: 1850 },
  { year: '2007', dette: 1500, depenses: 1160, recettes: 1100, pib: 1900 },
  { year: '2008', dette: 1550, depenses: 1190, recettes: 1120, pib: 1930 },
  { year: '2009', dette: 1600, depenses: 1210, recettes: 1130, pib: 1900 },
  { year: '2010', dette: 1700, depenses: 1250, recettes: 1150, pib: 2000 },
  { year: '2011', dette: 1750, depenses: 1270, recettes: 1170, pib: 2050 },
  { year: '2012', dette: 1800, depenses: 1280, recettes: 1180, pib: 2080 },
  { year: '2013', dette: 1850, depenses: 1285, recettes: 1185, pib: 2100 },
  { year: '2014', dette: 1900, depenses: 1290, recettes: 1190, pib: 2130 },
  { year: '2015', dette: 2000, depenses: 1300, recettes: 1200, pib: 2200 },
  { year: '2016', dette: 2100, depenses: 1350, recettes: 1250, pib: 2300 },
  { year: '2017', dette: 2200, depenses: 1380, recettes: 1280, pib: 2400 },
  { year: '2018', dette: 2400, depenses: 1420, recettes: 1300, pib: 2500 },
  { year: '2019', dette: 2500, depenses: 1450, recettes: 1320, pib: 2550 },
  { year: '2020', dette: 2700, depenses: 1500, recettes: 1350, pib: 2450 },
  { year: '2021', dette: 2800, depenses: 1520, recettes: 1370, pib: 2600 },
  { year: '2022', dette: 2900, depenses: 1550, recettes: 1400, pib: 2700 },
  { year: '2023', dette: 3100, depenses: 1620, recettes: 1450, pib: 2800 },
  { year: '2024', dette: 3600, depenses: 1670, recettes: 1500, pib: 2900 },
];

type TimeRange = '3' | '10' | '50';

export default function InteractiveChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('3');
  const [data3Years, setData3Years] = useState<DataPoint[]>([]);
  const [data10Years, setData10Years] = useState<DataPoint[]>([]);
  const [data50Years, setData50Years] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChartData();
  }, []);

  const loadChartData = async () => {
    try {
      const { data, error } = await supabase
        .from('synthese')
        .select('*')
        .order('annee', { ascending: true });

      if (error) {
        console.error('Error loading synthese:', error);
        // Utiliser les données de fallback en cas d'erreur
        setData3Years(fallbackData3Years);
        setData10Years(fallbackData10Years);
        setData50Years(fallbackData50Years);
        return;
      }

      if (data && data.length > 0) {
        // Convertir les données Supabase au format DataPoint
        const convertedData: DataPoint[] = data.map((row: SyntheseRow) => ({
          year: row.annee.toString(),
          dette: row.dette,
          depenses: row.depense,
          recettes: row.recette,
          pib: row.pib,
        }));

        // Calculer les tranches de données
        const currentYear = 2024;
        const data3Y = convertedData.filter(d => parseInt(d.year) >= currentYear - 2);
        const data10Y = convertedData.filter(d => parseInt(d.year) >= currentYear - 9);
        const data50Y = convertedData;

        setData3Years(data3Y.length > 0 ? data3Y : fallbackData3Years);
        setData10Years(data10Y.length > 0 ? data10Y : fallbackData10Years);
        setData50Years(data50Y.length > 0 ? data50Y : fallbackData50Years);
      } else {
        // Utiliser les données de fallback si la table est vide
        setData3Years(fallbackData3Years);
        setData10Years(fallbackData10Years);
        setData50Years(fallbackData50Years);
      }
    } catch (error) {
      console.error('Error:', error);
      // Utiliser les données de fallback en cas d'erreur
      setData3Years(fallbackData3Years);
      setData10Years(fallbackData10Years);
      setData50Years(fallbackData50Years);
    } finally {
      setLoading(false);
    }
  };

  const getData = () => {
    switch (timeRange) {
      case '3':
        return data3Years;
      case '10':
        return data10Years;
      case '50':
        return data50Years;
      default:
        return data3Years;
    }
  };

  const currentData = getData();
  const latestData = currentData[currentData.length - 1];

  if (loading) {
    return (
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center px-0 py-[100px] relative rounded-[14px] shrink-0 w-full max-w-[1196px]">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
        <p className="text-[#737373]">Chargement des données...</p>
      </div>
    );
  }

  if (!latestData) {
    return (
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center px-0 py-[100px] relative rounded-[14px] shrink-0 w-full max-w-[1196px]">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
        <p className="text-[#737373]">Aucune donnée disponible</p>
      </div>
    );
  }

  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-0 py-[24px] relative rounded-[14px] shrink-0 w-full max-w-[1196px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />

      {/* Title and Time Range Selector */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[6px] items-center px-[24px] py-0 relative w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex font-['Geist:Semi_Bold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap">
                <p className="relative shrink-0">{latestData.dette}</p>
                <p className="relative shrink-0">milliards d'euros</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-nowrap">
                  <p className="leading-[20px]">Ensemble de la dette française en 2024</p>
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex items-center relative shrink-0">
              <div 
                onClick={() => setTimeRange('3')}
                className={`content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] py-0 relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 cursor-pointer ${
                  timeRange === '3' ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  timeRange === '3' ? 'text-[#171717]' : 'text-[#0a0a0a]'
                }`}>
                  3 ans
                </p>
              </div>
              
              <div 
                onClick={() => setTimeRange('10')}
                className={`content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] py-0 relative shrink-0 cursor-pointer ${
                  timeRange === '10' ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  timeRange === '10' ? 'text-[#171717]' : 'text-[#0a0a0a]'
                }`}>
                  10 ans
                </p>
              </div>
              
              <div 
                onClick={() => setTimeRange('50')}
                className={`content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] py-0 relative rounded-br-[8px] rounded-tr-[8px] shrink-0 cursor-pointer ${
                  timeRange === '50' ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_1px_1px_0px] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  timeRange === '50' ? 'text-[#171717]' : 'text-[#0a0a0a]'
                }`}>
                  50 ans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-0 pt-[24px] px-[24px] relative w-full">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData} margin={{ top: 10, right: 5, left: 5, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDette" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EA9218" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#F4E9D9" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDepenses" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E24430" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#EDDFDE" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorRecettes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#666DEA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#E8E9F0" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="0" stroke="#E5E5E5" opacity={0.5} vertical={false} />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#737373', fontSize: 12, fontFamily: 'Geist' }}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: 'Geist'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="dette" 
                    stroke="#EA9218" 
                    strokeWidth={2}
                    fill="url(#colorDette)" 
                    name="Dette de l'état"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="depenses" 
                    stroke="#E24430" 
                    strokeWidth={2}
                    fill="url(#colorDepenses)" 
                    name="Dépenses publiques"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="recettes" 
                    stroke="#666DEA" 
                    strokeWidth={2}
                    fill="url(#colorRecettes)" 
                    name="Recettes publiques"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="pib" 
                    stroke="#FF1CCE" 
                    strokeWidth={3}
                    fill="none"
                    name="PIB"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-0 relative w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 mb-2">
                <div className="bg-[#ea9218] rounded-[4px] shrink-0 size-[16px]" />
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Dette de l'état
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 mb-2">
                <div className="bg-[#e24430] rounded-[4px] shrink-0 size-[16px]" />
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Dépenses publics
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 mb-2">
                <div className="bg-[#666dea] rounded-[4px] shrink-0 size-[16px]" />
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Recettes publiques
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
                <div className="bg-[#ff1cce] rounded-[4px] shrink-0 size-[16px]" />
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  PIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}