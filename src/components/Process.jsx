import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const steps = [
  {
    k: '01',
    t: 'Discover',
    d: 'Audit workflows, align on outcomes, and select the highest‑leverage opportunities.',
  },
  {
    k: '02',
    t: 'Design',
    d: 'Architect agents, tools, and prompts with safety layers and evaluation plans.',
  },
  {
    k: '03',
    t: 'Deploy',
    d: 'Ship pilots fast, iterate with telemetry, and scale to production confidently.',
  },
];

const Process = () => {
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-cyan-300" />
          <p className="tracking-widest text-xs text-white/60">OUR APPROACH</p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.06em]"
          style={{ fontFamily: 'Mona Sans, IBM Plex Sans, Inter, sans-serif' }}
        >
          From idea to impact — fast.
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
            >
              <div className="absolute right-4 top-4 text-6xl font-black tracking-widest text-white/5">{s.k}</div>
              <h3 className="text-xl font-semibold tracking-wide">{s.t}</h3>
              <p className="mt-3 text-white/80 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
