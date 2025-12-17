import svgPaths from "../../imports/svg-ek4bqvjeav";
import { SquareArrowOutUpRight } from 'lucide-react';

interface SourceCardProps {
  title: string;
  description: string;
  url: string;
}

function SourceCard({ title, description, url }: SourceCardProps) {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[#0a0a0a] text-[36px] w-full">
                {title}
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#737373] text-[16px] w-full">
                {description}
              </p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#e5e5e5] transition-colors"
            >
              <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">
                Visiter le site
              </p>
              <SquareArrowOutUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sources() {
  const sources = [
    {
      title: 'INSEE',
      description: 'Institut National de la Statistique et des Études Économiques - Organisme officiel de statistiques en France, fournissant des données économiques et sociales fiables.',
      url: 'https://www.insee.fr'
    },
    {
      title: 'Ministère de l\'Économie',
      description: 'Ministère de l\'Économie, des Finances et de la Souveraineté industrielle et numérique - Source officielle des données budgétaires et financières de l\'État français.',
      url: 'https://www.economie.gouv.fr'
    },
    {
      title: 'Banque de France',
      description: 'Banque centrale nationale de la France - Fournit des statistiques monétaires et financières détaillées sur l\'économie française.',
      url: 'https://www.banque-france.fr'
    },
    {
      title: 'Cour des comptes',
      description: 'Institution française chargée du contrôle des comptes publics - Publie des rapports détaillés sur les finances publiques.',
      url: 'https://www.ccomptes.fr'
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full max-w-[1200px] mt-[10px]">
      {sources.map((source, index) => (
        <SourceCard
          key={index}
          title={source.title}
          description={source.description}
          url={source.url}
        />
      ))}
    </div>
  );
}