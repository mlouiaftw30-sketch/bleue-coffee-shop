import React from 'react';

interface BleueLogoProps {
  className?: string;
  size?: number | string;
}

export const BleueLogo: React.FC<BleueLogoProps> = ({ className = "w-10 h-10", size }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      width={size} 
      height={size} 
      className={`shrink-0 ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="bleue! logo"
    >
      {/* Vivid cobalt blue circle matching Sidi Bou Said blue & official logo */}
      <circle cx="100" cy="100" r="100" fill="#1D63ED" />
      
      {/* Italic bold serif 'bleue!' text */}
      <text 
        x="100" 
        y="118" 
        fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif" 
        fontStyle="italic" 
        fontWeight="900" 
        fontSize="62" 
        fill="#FFFFFF" 
        textAnchor="middle" 
        letterSpacing="-1.5px"
      >
        bleue!
      </text>
    </svg>
  );
};
