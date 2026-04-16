import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Product Strategy",
    description: "I define the bridge between user needs and business goals. Using design thinking to validate ideas and map out high-impact roadmaps.",
    tags: ["Market Analysis", "User Persona", "KPI Definition"]
  },
  {
    title: "UX/UI Design",
    description: "Designing intuitive, accessible, and high-fidelity interfaces. I build design systems that scale and interaction models that delight users.",
    tags: ["A11y", "Prototyping", "Design Systems"]
  },
  {
    title: "Engineering",
    description: "Translating pixels into production-ready code. Focused on React, modern JS, and building scalable UI architectures with clean state management.",
    tags: ["React/Next.js", "State Management", "Performance"]
  }
];

export default function Capabilities() {
  return (
    <section className="px-6 md:px-20 py-32 bg-background border-y border-white/5">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-6 sticky top-32">
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              I build <br /> what <br /> I design.
            </h2>
            <p className="max-w-md text-lg text-muted-foreground">
              A holistic approach to digital products—from the first sketch to the final line of code.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col gap-6 p-8 rounded-3xl glass-card group hover:bg-white/[0.08] transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{cap.title}</h3>
                  <span className="text-primary font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="bg-white/5 px-3 py-1 rounded-full text-xs font-mono text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
