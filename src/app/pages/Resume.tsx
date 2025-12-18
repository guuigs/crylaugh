import React from 'react';
import FactCards from '../components/FactCards';

export default function Resume() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full h-[calc(100vh-300px)]">
      {/* Background text - top right "c'est Nicolas" */}
      <div className="hidden md:block absolute top-[20%] left-[14%] z-0 pointer-events-none">
        <p className="font-['Geist:Bold',sans-serif] font-bold text-[80px] leading-[90px] text-[#000000] whitespace-nowrap">
          c'est<br />Nicolas
        </p>
      </div>

      {/* Background text - bottom left "qui paye !" */}
      <div className="hidden md:block absolute bottom-[20%] right-[18%] z-0 pointer-events-none">
        <p className="font-['Geist:Bold',sans-serif] font-bold text-[80px] leading-[90px] text-[#000000] whitespace-nowrap">
          qui<br />paye !
        </p>
      </div>

      {/* FactCards on top */}
      <div className="relative z-10">
        <FactCards />
      </div>
    </div>
  );
}