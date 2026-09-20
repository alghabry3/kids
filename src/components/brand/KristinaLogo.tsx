import React from 'react';

interface KristinaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const KristinaLogo: React.FC<KristinaLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-13',
    lg: 'h-18',
    xl: 'h-24',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Visual Mascot & Logotype */}
      <svg
        viewBox="0 0 380 110"
        className={`${sizeClasses[size]} w-auto drop-shadow-xs`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9E1C58" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Mascot Bird Accent */}
        <g transform="translate(10, 8) scale(0.85)">
          {/* Fan Feathers */}
          <path
            d="M50 45 C40 20 25 15 10 25 C25 35 38 42 50 45 Z"
            fill="#06B6D4"
          />
          <path
            d="M50 45 C45 15 35 5 25 10 C35 25 45 38 50 45 Z"
            fill="#F59E0B"
          />
          <path
            d="M50 45 C55 10 50 0 42 2 C45 18 48 35 50 45 Z"
            fill="#9E1C58"
          />
          <path
            d="M50 45 C65 15 75 8 85 18 C72 28 60 38 50 45 Z"
            fill="#F59E0B"
          />
          <path
            d="M50 45 C75 25 88 20 95 32 C82 42 68 45 50 45 Z"
            fill="#06B6D4"
          />

          {/* Bird Head */}
          <path
            d="M25 65 C25 45 45 42 55 42 C68 42 75 52 75 68 C75 85 58 92 45 92 C32 92 25 80 25 65 Z"
            fill="#9E1C58"
          />
          <path
            d="M38 58 C38 48 48 46 54 46 C62 46 66 52 66 64 C66 76 56 82 48 82 C40 82 38 72 38 58 Z"
            fill="#FFFFFF"
          />
          {/* Bird Beak */}
          <path
            d="M66 55 L82 66 L66 75 Z"
            fill="#F59E0B"
          />
          {/* Bird Eye */}
          <circle cx="50" cy="62" r="4.5" fill="#3D0620" />
          <circle cx="51.5" cy="60.5" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Text Arabic: كريستينا كيدز */}
        <text
          x="105"
          y="48"
          fontFamily="'Cairo', sans-serif"
          fontWeight="900"
          fontSize="36"
          fill="#9E1C58"
          letterSpacing="0.5"
        >
          كريستينا كيدز
        </text>

        {/* Swoosh accent under Arabic text */}
        <path
          d="M106 58 C170 58 260 63 325 54"
          stroke="url(#crestGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Text English: Kristina Kidz */}
        <text
          x="107"
          y="84"
          fontFamily="'Fredoka', 'Cairo', sans-serif"
          fontWeight="700"
          fontSize="24"
          fill="#9E1C58"
          letterSpacing="0.8"
        >
          Kristina Kidz
        </text>

        {/* Small Heart on Kidz */}
        <path
          d="M285 70 C285 67 282 65 280 67 C278 65 275 67 275 70 C275 74 280 77 280 77 C280 77 285 74 285 70 Z"
          fill="#9E1C58"
        />
      </svg>
      {showSubtitle && (
        <div className="hidden sm:flex flex-col border-r-2 border-slate-200 pr-3 mr-1 text-right">
          <span className="text-[11px] font-extrabold text-[#9E1C58] tracking-wide">
            أكاديمية مواهب الطفل
          </span>
          <span className="text-[10px] text-slate-500 font-medium">
            القطيف • سي فرونت
          </span>
        </div>
      )}
    </div>
  );
};
