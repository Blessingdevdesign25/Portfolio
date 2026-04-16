import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import ProjectGrid from "./components/ProjectGrid";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";

export default function MainPage() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="experience">
          <WorkExperience />
        </div>
        <div id="capabilities">
          <Capabilities />
        </div>
        <div id="projects">
          <ProjectGrid />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
