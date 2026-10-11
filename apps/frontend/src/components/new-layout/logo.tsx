'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <rect width="64" height="64" rx="14" fill="#4F46E5" />
      <circle cx="19" cy="45" r="5.5" fill="#FFFFFF" />
      <path
        d="M19 31a14 14 0 0 1 14 14"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M19 22a23 23 0 0 1 23 23"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M19 13a32 32 0 0 1 32 32"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};
