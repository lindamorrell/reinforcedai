import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/* ───────── Brand mark ───────── */
export const LogoMark: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4 4 H20 V20 H4 Z" />
    <path d="M8 8 H16" />
    <path d="M8 8 V18" />
    <path d="M16 8 V13" />
    <path d="M12 13 V18" />
  </svg>
);

/* ───────── Inline icons (replacing the 50+ CISO white icons) ───────── */
export const ShieldIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M12 3 L20 6 V12 C20 16 16.5 19.5 12 21 C7.5 19.5 4 16 4 12 V6 Z" />
    <path d="M9 12 L11 14 L15 9" />
  </svg>
);
export const BrainIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M9 5 C7 5 5 6.5 5 9 C5 10 5.5 11 6 11.5 C5 12 4.5 13 4.5 14 C4.5 16 6 17 8 17 V19 H10 V11 C8 11 7 10 7 9" />
    <path d="M15 5 C17 5 19 6.5 19 9 C19 10 18.5 11 18 11.5 C19 12 19.5 13 19.5 14 C19.5 16 18 17 16 17 V19 H14 V11 C16 11 17 10 17 9" />
  </svg>
);
export const ChatIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4 5 H20 V17 H13 L8 21 V17 H4 Z" />
  </svg>
);
export const ScaleIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M12 4 V20" />
    <path d="M6 8 H18" />
    <path d="M6 8 L4 13 H8 Z" />
    <path d="M18 8 L16 13 H20 Z" />
    <path d="M8 20 H16" />
  </svg>
);
export const FlaskIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M9 3 V8 L4 18 C4 19.5 5 21 7 21 H17 C19 21 20 19.5 20 18 L15 8 V3" />
    <path d="M8 3 H16" />
    <path d="M7 14 H17" />
  </svg>
);
export const EyeIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M2 12 C5 6 8 4 12 4 C16 4 19 6 22 12 C19 18 16 20 12 20 C8 20 5 18 2 12 Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const LockIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <rect x="5" y="11" width="14" height="10" rx="1" />
    <path d="M8 11 V7 C8 4.8 9.8 3 12 3 C14.2 3 16 4.8 16 7 V11" />
  </svg>
);
export const ArrowRightIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M5 12 H19" />
    <path d="M13 6 L19 12 L13 18" />
  </svg>
);
export const CheckIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M5 12 L10 17 L19 7" />
  </svg>
);
export const WarningIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M12 4 L22 20 H2 Z" />
    <path d="M12 10 V14" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
);
export const BarsIcon: React.FC<IconProps> = (p) => (
  <svg {...base(p)}>
    <path d="M4 7 H20" />
    <path d="M4 12 H20" />
    <path d="M4 17 H20" />
  </svg>
);
