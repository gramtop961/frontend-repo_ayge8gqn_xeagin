import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-cyan-900/10" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.08em]"
          style={{ fontFamily: 'Mona Sans, IBM Plex Sans, Inter, sans-serif' }}
        >
          Let’s build your next unfair advantage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-xl text-white/80"
        >
          Share a few details about your workflow, and we’ll map a quick win you can ship this month.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
          />
          <input
            type="text"
            placeholder="Company"
            className="sm:col-span-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
          />
          <textarea
            placeholder="What are you trying to automate?"
            rows={4}
            className="sm:col-span-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
          />
          <div className="sm:col-span-2 flex items-center justify-center gap-3">
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-all hover:gap-3 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-400 hover:text-white"
            >
              Request proposal
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <span className="text-xs text-white/60">2–3 business days response</span>
          </div>
        </motion.form>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} RetroFutura Agency — AI Automation & Agents
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
