import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DonationModal from './DonationModal';
import Footer from './Footer';
import logoLong from '../../assets/logo_long.jpg';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="fixed bg-white content-stretch flex flex-col left-0 px-[20px] md:px-[120px] py-[16px] md:py-[24px] top-0 w-full z-50">
        {/* Mobile Header - Logo left, burger right */}
        <div className="flex md:hidden items-center justify-between w-full">
          <img src={logoLong} alt="Logo" className="h-[30px]" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-[8px] hover:bg-gray-100 rounded-[6px] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header - Centered logo and menu */}
        <div className="hidden md:flex flex-col">
          <div className="mb-[30px] flex justify-center">
            <img src={logoLong} alt="Logo" className="h-[40px]" />
          </div>

          <div className="flex items-center justify-center overflow-x-auto">
            <div>
              <div className="bg-white content-stretch flex gap-[12px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0 w-fit">
                <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
              
              <Link
                to="/resume"
                className={`content-stretch flex flex-col items-start px-[6px] md:px-[8px] py-[3px] md:py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/resume') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[18px] md:leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  isActive('/resume') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  On est foutu
                </p>
              </Link>

              <Link
                to="/summary"
                className={`content-stretch flex flex-col items-start px-[6px] md:px-[8px] py-[3px] md:py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/summary') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[18px] md:leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  isActive('/summary') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Synthèse
                </p>
              </Link>

              <Link
                to="/expenses"
                className={`content-stretch flex flex-col items-center justify-center px-[6px] md:px-[8px] py-[3px] md:py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/expenses') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[18px] md:leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  isActive('/expenses') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Dépenses
                </p>
              </Link>

              <Link
                to="/revenues"
                className={`content-stretch flex flex-col items-start px-[6px] md:px-[8px] py-[3px] md:py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/revenues') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[18px] md:leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  isActive('/revenues') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Recettes
                </p>
              </Link>

              <Link
                to="/debt"
                className={`content-stretch flex flex-col items-start px-[6px] md:px-[8px] py-[3px] md:py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/debt') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[18px] md:leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  isActive('/debt') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Dette
                </p>
              </Link>

              <Link
                to="/sources"
                className={`content-stretch flex flex-col items-start px-[6px] md:px-[8px] py-[3px] md:py-[4px] relative rounded-[6px] shrink-0 transition-colors z-10 ${
                  isActive('/sources') ? 'bg-[#f5f5f5]' : ''
                }`}
              >
                <p className={`font-['Geist:Medium',sans-serif] font-medium leading-[18px] md:leading-[20px] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  isActive('/sources') ? 'text-black' : 'text-[#8e8e8e]'
                }`}>
                  Sources
                </p>
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-[16px] flex flex-col gap-[8px] border-t border-gray-100 pt-[16px]">
            <Link
              to="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-[12px] py-[8px] rounded-[6px] transition-colors ${
                isActive('/resume') ? 'bg-[#f5f5f5] text-black' : 'text-[#8e8e8e]'
              }`}
            >
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">
                On est foutu
              </p>
            </Link>
            <Link
              to="/summary"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-[12px] py-[8px] rounded-[6px] transition-colors ${
                isActive('/summary') ? 'bg-[#f5f5f5] text-black' : 'text-[#8e8e8e]'
              }`}
            >
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">
                Synthèse
              </p>
            </Link>
            <Link
              to="/expenses"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-[12px] py-[8px] rounded-[6px] transition-colors ${
                isActive('/expenses') ? 'bg-[#f5f5f5] text-black' : 'text-[#8e8e8e]'
              }`}
            >
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">
                Dépenses
              </p>
            </Link>
            <Link
              to="/revenues"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-[12px] py-[8px] rounded-[6px] transition-colors ${
                isActive('/revenues') ? 'bg-[#f5f5f5] text-black' : 'text-[#8e8e8e]'
              }`}
            >
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">
                Recettes
              </p>
            </Link>
            <Link
              to="/debt"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-[12px] py-[8px] rounded-[6px] transition-colors ${
                isActive('/debt') ? 'bg-[#f5f5f5] text-black' : 'text-[#8e8e8e]'
              }`}
            >
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">
                Dette
              </p>
            </Link>
            <Link
              to="/sources"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-[12px] py-[8px] rounded-[6px] transition-colors ${
                isActive('/sources') ? 'bg-[#f5f5f5] text-black' : 'text-[#8e8e8e]'
              }`}
            >
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">
                Sources
              </p>
            </Link>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="pt-[120px] md:pt-[150px] px-[20px] md:px-[120px] pb-[40px] md:pb-[60px]">
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