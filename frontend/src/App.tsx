import Section from "./components/Section";
import Navbar from "./components/Navbar";
import SparklesBackground from "./components/SparklesBackground";

import Bio from "./sections/Bio";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative h-screen overflow-hidden text-slate-100">
      <SparklesBackground />
      <Navbar />

      <div className="mx-auto max-w-5xl px-6 pt-[72px]">
        <main className="hide-scrollbar h-[calc(100vh-72px)] snap-y snap-proximity scroll-smooth overflow-y-auto">
          <Section id="about">
            <Bio />
          </Section>
          <Section id="experience">
            <Experience />
          </Section>
          <Section id="skills">
            <Skills />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
        </main>
      </div>
    </div>
  );
}
