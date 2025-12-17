import { X } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  if (!isOpen) return null;

  const btcAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(btcAddress);
    alert('Adresse copiée dans le presse-papier !');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[16px] w-full max-w-[500px] max-h-[90vh] overflow-y-auto m-4">
        <div className="p-[32px]">
          {/* Header */}
          <div className="flex items-start justify-between mb-[24px]">
            <div>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#0a0a0a] leading-[32px] mb-[8px]">
                Soutenez ce projet
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#737373] leading-[20px]">
                Faites un don en Bitcoin pour soutenir la transparence des données publiques
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-[8px] hover:bg-[#f5f5f5] rounded-[6px] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* QR Code */}
          <div className="flex items-center justify-center mb-[24px]">
            <div className="bg-white border-4 border-[#0a0a0a] p-[16px] rounded-[12px]">
              {/* Fake QR Code using a pattern */}
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="white"/>
                {/* Top-left corner */}
                <rect x="10" y="10" width="50" height="50" fill="black"/>
                <rect x="20" y="20" width="30" height="30" fill="white"/>
                <rect x="25" y="25" width="20" height="20" fill="black"/>
                {/* Top-right corner */}
                <rect x="140" y="10" width="50" height="50" fill="black"/>
                <rect x="150" y="20" width="30" height="30" fill="white"/>
                <rect x="155" y="25" width="20" height="20" fill="black"/>
                {/* Bottom-left corner */}
                <rect x="10" y="140" width="50" height="50" fill="black"/>
                <rect x="20" y="150" width="30" height="30" fill="white"/>
                <rect x="25" y="155" width="20" height="20" fill="black"/>
                
                {/* Random pattern blocks */}
                <rect x="70" y="10" width="10" height="10" fill="black"/>
                <rect x="85" y="10" width="10" height="10" fill="black"/>
                <rect x="100" y="10" width="10" height="10" fill="black"/>
                <rect x="115" y="10" width="10" height="10" fill="black"/>
                
                <rect x="10" y="70" width="10" height="10" fill="black"/>
                <rect x="10" y="85" width="10" height="10" fill="black"/>
                <rect x="10" y="100" width="10" height="10" fill="black"/>
                <rect x="10" y="115" width="10" height="10" fill="black"/>
                
                <rect x="70" y="70" width="10" height="10" fill="black"/>
                <rect x="85" y="75" width="10" height="10" fill="black"/>
                <rect x="100" y="70" width="10" height="10" fill="black"/>
                <rect x="115" y="75" width="10" height="10" fill="black"/>
                <rect x="130" y="70" width="10" height="10" fill="black"/>
                
                <rect x="70" y="85" width="10" height="10" fill="black"/>
                <rect x="90" y="85" width="10" height="10" fill="black"/>
                <rect x="105" y="90" width="10" height="10" fill="black"/>
                <rect x="125" y="85" width="10" height="10" fill="black"/>
                <rect x="140" y="90" width="10" height="10" fill="black"/>
                
                <rect x="75" y="100" width="10" height="10" fill="black"/>
                <rect x="95" y="105" width="10" height="10" fill="black"/>
                <rect x="110" y="100" width="10" height="10" fill="black"/>
                <rect x="130" y="105" width="10" height="10" fill="black"/>
                <rect x="145" y="100" width="10" height="10" fill="black"/>
                
                <rect x="70" y="115" width="10" height="10" fill="black"/>
                <rect x="85" y="120" width="10" height="10" fill="black"/>
                <rect x="100" y="115" width="10" height="10" fill="black"/>
                <rect x="120" y="120" width="10" height="10" fill="black"/>
                <rect x="135" y="115" width="10" height="10" fill="black"/>
                
                <rect x="70" y="130" width="10" height="10" fill="black"/>
                <rect x="90" y="135" width="10" height="10" fill="black"/>
                <rect x="105" y="130" width="10" height="10" fill="black"/>
                <rect x="125" y="135" width="10" height="10" fill="black"/>
                <rect x="140" y="130" width="10" height="10" fill="black"/>
                
                <rect x="75" y="145" width="10" height="10" fill="black"/>
                <rect x="95" y="150" width="10" height="10" fill="black"/>
                <rect x="110" y="145" width="10" height="10" fill="black"/>
                <rect x="130" y="150" width="10" height="10" fill="black"/>
                <rect x="145" y="145" width="10" height="10" fill="black"/>
                
                <rect x="70" y="160" width="10" height="10" fill="black"/>
                <rect x="85" y="165" width="10" height="10" fill="black"/>
                <rect x="100" y="160" width="10" height="10" fill="black"/>
                <rect x="120" y="165" width="10" height="10" fill="black"/>
                <rect x="135" y="160" width="10" height="10" fill="black"/>
                
                <rect x="75" y="175" width="10" height="10" fill="black"/>
                <rect x="90" y="180" width="10" height="10" fill="black"/>
                <rect x="110" y="175" width="10" height="10" fill="black"/>
                <rect x="125" y="180" width="10" height="10" fill="black"/>
                <rect x="145" y="175" width="10" height="10" fill="black"/>
                
                <rect x="160" y="70" width="10" height="10" fill="black"/>
                <rect x="165" y="85" width="10" height="10" fill="black"/>
                <rect x="170" y="100" width="10" height="10" fill="black"/>
                <rect x="175" y="115" width="10" height="10" fill="black"/>
                <rect x="180" y="130" width="10" height="10" fill="black"/>
                <rect x="185" y="145" width="10" height="10" fill="black"/>
                <rect x="190" y="160" width="10" height="10" fill="black"/>
                
                <rect x="165" y="175" width="10" height="10" fill="black"/>
                <rect x="175" y="180" width="10" height="10" fill="black"/>
                <rect x="185" y="185" width="10" height="10" fill="black"/>
              </svg>
            </div>
          </div>

          {/* Bitcoin Address */}
          <div className="mb-[24px]">
            <label className="block font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] leading-[20px] mb-[8px]">
              Adresse Bitcoin
            </label>
            <div className="flex gap-[8px]">
              <input
                type="text"
                readOnly
                value={btcAddress}
                className="flex-1 px-[12px] py-[8px] border border-[#e5e5e5] rounded-[8px] font-['Monaco','Courier_New',monospace] text-[13px] bg-[#f9f9f9] text-[#0a0a0a]"
              />
              <button
                onClick={copyToClipboard}
                className="px-[16px] py-[8px] bg-[#0a0a0a] rounded-[8px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-white hover:bg-[#171717] transition-colors shrink-0"
              >
                Copier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
