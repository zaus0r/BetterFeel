import React from 'react';
import OptimizedImage from '../common/OptimizedImage';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isScrolled }) => {
  return (
    <div className={`flex items-center relative z-10 ${className || ''}`}>
      {isScrolled ? (
        // Green logo when scrolled
        <OptimizedImage 
          src="/assets/branding/logos/BetterFeel_Navbar_Logo_optimized.png"
          alt="BetterFeel Logo"
          className="h-12 w-auto"
          width={118}
          height={48}
          objectFit="contain"
          priority
          transparent
        />
      ) : (
        // White logo when at the top
        <OptimizedImage 
          src="/assets/branding/logos/optimized/betterfeel_logo_white_optimized.png"
          alt="BetterFeel Logo"
          className="h-12 w-auto"
          width={118}
          height={48}
          objectFit="contain"
          priority
          transparent
        />
      )}
    </div>
  );
};

export default Logo;
