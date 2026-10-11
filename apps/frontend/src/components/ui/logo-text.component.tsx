import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="190"
      height="40"
      viewBox="0 0 190 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="9" fill="#4F46E5" />
      <circle cx="12" cy="28" r="3.4" fill="#FFFFFF" />
      <path
        d="M12 19.5a8.5 8.5 0 0 1 8.5 8.5"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 13.5a14.5 14.5 0 0 1 14.5 14.5"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 7.5a20.5 20.5 0 0 1 20.5 20.5"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="27"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.4"
        fill="currentColor"
        fontFamily="inherit"
      >
        Signalcast
      </text>
    </svg>
  );
};
