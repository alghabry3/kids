import React from 'react';

interface KristinaMascotProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export const KristinaMascot: React.FC<KristinaMascotProps> = ({
  className = '',
  size = 180,
  animate = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        animate ? 'hover:scale-105 transition-transform duration-300' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="mascotGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#9E1C58" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Outer Circular Soft Halo */}
        <circle cx="100" cy="100" r="95" fill="#FFF5F7" opacity="0.9" />
        <circle cx="100" cy="100" r="92" stroke="#FCE7F3" strokeWidth="2" strokeDasharray="6 4" />

        {/* The Characteristic Crest Feathers */}
        {/* Leftmost Feather (Cyan / Yellow / Magenta) */}
        <g>
          <path
            d="M98 90 C70 50 40 45 22 62 C45 78 72 88 98 90 Z"
            fill="#06B6D4"
          />
          <path
            d="M98 90 C75 56 52 52 35 66 C52 79 74 88 98 90 Z"
            fill="#F59E0B"
          />
          <path
            d="M98 90 C80 62 64 58 48 70 C60 80 78 88 98 90 Z"
            fill="#9E1C58"
          />
        </g>

        {/* Center-Left Feather (Upper Curved) */}
        <g>
          <path
            d="M98 90 C85 40 70 20 54 30 C66 54 82 78 98 90 Z"
            fill="#9E1C58"
          />
          <path
            d="M98 90 C88 44 76 26 62 35 C72 56 86 78 98 90 Z"
            fill="#F59E0B"
          />
          <path
            d="M98 90 C92 48 82 32 70 40 C78 58 88 78 98 90 Z"
            fill="#06B6D4"
          />
        </g>

        {/* Right-Center Feather */}
        <g>
          <path
            d="M98 90 C110 40 125 20 142 32 C130 54 114 78 98 90 Z"
            fill="#9E1C58"
          />
          <path
            d="M98 90 C108 44 120 26 134 37 C124 56 110 78 98 90 Z"
            fill="#F59E0B"
          />
          <path
            d="M98 90 C104 48 114 32 126 42 C118 58 108 78 98 90 Z"
            fill="#06B6D4"
          />
        </g>

        {/* Rightmost Feather */}
        <g>
          <path
            d="M98 90 C125 50 155 45 174 62 C150 78 124 88 98 90 Z"
            fill="#06B6D4"
          />
          <path
            d="M98 90 C120 56 144 52 160 66 C143 79 122 88 98 90 Z"
            fill="#F59E0B"
          />
          <path
            d="M98 90 C116 62 132 58 147 70 C135 80 118 88 98 90 Z"
            fill="#9E1C58"
          />
        </g>

        {/* Bird Head & Neck (Berry Magenta Loop) */}
        <path
          d="M50 135 C50 100 80 92 105 92 C132 92 145 110 145 138 C145 170 115 182 92 182 C65 182 50 162 50 135 Z"
          fill="#9E1C58"
          filter="url(#mascotGlow)"
        />

        {/* White Inner Face Cheek */}
        <path
          d="M74 125 C74 105 92 100 106 100 C122 100 130 112 130 132 C130 152 112 165 96 165 C80 165 74 148 74 125 Z"
          fill="#FFFFFF"
        />

        {/* Beak in Bright Sun Yellow */}
        <path
          d="M128 115 L160 136 L128 152 Z"
          fill="#F59E0B"
        />
        <path
          d="M128 136 L150 136"
          stroke="#D97706"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="134" cy="126" r="1.8" fill="#78350F" />

        {/* Friendly Cartoon Eye */}
        <ellipse cx="98" cy="128" rx="8" ry="11" fill="#3D0620" />
        <ellipse cx="100.5" cy="124.5" rx="3.5" ry="4.5" fill="#FFFFFF" />
        <circle cx="95.5" cy="132" r="1.5" fill="#FFFFFF" />

        {/* Cheek Blush */}
        <ellipse cx="86" cy="144" rx="6" ry="3.5" fill="#F472B6" opacity="0.6" />
      </svg>
    </div>
  );
};
