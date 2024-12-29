import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollButtonProps {
  targetId: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="group inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-[#064e3b] hover:border-[#064e3b] transition-all duration-300"
    >
      Läs mer
      <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
    </button>
  );
};

export default ScrollButton;
