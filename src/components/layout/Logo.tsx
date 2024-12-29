import React from 'react';
import OptimizedImage from '../common/OptimizedImage';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center relative z-10 ${className || ''}`}>
      <OptimizedImage 
        src="/assets/branding/logos/BetterFeel_Navbar_Logo.png"
        alt="BetterFeel Logo"
        className="h-12"
        width={118}
        height={48}
        objectFit="contain"
        priority // Logo should load immediately as it's in the header
        transparent
      />
    </div>
  );
};

export default Logo;
