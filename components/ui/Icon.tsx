import type { CSSProperties } from "react";

const PATHS: Record<string, string> = {
  sparkle: "M12 3l1.8 4.6L18.4 9.4 13.8 11.2 12 15.8 10.2 11.2 5.6 9.4 10.2 7.6z M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z",
  arrowRight: "M5 12h14 M13 6l6 6-6 6",
  arrowLeft: "M19 12H5 M11 18l-6-6 6-6",
  check: "M5 13l4 4L19 7",
  building: "M5 21V5a2 2 0 012-2h7a2 2 0 012 2v16 M9 7h2 M9 11h2 M9 15h2 M16 21h3a0 0 0 000 0V11a2 2 0 00-2-2h-1",
  home: "M4 11l8-7 8 7 M6 10v9a1 1 0 001 1h10a1 1 0 001-1v-9 M10 20v-5h4v5",
  townhouse: "M3 21V9l5-3 M8 21V6l6-3 7 4v14 M11 11h2 M11 15h2 M17 11h0 M17 15h0",
  briefcase: "M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2 M3 13h18",
  upload: "M12 16V4 M7 9l5-5 5 5 M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2",
  image: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1z M8.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3 M4 17l4.5-4 4 3.5L16 12l4 4",
  clock: "M12 7v5l3 2 M12 21a9 9 0 100-18 9 9 0 000 18z",
  users: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z M3 20v-1a5 5 0 015-5h2a5 5 0 015 5v1 M16 4.5a3.5 3.5 0 010 6.8 M21 20v-1a5 5 0 00-3.5-4.7",
  tag: "M4 4h7l9 9-7 7-9-9z M8.5 8.5h0",
  shield: "M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z M9 12l2 2 4-4",
  doc: "M7 3h7l5 5v13a0 0 0 010 0H7a1 1 0 01-1-1V4a1 1 0 011-1z M14 3v5h5 M9 13h6 M9 17h6",
  phone: "M5 4h3l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v3a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-2z",
  headset: "M4 13v-1a8 8 0 0116 0v1 M4 13h2a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1z M20 13h-2a1 1 0 00-1 1v4a1 1 0 001 1 M17 19a4 4 0 01-4 2",
  chat: "M5 4h14a1 1 0 011 1v10a1 1 0 01-1 1H9l-4 4V5a1 1 0 011-1z",
  send: "M5 12l15-7-7 15-2.5-5.5z",
  dashboard: "M4 4h7v7H4z M13 4h7v4h-7z M13 11h7v9h-7z M4 14h7v6H4z",
  list: "M8 6h13 M8 12h13 M8 18h13 M3.5 6h0 M3.5 12h0 M3.5 18h0",
  edit: "M4 20h4l10-10-4-4L4 16z M14 6l4 4",
  insights: "M4 19V5 M4 19h16 M8 16l3.5-4 3 2.5L20 8",
  trend: "M4 15l5-5 4 3 7-8 M14 5h6v6",
  bolt: "M13 3L5 14h6l-1 7 8-11h-6z",
  star: "M12 3l2.5 6.2 6.5.5-5 4.3 1.6 6.5L12 17l-5.6 3.5L8 14 3 9.7l6.5-.5z",
  close: "M6 6l12 12 M18 6L6 18",
  menu: "M4 7h16 M4 12h16 M4 17h16",
  plus: "M12 5v14 M5 12h14",
  money: "M12 3v18 M16 7H10a2.5 2.5 0 000 5h4a2.5 2.5 0 010 5H8",
  pin: "M12 21s-7-6.2-7-11A7 7 0 0112 3a7 7 0 017 7c0 4.8-7 11-7 11z M12 12a2 2 0 100-4 2 2 0 000 4z",
  ruler: "M3 7l4-4 14 14-4 4z M7 7l2 2 M11 11l2 2 M15 15l2 2",
  bed: "M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6 M3 14h18 M7 10V8a1 1 0 011-1h3a1 1 0 011 1v2",
  bath: "M4 12h16v3a3 3 0 01-3 3H7a3 3 0 01-3-3z M6 12V6a2 2 0 012-2 2 2 0 012 2 M6 19l-1 2 M18 19l1 2",
  filter: "M4 5h16 M7 12h10 M10 19h4",
  bell: "M6 10a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6 M10 21h4",
  search: "M11 11m-7 0a7 7 0 1014 0 7 7 0 10-14 0 M21 21l-4-4",
};

export interface IconProps {
  name: string;
  size?: number;
  stroke?: number;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ name, size = 20, stroke = 2, className = "", style }: IconProps) {
  const d = PATHS[name] || "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {d.split(" M").map((seg, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + seg} />
      ))}
    </svg>
  );
}

export default Icon;
