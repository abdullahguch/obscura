export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 5.5 19.4 12.2 26.5 13.1 21.3 18.2 22.7 25.3 16 21.7 9.3 25.3 10.7 18.2 5.5 13.1 12.6 12.2Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" />
    </svg>
  );
}
