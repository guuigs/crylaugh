import { Link } from 'react-router-dom';

interface FooterProps {
  onSupportClick: () => void;
}

export default function Footer({ onSupportClick }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="px-[120px]">
        <div className="flex items-center justify-center gap-8">
          <a
            href="mailto:contact@example.com"
            className="text-[#8e8e8e] hover:text-black transition-colors text-[14px] font-medium"
          >
            Me contacter
          </a>
          
          <button
            onClick={onSupportClick}
            className="text-[#8e8e8e] hover:text-black transition-colors text-[14px] font-medium"
          >
            Me soutenir
          </button>
          
          <Link
            to="/admin"
            className="text-[#8e8e8e] hover:text-black transition-colors text-[14px] font-medium"
          >
            Administrateur
          </Link>
        </div>
      </div>
    </footer>
  );
}
