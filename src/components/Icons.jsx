export const CoinIcon = ({ className }) => (
  <span
    className={`inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink-900 bg-gold-400 text-xs font-bold text-ink-900 ${className || ''}`}
    aria-hidden="true"
  >
    $
  </span>
);

export const FilterIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 .8 1.6L12 11v4a1 1 0 0 1-1.6.8l-2-1.5A1 1 0 0 1 8 13v-2L3.2 6.6A1 1 0 0 1 3 5z" />
  </svg>
);

export const TaskTypeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6 21h12v-2H6v2zm12-10.5c0-1.4-2.6-2.5-6-2.5s-6 1.1-6 2.5c0 1.7 1.6 3.2 4 3.9V17h4v-2.1c2.4-.7 4-2.2 4-3.9zm-6 1.5c-2.2 0-4-.9-4-1.5s1.8-1.5 4-1.5 4 .9 4 1.5-1.8 1.5-4 1.5z" />
  </svg>
);

export const OathIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
  </svg>
);

export const TaskListIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 6h10" />
    <path d="M9 12h10" />
    <path d="M9 18h10" />
    <path d="M5 6h.01" />
    <path d="M5 12h.01" />
    <path d="M5 18h.01" />
  </svg>
);
