interface FooterProps {
  onSupportClick: () => void;
}

export default function Footer({ onSupportClick }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 md:py-8">
      <div className="px-[20px] md:px-[120px]">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <a
            href="mailto:argentpublic_sav@proton.me"
            className="text-[#8e8e8e] hover:text-black transition-colors text-[12px] md:text-[14px] font-medium"
          >
            Me contacter
          </a>

          {/* <button
            onClick={onSupportClick}
            className="text-[#8e8e8e] hover:text-black transition-colors text-[12px] md:text-[14px] font-medium"
          >
            Me soutenir
          </button> */}
        </div>
      </div>
    </footer>
  );
}
