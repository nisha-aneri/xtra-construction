export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeft({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDown({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden="true">
      <path d="M19 9.6a1.6 1.6 0 010 2.8L2.6 21.6A1.6 1.6 0 010 20.2V1.8A1.6 1.6 0 012.6.4L19 9.6z" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12.5l5.2 5.2L20 6.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  );
}

export function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function PinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3C16.5 2.2 15.4 2 14.2 2c-2.8 0-4.6 1.7-4.6 4.8v1.7H7V12h2.6v10h4.1V12h2.8l.4-3.5H14z" />
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.9 2H21l-6.8 7.8L22 22h-6.3l-4.9-6.4L5.2 22H2l7.3-8.4L1.7 2h6.4l4.4 5.9L17.9 2zm-1.1 18h1.7L6.9 3.8H5L16.8 20z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.8c0-1.38-.03-3.16-1.95-3.16-1.95 0-2.25 1.5-2.25 3.06V21H9z" />
    </svg>
  );
}

export function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.5 7.1a2.8 2.8 0 00-2-2C18.8 4.7 12 4.7 12 4.7s-6.8 0-8.5.4a2.8 2.8 0 00-2 2A29 29 0 001 12a29 29 0 00.5 4.9 2.8 2.8 0 002 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 002-2A29 29 0 0023 12a29 29 0 00-.5-4.9zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
    </svg>
  );
}

export function HardHatIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M10 46h44" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 45V33c0-10 8-18 18-18s18 8 18 18v12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M28 15v14M36 15v14M14 45h36v4H14z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M31 17c-2.8.8-4.5 3-5 6h12c-.5-3-2.2-5.2-5-6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function BuildingIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 42V14l12-6v34M18 42V8l20 8v26" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 42h44M11 20h2M11 26h2M11 32h2M11 38h2M26 22h4v5h-4zM26 32h4v10h-4zM34 22h2M34 29h2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function RoadIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M20 4L8 44h8L26 4h-6zM30 4l10 40h6L36 4h-6z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 15h-3M18 27h-3M16 39h-3M30 15h3M32 27h3M34 39h3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function WrenchIcon({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M42 12.4a11 11 0 01-14.6 10L12 37.8a4.9 4.9 0 11-7-7l15.4-15.4A11 11 0 0135.6 6L29 12.6l1.2 5.2 5.2 1.2L42 12.4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
