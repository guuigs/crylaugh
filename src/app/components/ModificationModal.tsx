import { useState } from 'react';
import { X } from 'lucide-react';

interface ModificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowName: string;
}

export default function ModificationModal({ isOpen, onClose, rowName }: ModificationModalProps) {
  const [email, setEmail] = useState('');
  const [explanation, setExplanation] = useState('');
  const [source, setSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Demande de modification envoyée pour "${rowName}"!\n\nEmail: ${email}\nExplication: ${explanation}\nSource: ${source}`);
    
    setIsSubmitting(false);
    setEmail('');
    setExplanation('');
    setSource('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[16px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto m-4">
        <div className="p-[32px]">
          {/* Header */}
          <div className="flex items-start justify-between mb-[24px]">
            <div>
              <h2 className="font-['Geist:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#0a0a0a] leading-[32px] mb-[8px]">
                Demander une modification
              </h2>
              <p className="font-['Geist:Regular',sans-serif] text-[14px] text-[#737373] leading-[20px]">
                Pour la ligne : <span className="font-medium text-[#0a0a0a]">{rowName}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-[8px] hover:bg-[#f5f5f5] rounded-[6px] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-[20px]">
              <label className="block font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] leading-[20px] mb-[8px]">
                Votre email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#e5e5e5] rounded-[8px] font-['Geist:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#0a0a0a] transition-colors"
                placeholder="votre.email@exemple.fr"
              />
            </div>

            {/* Explanation Field */}
            <div className="mb-[20px]">
              <label className="block font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] leading-[20px] mb-[8px]">
                Explication de la modification <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#e5e5e5] rounded-[8px] font-['Geist:Regular',sans-serif] text-[14px] min-h-[120px] resize-y focus:outline-none focus:border-[#0a0a0a] transition-colors"
                placeholder="Décrivez en détail la modification que vous souhaitez apporter..."
              />
            </div>

            {/* Source Field */}
            <div className="mb-[24px]">
              <label className="block font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] leading-[20px] mb-[8px]">
                Source(s) <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full px-[12px] py-[8px] border border-[#e5e5e5] rounded-[8px] font-['Geist:Regular',sans-serif] text-[14px] min-h-[80px] resize-y focus:outline-none focus:border-[#0a0a0a] transition-colors"
                placeholder="Indiquez les sources qui justifient votre demande (URLs, documents, etc.)"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-[12px] justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-[16px] py-[8px] border border-[#e5e5e5] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a] hover:bg-[#f5f5f5] transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-[16px] py-[8px] bg-[#0a0a0a] rounded-[8px] font-['Geist:Medium',sans-serif] font-medium text-[14px] text-white hover:bg-[#171717] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
