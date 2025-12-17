import svgPaths from "./svg-wxlr5jq1wy";

function Wrapper13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function TableHeader13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[49px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Ellipsis() {
  return (
    <Wrapper13>
      <g id="ellipsis">
        <g id="Vector">
          <path d={svgPaths.p36e45a00} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1a14b300} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2295f880} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </Wrapper13>
  );
}
type TextText4Props = {
  text: string;
};

function TextText4({ text }: TextText4Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type TextText3Props = {
  text: string;
};

function TextText3({ text }: TextText3Props) {
  return (
    <div className="bg-[#ede7c0] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#555033] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] w-[234px]">{text}</p>
    </div>
  );
}

function Questionmark() {
  return (
    <Wrapper13>
      <g clipPath="url(#clip0_1_24)" id="Questionmark">
        <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1957b0e0} id="Vector_2" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00007 11.3333H8.006" id="Vector_3" stroke="var(--stroke-0, #626262)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_24">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </Wrapper13>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">{text}</p>
      <Arrow />
    </div>
  );
}

function Arrow() {
  return (
    <Wrapper13>
      <g id="Arrow">
        <path d={svgPaths.p41f2880} fill="var(--stroke-0, #8E8E8E)" id="Arrow 1" />
        <path d={svgPaths.p29f68280} fill="var(--stroke-0, #8E8E8E)" id="Arrow 2" />
      </g>
    </Wrapper13>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8e8e8e] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <TextText text="Résumé" />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <TextText text="Les chiffres qui font rire ... ou pleurer" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap">Dépenses</p>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Menu item">
      <Text />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <TextText text="Recettes" />
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <TextText text="Dette" />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <TextText text="Sources" />
    </div>
  );
}

function Menubar() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Menubar">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Wrapper />
      <Wrapper1 />
      <MenuItem />
      <Wrapper2 />
      <Wrapper3 />
      <Wrapper4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Menubar />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]">
      <Frame4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-[1166px]">En 2024, l’ensemble des institutions publiques en France ont dépensées 1670 milliards d’euros.</p>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Text2 text="Total" />
      <Text1 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex items-center p-[16px] relative rounded-[8px] shrink-0 w-[1200px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Wrapper5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[6px] items-start leading-[normal] relative shrink-0 text-[#808080] text-[16px] w-[304px]">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        * Sommes en milliards d’euros
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        ** Les blocs grisés sont des estimations
      </p>
    </div>
  );
}

function TableHeader() {
  return <div className="h-[40px] shrink-0 w-[32.7px]" data-name="Table header" />;
}

function TableHeader1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[250px]" data-name="Table header">
      <TextText1 text="Nom" />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <Arrow />
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-0 py-[8px] relative rounded-[6px] shrink-0 w-[92.99px]" data-name="Wrapper">
      <Text2 text="Secteur" />
      <Wrapper6 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[250px]" data-name="Table header">
      <Wrapper7 />
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[8px] pr-0 py-0 relative shrink-0" data-name="Wrapper">
      <Arrow />
    </div>
  );
}

function Wrapper9() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-0 py-[8px] relative rounded-[6px] shrink-0 w-[92.99px]" data-name="Wrapper">
      <Text2 text="Responsable" />
      <Wrapper8 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[180px]" data-name="Table header">
      <Wrapper9 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[150px]" data-name="Table header">
      <TextText1 text="2023" />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[150px]" data-name="Table header">
      <TextText1 text="2024" />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center px-[8px] py-0 relative shrink-0 w-[100px]" data-name="Table header">
      <TextText1 text="Variation" />
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Table header">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader />
      <TableHeader1 />
      <TableHeader2 />
      <TableHeader3 />
      <TableHeader4 />
      <TableHeader5 />
      <TableHeader6 />
      <TableHeader7 />
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="content-stretch flex h-[49px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0 w-[32.7px]" data-name="Table header">
      <Questionmark />
    </div>
  );
}

function TableHeader9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[49px] p-[8px] relative shrink-0 w-[250px]" data-name="Table header">
      <TextText2 text="Cotisations patronales pour la France libre" />
    </div>
  );
}

function TableHeader10() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[250px]" data-name="Table header">
      <TextText3 text="Cotisations sociales" />
    </div>
  );
}

function TableHeader11() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[180px]" data-name="Table header">
      <TextText4 text="Gouvernement" />
    </div>
  );
}

function TableHeader12() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[150px]" data-name="Table header">
      <TextText4 text="316" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap w-full" data-name="Text">
      <p className="relative shrink-0">+</p>
      <p className="relative shrink-0">316</p>
    </div>
  );
}

function TableHeader14() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table header">
      <Text3 />
    </div>
  );
}

function Wrapper10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Wrapper">
      <Ellipsis />
    </div>
  );
}

function TableHeader15() {
  return (
    <TableHeader13>
      <Wrapper10 />
    </TableHeader13>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center min-h-[49px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader8 />
      <TableHeader9 />
      <TableHeader10 />
      <TableHeader11 />
      {[...Array(2).keys()].map((_, i) => (
        <TableHeader12 key={i} />
      ))}
      <TableHeader14 />
      <TableHeader15 />
    </div>
  );
}

function TableHeader16() {
  return (
    <div className="content-stretch flex h-[49px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0 w-[32.7px]" data-name="Table header">
      <Questionmark />
    </div>
  );
}

function TableHeader17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[49px] p-[8px] relative shrink-0 w-[250px]" data-name="Table header">
      <TextText2 text="Cotisations de la fête" />
    </div>
  );
}

function TableHeader18() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[250px]" data-name="Table header">
      <TextText3 text="Cotisations sociales" />
    </div>
  );
}

function TableHeader19() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[180px]" data-name="Table header">
      <TextText4 text="Gouvernement" />
    </div>
  );
}

function TableHeader20() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[150px]" data-name="Table header">
      <TextText4 text="316" />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap w-full" data-name="Text">
      <p className="relative shrink-0">+</p>
      <p className="relative shrink-0">316</p>
    </div>
  );
}

function TableHeader21() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table header">
      <Text4 />
    </div>
  );
}

function Wrapper11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Wrapper">
      <Ellipsis />
    </div>
  );
}

function TableHeader22() {
  return (
    <TableHeader13>
      <Wrapper11 />
    </TableHeader13>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center min-h-[49px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader16 />
      <TableHeader17 />
      <TableHeader18 />
      <TableHeader19 />
      {[...Array(2).keys()].map((_, i) => (
        <TableHeader20 key={i} />
      ))}
      <TableHeader21 />
      <TableHeader22 />
    </div>
  );
}

function TableHeader23() {
  return (
    <div className="content-stretch flex h-[49px] items-center justify-center pl-[8px] pr-0 py-[8px] relative shrink-0 w-[32.7px]" data-name="Table header">
      <Questionmark />
    </div>
  );
}

function TableHeader24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-h-[49px] p-[8px] relative shrink-0 w-[250px]" data-name="Table header">
      <TextText2 text="Cotisations de la fête" />
    </div>
  );
}

function TableHeader25() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[250px]" data-name="Table header">
      <TextText3 text="Cotisations sociales" />
    </div>
  );
}

function TableHeader26() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[180px]" data-name="Table header">
      <TextText4 text="Gouvernement" />
    </div>
  );
}

function TableHeader27() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[150px]" data-name="Table header">
      <TextText4 text="316" />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap w-full" data-name="Text">
      <p className="relative shrink-0">+</p>
      <p className="relative shrink-0">316</p>
    </div>
  );
}

function TableHeader28() {
  return (
    <div className="content-stretch flex flex-col h-[49px] items-start justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table header">
      <Text5 />
    </div>
  );
}

function Wrapper12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Wrapper">
      <Ellipsis />
    </div>
  );
}

function TableHeader29() {
  return (
    <TableHeader13>
      <Wrapper12 />
    </TableHeader13>
  );
}

function Row2() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center min-h-[49px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader23 />
      <TableHeader24 />
      <TableHeader25 />
      <TableHeader26 />
      {[...Array(2).keys()].map((_, i) => (
        <TableHeader27 key={i} />
      ))}
      <TableHeader28 />
      <TableHeader29 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Header />
      <Row />
      <Row1 />
      <Row2 />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1200px]">
      <Card />
      <Frame1 />
      <Table />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[120px] pb-0 pt-[120px] px-0 top-0">
      <Frame />
      <Frame5 />
    </div>
  );
}

function Circle() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[36px]" data-name="Circle">
      <div className="absolute bg-black inset-0 rounded-[9999px]" data-name="avatar-image" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 p-[36px] top-0 w-[1440px]">
      <div className="h-[40px] relative shrink-0 w-[64px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 40">
          <g id="Vector">
            <path d={svgPaths.p2019c980} fill="var(--fill-0, black)" />
            <path d={svgPaths.p21937080} fill="var(--fill-0, black)" />
            <path d={svgPaths.p20fc6080} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2ebaf200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p93f7500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1599780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3d1d0d80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p22ce7a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3cbc1700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1edb0b00} fill="var(--fill-0, black)" />
            <path d={svgPaths.pee4f200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p51c6500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p9dd24f0} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <Circle />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 4">
      <Frame3 />
      <Frame2 />
    </div>
  );
}