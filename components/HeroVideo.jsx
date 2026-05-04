"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroVideo({ heading, subheading, ctas }) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/1.jpeg"
      >
        <source src="/img/1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 via-blue-400/30 to-cyan-300/30" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">{heading}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-100">{subheading}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="rounded-md bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:brightness-110"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
