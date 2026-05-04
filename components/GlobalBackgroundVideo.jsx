"use client";

import { usePathname } from "next/navigation";

export default function GlobalBackgroundVideo() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video className="h-full w-full object-cover opacity-35" autoPlay muted loop playsInline>
        <source src="/img/4.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-slate-900/25" />
    </div>
  );
}
