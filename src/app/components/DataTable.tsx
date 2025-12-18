import svgPaths from "../../imports/svg-wxlr5jq1wy";
import { useState } from 'react';

interface TableRow {
  id: string;
  name: string;
  sector: string;
  responsible: string;
  year2023: number;
  year2024: number;
  variation: number;
  hasInfo?: boolean;
}

interface DataTableProps {
  title: string;
  description: string;
  data: TableRow[];
}

export default function DataTable({ title, description, data }: DataTableProps) {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const Arrow = () => (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p41f2880} fill="var(--stroke-0, #8E8E8E)" />
          <path d={svgPaths.p29f68280} fill="var(--stroke-0, #8E8E8E)" />
        </g>
      </svg>
    </div>
  );

  const Ellipsis = () => (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <g>
            <path d={svgPaths.p36e45a00} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p1a14b300} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2295f880} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );

  const Questionmark = () => (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_24)">
          <path d={svgPaths.p39ee6532} stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1957b0e0} stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.00007 11.3333H8.006" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_24">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  const total2023 = data.reduce((sum, row) => sum + row.year2023, 0);
  const total2024 = data.reduce((sum, row) => sum + row.year2024, 0);
  const totalVariation = total2024 - total2023;

  return (
    <div className="w-full max-w-[1200px]">
      {/* Summary Card */}
      <div className="content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0 w-full mb-[20px]">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
          <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
            {title}
          </p>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[6px] items-start leading-[normal] relative shrink-0 text-[#808080] text-[16px] w-full mb-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="relative shrink-0 w-full">* Sommes en milliards d'euros</p>
        <p className="relative shrink-0 w-full">** Les blocs grisés sont des estimations non-issus de sources fiables. Je réalise ce trvail seul et peut faire des erreurs. N'hésitez pas à me faire des retours et des demandes de modifications sourcées.</p>
      </div>

      {/* Table */}
      <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full overflow-hidden">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
        
        {/* Header */}
        <div className="content-stretch flex items-start relative shrink-0 w-full border-b border-[#e5e5e5]">
          <div className="h-[40px] shrink-0 w-[32.7px]" />
          
          <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[250px]">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                Nom
              </p>
              <Arrow />
            </div>
          </div>
          
          <div 
            className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[250px] cursor-pointer"
            onClick={() => handleSort('sector')}
          >
            <div className="content-stretch flex h-[40px] items-center px-0 py-[8px] relative rounded-[6px] shrink-0 w-[92.99px]">
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                Secteur
              </p>
              <div className="content-stretch flex items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
                <Arrow />
              </div>
            </div>
          </div>
          
          <div 
            className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[180px] cursor-pointer"
            onClick={() => handleSort('responsible')}
          >
            <div className="content-stretch flex h-[40px] items-center px-0 py-[8px] relative rounded-[6px] shrink-0 w-[92.99px]">
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                Responsable
              </p>
              <div className="content-stretch flex items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0">
                <Arrow />
              </div>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[150px]">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                2023
              </p>
              <Arrow />
            </div>
          </div>
          
          <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[150px]">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                2024
              </p>
              <Arrow />
            </div>
          </div>
          
          <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
              <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                Variation
              </p>
              <Arrow />
            </div>
          </div>
          
          <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" />
        </div>

        {/* Rows */}
        {data.map((row, index) => (
          <div 
            key={row.id}
            className={`content-stretch flex items-center min-h-[49px] relative shrink-0 w-full border-b border-[#e5e5e5] ${
              index % 2 === 1 ? 'bg-[#f2f2f2]' : ''
            }`}
          >
            <div className="content-stretch flex h-[49px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0 w-[32.7px]">
              {row.hasInfo && <Questionmark />}
            </div>
            
            <div className="content-stretch flex flex-col items-start justify-center min-h-[49px] p-[8px] relative shrink-0 w-[250px]">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] w-[234px]">
                  {row.name}
                </p>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[250px]">
              <div className="bg-[#ede7c0] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#555033] text-[14px] text-nowrap">
                  {row.sector}
                </p>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[180px]">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                  {row.responsible}
                </p>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[150px]">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                  {row.year2023}
                </p>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[150px]">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                  {row.year2024}
                </p>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[100px]">
              <div className="content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-center leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap w-full">
                <p className="relative shrink-0">{row.variation > 0 ? '+' : ''}</p>
                <p className="relative shrink-0">{row.variation}</p>
              </div>
            </div>
            
            <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]">
                    <Ellipsis />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
