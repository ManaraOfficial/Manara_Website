const RAY_ANGLES = Array.from({ length: 12 }, (_, i) => i * 30);

export const SunCloudIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <g stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round">
      {RAY_ANGLES.map((angle) => (
        <line
          key={angle}
          x1="12"
          y1="1.6"
          x2="12"
          y2="3.8"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </g>
    <circle cx="12" cy="12" r="5" fill="#FBBF24" stroke="#F59E0B" strokeWidth="0.6" />
    <path
      d="M4.2 18.2c0-2 1.6-3.5 3.6-3.5.5-1.8 2.3-3 4.1-2.6 1.6.3 2.8 1.6 3 3.2 1.7.1 3.1 1.5 3.1 3.2 0 1.7-1.4 3.2-3.2 3.2H7.4c-1.8 0-3.2-1.5-3.2-3.5Z"
      fill="#fff"
      opacity="0.95"
    />
  </svg>
);

export const MoonStarIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      fill="#E5E7EB"
    />
    <path
      d="M18.2 3.6l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5.5-1.2Z"
      fill="#F3F4F6"
    />
    <path
      d="M20 8.6l.35.85.85.35-.85.35-.35.85-.35-.85-.85-.35.85-.35.35-.85Z"
      fill="#F3F4F6"
    />
    <path
      d="M15.5 16.2l.45 1.05 1.05.45-1.05.45-.45 1.05-.45-1.05-1.05-.45 1.05-.45.45-1.05Z"
      fill="#F3F4F6"
    />
  </svg>
);
