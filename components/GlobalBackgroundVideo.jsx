"use client";

import { usePathname } from "next/navigation";

export default function GlobalBackgroundVideo() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="niva-zoom-bg absolute inset-0"
        style={{
          backgroundImage: "url('/img/15.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 bg-white/30" />
      <div className="absolute inset-0 bg-slate-900/35" />
    </div>
  );
}
