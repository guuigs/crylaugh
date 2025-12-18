import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Anecdote {
  id: number;
  anecdote: string;
}

// Fonction pour mélanger aléatoirement un tableau
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function FactCards() {
  const [cards, setCards] = useState<Anecdote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  // Charger les anecdotes depuis Supabase
  useEffect(() => {
    async function loadAnecdotes() {
      try {
        const { data, error } = await supabase
          .from('anecdote')
          .select('*');

        if (error) {
          console.error('Error loading anecdotes:', error);
          return;
        }

        if (data && data.length > 0) {
          setCards(shuffleArray(data));
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    loadAnecdotes();
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartPos({ x: clientX, y: clientY });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || isAnimating) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    setDragOffset({
      x: clientX - startPos.x,
      y: clientY - startPos.y,
    });
  };

  const handleDragEnd = () => {
    if (!isDragging || isAnimating) return;
    setIsDragging(false);

    // Si le swipe est assez fort (> 100px), on retire la carte
    if (Math.abs(dragOffset.x) > 100) {
      setIsAnimating(true);
      // Déterminer la direction du swipe
      const direction = dragOffset.x > 0 ? 'right' : 'left';
      setSwipeDirection(direction);
      
      // Attendre la fin de l'animation avant de passer à la carte suivante
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        setDragOffset({ x: 0, y: 0 });
        setSwipeDirection(null);
        setIsAnimating(false);
      }, 300);
    } else {
      // Retour à la position initiale si swipe insuffisant
      setDragOffset({ x: 0, y: 0 });
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-[600px] mx-auto text-center">
        <p className="font-['Geist:Regular',sans-serif] text-[12px] md:text-[14px] text-[#737373]">
          Chargement des anecdotes...
        </p>
      </div>
    );
  }

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];
  
  // Animation styles pour la carte actuelle
  const getCardStyle = () => {
    // Adapter la distance de swipe en fonction de la taille de l'écran
    const swipeDistance = window.innerWidth < 768 ? '300px' : '400px';

    if (swipeDirection === 'left') {
      return {
        transform: 'rotate(-30deg) scale(0.8)',
        marginLeft: `-${swipeDistance}`,
        opacity: 0,
        transition: 'all 0.3s',
      };
    } else if (swipeDirection === 'right') {
      return {
        transform: 'rotate(30deg) scale(0.8)',
        marginLeft: swipeDistance,
        opacity: 0,
        transition: 'all 0.3s',
      };
    } else if (isDragging) {
      const rotation = dragOffset.x / 10;
      return {
        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotation}deg)`,
        transition: 'none',
      };
    }
    return {
      transform: 'translate(0, 0) rotate(0deg)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  // Afficher le statut Like/Dislike
  const showStatus = swipeDirection && !isDragging;

  return (
    <div className="w-full mx-auto">
      {/* Card - Positionnée de manière absolue et centrée à l'écran */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[10px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)] cursor-grab active:cursor-grabbing select-none flex items-center justify-center p-[24px] md:p-[40px]"
        style={{
          width: 'min(90vw, calc(60vh * 0.6667))',
          height: 'min(calc(90vw * 1.5), 60vh)',
          ...getCardStyle(),
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="text-center">
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] leading-[26px] md:text-[22px] md:leading-[36px] text-[#0a0a0a]">
            {currentCard.anecdote}
          </p>
        </div>
      </div>

      {/* Disclaimer - Au-dessus de la carte */}
      <div className="text-center mb-[30px] md:mb-[50px]">
        <p className="font-['Geist:Regular',sans-serif] text-[12px] md:text-[14px] text-[#737373] italic">
          malheureusement, tout est vrai...
        </p>
      </div>

      {/* Espaceur pour la hauteur de la carte */}
      <div style={{ height: 'min(calc(90vw * 1.5), 60vh)' }} />

      {/* Subtle hint - En dessous de la carte */}
      <div className="text-center mt-[20px] md:mt-[32px]">
        <p className="font-['Geist:Regular',sans-serif] text-[11px] md:text-[12px] text-[#a3a3a3]">
          Glissez la carte à gauche ou à droite
        </p>
      </div>
    </div>
  );
}
