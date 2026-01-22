
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 36 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(254,44,85,0.4)]"
      >
        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
        
        {/* Defining the Arrow Path shapes to split colors */}
        <defs>
          <clipPath id="leftHalf">
            <rect x="0" y="0" width="50" height="100" />
          </clipPath>
          <clipPath id="rightHalf">
            <rect x="50" y="0" width="50" height="100" />
          </clipPath>
          
          {/* The full arrow shape - slightly inset to account for thick rounded stroke */}
          <path
            id="arrowShape"
            d="M38 18H62V50H80L50 85L20 50H38V18Z"
          />
        </defs>

        {/* Left Side - Pink with very heavy rounded corners */}
        <use 
          href="#arrowShape" 
          fill="#fe2c55" 
          stroke="#fe2c55"
          strokeWidth="14"
          strokeLinejoin="round"
          strokeLinecap="round"
          clipPath="url(#leftHalf)" 
        />
        
        {/* Right Side - Cyan with very heavy rounded corners */}
        <use 
          href="#arrowShape" 
          fill="#25f4ee" 
          stroke="#25f4ee"
          strokeWidth="14"
          strokeLinejoin="round"
          strokeLinecap="round"
          clipPath="url(#rightHalf)" 
        />

        {/* Play Triangle Cutout with very heavy rounded corners */}
        <path
          d="M46 42L58 50L46 58V42Z"
          fill="#000000"
          fillOpacity="0.8"
          stroke="#000000"
          strokeOpacity="0.8"
          strokeWidth="10"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
