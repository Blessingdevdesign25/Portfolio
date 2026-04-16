import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "blessingkadiri21@gmail.com";

  return (
    <section id="contact" className="relative px-4 sm:px-6 md:px-20 pt-20 sm:pt-32 pb-10 bg-background overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/20 blur-[150px] -z-10" />

      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-20 sm:mb-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter leading-tight">
            Let’s build <br /> something great.
          </h2>
          
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground px-4">
            I’m always open to discussing product design and UX engineering work.
          </p>

          <a 
            href={`mailto:${email}`}
            className="group relative mt-8 sm:mt-12"
          >
            <span className="text-2xl sm:text-3xl md:text-5xl font-bold underline decoration-primary/50 underline-offset-8 group-hover:decoration-primary transition-all break-all sm:break-normal">
              {email}
            </span>
            <div className="absolute -right-12 top-0 md:top-2 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        </motion.div>

        {/* Massive Name Footer Logo */}
        <div className="w-full select-none pointer-events-none mt-10 sm:mt-20 flex justify-center">
          <h2 className="text-[18vw] sm:text-[15vw] md:text-[18vw] font-black uppercase leading-none tracking-tighter opacity-[0.03] whitespace-nowrap text-center">
            BLESSING
          </h2>
        </div>

        {/* Final Footer Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 py-10 border-t border-white/5 text-xs sm:text-sm font-medium text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a href="https://github.com/Blessingdevdesign25/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/blessing-o-kadiri" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/blessingokadiri" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Behance</a>
          </div>
          <p className="text-center sm:text-left">© 2026 Built by Blessing Kadiri</p>
        </div>
      </div>
    </section>
  );
}
