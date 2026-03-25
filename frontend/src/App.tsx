import Sidebar from "./components/Sidebar";
import Section from "./components/Section";

import Bio from "./sections/Bio";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-black">
      <div className="mx-auto flex max-w-5xl gap-12 px-6 py-10">
        <Sidebar />

        <main className="flex-1">
          <Section>
            <Bio />
          </Section>
          <Section>
            <Experience />
          </Section>
          <Section>
            <Skills />
          </Section>
          <Section>
            <Projects />
          </Section>
        </main>
      </div>
    </div>
  );
}
