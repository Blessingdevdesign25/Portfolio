import React from "react";
import { motion } from "framer-motion";

// Importing project images (assuming paths relative to src/app/components)
import imgImage57 from "../../assets/ab057add8aace23bb019745422e3a902ac1ce76b.png";
import imgImage58 from "../../assets/4464493b48b8a705f73b8e4f508080854d53c4ca.png";
import imgImage59 from "../../assets/1a4eb941801e2a7aaafb1a64c87b0436440c047e.png";
import imgNeighborColors from "../../assets/7a90af4f466ff8f235e1673c9810742efed5ab92.png";
import imgEstateHub from "../../assets/82ec13b56c048a66e5f809c082a4436e30e0cb74.png";
import imgImage66 from "../../assets/93125110bedb218f552cfcf8e9230ca887aa94ea.png";
import imgClipnote from "../../assets/ea31e914f961036d6f6c80a013a6d013dcf1dca7.png";

const projects = [
  {
    title: "Clipnote",
    category: "AI / Development",
    image: imgClipnote,
    link: "https://clipnote-app.vercel.app/",
    description: "AI-powered video summarization platform built with React."
  },
  {
    title: "Luna Wellness",
    category: "UI/UX Case Study",
    image: imgImage66,
    link: "https://www.behance.net/gallery/244428089/Luna-A-Menstrual-Wellness-Mobile-Application",
    description: "Comprehensive menstrual wellness mobile application."
  },
  {
    title: "Trajectra",
    category: "Product Design",
    image: imgImage59,
    link: "https://www.behance.net/gallery/237802249/TRAJECTRA",
    description: "Drone Op Console for generating compliance logs and flight planning."
  },
  {
    title: "OBS Studio Redesign",
    category: "UI Design",
    image: imgImage57,
    link: "https://www.figma.com/proto/C2IPPwvnnYdObif4IAbpiY/May-Cohort?node-id=850-6763",
    description: "Modernizing the OBS Studio interface for better usability."
  },
  {
    title: "EstateHub",
    category: "Web App",
    image: imgEstateHub,
    link: "https://blessingdevdesign25.github.io/Real-Estate/",
    description: "A sleek real estate dashboard and landing page."
  },
  {
    title: "NeighborColors",
    category: "Tool / Development",
    image: imgNeighborColors,
    link: "https://blessingdevdesign25.github.io/Color-Palette/",
    description: "Interactive color palette generator tool."
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="px-6 md:px-20 py-32 bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Projects
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg mb-2">
            A selection of my recent works ranging from complex web applications to deep design case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col gap-4 overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 glass-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
