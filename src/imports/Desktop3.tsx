import svgPaths from "./svg-ek4bqvjeav";

function Button2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <TextText1 text="Visiter le site" />
      <SquareArrowOutUpRight />
    </div>
  );
}

function SquareArrowOutUpRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="square-arrow-out-up-right">
          <path d={svgPaths.p30b3d400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type ComponentDescriptionProps = {
  text: string;
  text1: string;
};

function ComponentDescription({ text, text1 }: ComponentDescriptionProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Geist:Semi_Bold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[#0a0a0a] text-[36px] w-full">{text}</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#737373] text-[16px] w-full">{text1}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8e8e8e] text-[14px] text-nowrap">{text}</p>
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

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap">Sources</p>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Wrapper">
      <Text />
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <ComponentDescription text="INSEE" text1="Description de l’INSEE" />
      <Buttons />
    </div>
  );
}

function Button() {
  return (
    <Button2>
      <Frame />
    </Button2>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <ComponentDescription text="Ministère de l’Économie" text1="Description de l’INSEE" />
      <Buttons />
    </div>
  );
}

function Button1() {
  return (
    <Button2>
      <Frame1 />
    </Button2>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Menubar />
      <Button />
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1200px]">
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[120px] pb-0 pt-[120px] px-0 top-0">
      <Frame2 />
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

function Frame4() {
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
    <div className="bg-white relative size-full" data-name="Desktop - 3">
      <Frame4 />
      <Frame3 />
    </div>
  );
}