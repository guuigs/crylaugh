import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import DonationModal from './DonationModal';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white relative min-h-screen">
      {/* Header */}
      <div className="fixed bg-white content-stretch flex flex-col left-0 px-[120px] py-[24px] top-0 w-full z-50 border-b border-gray-100">
        {/* Title */}
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] text-[#0a0a0a] mb-[16px]">
          Etat des lieux de l'argent public
        </h1>
        
        {/* Navigation and Donation Row */}
        <div className="flex items-center justify-between">
          {/* Navigation Row */}
          <div>
            {/* Navigation Menubar */}
            <div className="bg-white content-stretch flex gap-[12px] items-center justify-start p-[4px] relative rounded-[8px] shrink-0 w-fit">
              <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              
              <Link 
                to="/resume"
                className={`content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/resume') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  isActive('/resume') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Rire ou pleurer
                </p>
              </Link>

              <Link 
                to="/summary"
                className={`content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/summary') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  isActive('/summary') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Synthèse
                </p>
              </Link>

              <Link 
                to="/expenses"
                className={`content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/expenses') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  isActive('/expenses') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Dépenses
                </p>
              </Link>

              <Link 
                to="/revenues"
                className={`content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/revenues') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  isActive('/revenues') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Recettes
                </p>
              </Link>

              <Link 
                to="/debt"
                className={`content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/debt') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  isActive('/debt') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Dette
                </p>
              </Link>

              <Link 
                to="/sources"
                className={`content-stretch flex flex-col items-start px-[8px] py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/sources') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap ${
                  isActive('/sources') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Sources
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[140px] px-[120px] pb-[60px]">
        {/* Page Content */}
        {children}
      </div>

      {/* Donation Modal */}
      <DonationModal isOpen={isDonationModalOpen} onClose={() => setIsDonationModalOpen(false)} />

      {/* Footer */}
      <Footer onSupportClick={() => setIsDonationModalOpen(true)} />
    </div>
  );
}