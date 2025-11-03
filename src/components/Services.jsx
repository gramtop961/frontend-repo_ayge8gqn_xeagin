import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Shield, Rocket } from 'lucide-react';

const items = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    desc: 'Goal‑oriented agents that plan, reason, and execute with human‑in‑the‑loop controls.',
  },
  {
    icon: Workflow,
    title: 'Automation Pipelines',
    desc: 'From data ingestion to reporting — automated, observable, and scalable.',
  },
  {
    icon: Shield,
    title: 'Safety & Guardrails',
    desc: 'Policy engines, prompt hardening, evals, and monitoring for robust systems.',
  },
  {
    icon: Rocket,
    title: 'Launch & Integration',
    desc: 'Ship to web, Slack, or your stack with secure APIs and analytics.',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' } }),
};

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.06em]"
          style={{ fontFamily: 'Mona Sans, IBM Plex Sans, Inter, sans-serif' }}
        >
          Capabilities crafted for velocity
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
              <item.icon className="h-8 w-8 text-fuchsia-300" />
              <h3 className="mt-4 text-lg font-semibold tracking-wide">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.desc}</p>
              <div className="mt-6 inline-flex items-center text-sm text-fuchsia-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
