import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette/gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
            AI AUTOMATION • AGENTS • WORKFLOWS
          </span>

          <h1 className="mt-4 font-black leading-tight text-white" style={{ fontFamily: 'Mona Sans, IBM Plex Sans, Inter, sans-serif' }}>
            <span className="block text-4xl sm:text-6xl md:text-7xl tracking-[0.05em]">
              Retro‑Futuristic
            </span>
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl tracking-[0.08em]">
              AI Automation & Agent Studio
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            We design, build, and deploy end‑to‑end autonomous systems that supercharge your business. From
            intelligent data pipelines to human‑in‑the‑loop agents — shipped with speed and style.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-black transition-all hover:gap-3 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 hover:text-white"
            >
              Start a project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              Explore capabilities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
