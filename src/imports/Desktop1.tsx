import svgPaths from "./svg-jleuzgv9aw";
import clsx from "clsx";
type MonthTextProps = {
  text: string;
};

function MonthText({ text }: MonthTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}
type FondVectorProps = {
  additionalClassNames?: string;
};

function FondVector({ additionalClassNames = "" }: FondVectorProps) {
  return (
    <div className={clsx("absolute h-0 left-[5px] w-[1143px]", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1143 1">
          <path d="M0 0.5H1143" id="Vector" opacity="0.5" stroke="var(--stroke-0, #E5E5E5)" />
        </svg>
      </div>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
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

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap">Résumé</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <Text />
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

function MenuItem() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Menu item">
      <TextText text="Dépenses" />
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

function Title() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" data-name="Title">
      <p className="relative shrink-0">3600</p>
      <p className="relative shrink-0">{`milliards d’euros `}</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[14px] text-nowrap">
        <p className="leading-[20px]">Ensemble de la dette française en 2024</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
      <Title />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] text-nowrap">3 ans</p>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] py-0 relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
      <Text2 />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] py-0 relative shrink-0" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <TextText1 text="10 ans" />
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-center justify-center px-[16px] py-0 relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_1px_1px_0px] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
      <TextText1 text="50 ans" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tabs">
      <Wrapper5 />
      <Wrapper6 />
      <Wrapper7 />
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[24px] py-0 relative w-full">
          <Frame2 />
          <Tabs />
        </div>
      </div>
    </div>
  );
}

function Fond() {
  return (
    <div className="absolute contents left-[5px] top-[-1.5px]" data-name="fond">
      <FondVector additionalClassNames="top-[51.5px]" />
      <FondVector additionalClassNames="top-[-1.5px]" />
      <FondVector additionalClassNames="top-[104.5px]" />
      <FondVector additionalClassNames="top-[157.5px]" />
      <FondVector additionalClassNames="bottom-[-0.5px]" />
    </div>
  );
}

function Chart() {
  return (
    <div className="h-[210px] relative shrink-0 w-full" data-name="Chart">
      <Fond />
      <div className="absolute h-[209px] left-px top-px w-[1147px]">
        <div className="absolute inset-[-0.24%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1148 211">
            <path d={svgPaths.p2b657d40} fill="url(#paint0_linear_1_6)" id="Vector 2" stroke="var(--stroke-0, #EA9218)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_6" x1="574" x2="574" y1="51.5102" y2="209.51">
                <stop stopColor="#EA9218" />
                <stop offset="1" stopColor="#F4E9D9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[117.5px] left-px top-[92.5px] w-[1147px]">
        <div className="absolute inset-[-0.43%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1148 119">
            <path d={svgPaths.p11c0d600} fill="url(#paint0_linear_1_10)" id="Vector 3" stroke="var(--stroke-0, #E24430)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_10" x1="574" x2="574" y1="13.0072" y2="118.007">
                <stop stopColor="#E24430" />
                <stop offset="1" stopColor="#EDDFDE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[63px] left-px top-[147px] w-[1147px]">
        <div className="absolute inset-[-0.83%_-0.04%_-0.79%_-0.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1148 65">
            <path d={svgPaths.p178b02c0} fill="url(#paint0_linear_1_12)" id="Vector 1" stroke="var(--stroke-0, #666DEA)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_12" x1="574" x2="574" y1="0.525326" y2="63.5253">
                <stop stopColor="#666DEA" />
                <stop offset="1" stopColor="#E8E9F0" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[33.5px] left-[4px] top-[30px] w-[1136px]">
        <div className="absolute inset-[-4.48%_0_-4.47%_-0.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1137 37">
            <path d={svgPaths.p33246060} id="Vector 4" stroke="var(--stroke-0, #FF1CCE)" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function XAxis() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="X-axis">
      <MonthText text="2021" />
      <MonthText text="2022" />
      <MonthText text="2023" />
      <MonthText text="2024" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-end justify-between relative shrink-0 w-full">
      <XAxis />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[250px] items-center relative shrink-0 w-full">
      <Chart />
      <Frame1 />
    </div>
  );
}

function Wrapper9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-0 pt-[24px] px-[24px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="bg-[#ea9218] rounded-[4px] shrink-0 size-[16px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dette de l’état
      </p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="bg-[#e24430] rounded-[4px] shrink-0 size-[16px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dépenses publics
      </p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="bg-[#666dea] rounded-[4px] shrink-0 size-[16px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recettes publiques
      </p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Title">
      <div className="bg-[#ff1cce] rounded-[4px] shrink-0 size-[16px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        PIB
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Title1 />
      <Title2 />
      <Title3 />
      <Title4 />
    </div>
  );
}

function Wrapper10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-0 relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Chart1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-0 py-[24px] relative rounded-[14px] shrink-0 w-[1196px]" data-name="Chart">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Wrapper8 />
      <Wrapper9 />
      <Wrapper10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Chart1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]">
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[120px] pb-0 pt-[120px] px-0 top-0">
      <Menubar />
      <Frame4 />
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

function Frame6() {
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
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <Frame6 />
      <Frame5 />
    </div>
  );
}