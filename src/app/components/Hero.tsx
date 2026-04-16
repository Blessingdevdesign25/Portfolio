import React from "react";
import { motion } from "framer-motion";
import imgNewProfilePic1 from "../../assets/c27ddfd858848061f80f54175204ed2524610963.png";
import cvFile from "../../assets/Blessing_Amos-Aleonomoh_Resume.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Blessing Kadiri</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Product <br />
            Designer <span className="text-primary">&</span> <br />
            UX Engineer
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-muted-foreground mt-4">
            A multidisciplinary, product-minded builder focused on creating 
            high-performance, user-centered web applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href={cvFile} 
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold transition-all glow-primary flex items-center gap-2 group"
            >
              View CV
            </a>
            <a 
              href="#projects" 
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group"
        >
          <img 
            src={imgNewProfilePic1} 
            alt="Blessing Kadiri" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
      
      {/* Scroll Down Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
