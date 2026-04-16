import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Product Designer & Frontend Engineer",
    company: "Clipnote",
    period: "2025 — Present",
    description: "Built an AI-powered video summarization platform using React architecture. Handled complex API integrations, state management, and user-centric design flows.",
  },
  {
    role: "UX Designer",
    company: "Trajectra",
    period: "2025",
    description: "Designed a Drone Op Console for compliance logging, geofencing, and flight planning. Focused on high-stakes interaction design and data visualization.",
  },
  {
    role: "UX Researcher & Designer",
    company: "Luna Wellness",
    period: "2025",
    description: "Conducted deep user research and designed a menstrual wellness application, focusing on accessibility and sensitive data handling.",
  }
];

export default function WorkExperience() {
  return (
    <section className="px-4 sm:px-6 md:px-20 py-20 sm:py-32 bg-background border-t border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-4 mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Experience
          </h2>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group py-8 sm:py-12 border-b border-white/5 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 sm:gap-8 items-start hover:bg-white/[0.02] transition-colors rounded-lg px-2 sm:px-4 -mx-2 sm:-mx-4 cursor-default"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-muted-foreground hidden md:block">•</span>
                  <p className="text-lg font-medium text-white/80">{exp.role}</p>
                </div>
                <p className="max-w-2xl text-muted-foreground">
                  {exp.description}
                </p>
              </div>
              
              <div className="flex flex-col md:items-end gap-2">
                <span className="text-white font-mono text-sm tracking-widest uppercase">
                  {exp.period}
                </span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest">
                  Lagos, Nigeria
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
