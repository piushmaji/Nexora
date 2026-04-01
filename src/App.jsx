import Cursor from './components/ui/Cursor';
import Hero from './components/sections/Hero';
import Statement from './components/sections/Statement';
import Arsenal from './components/ui/Arsenal';
import Skills from './components/sections/Skills';
import DiagonalBand from './components/ui/DiagonalBand';
import Projects from './components/sections/Projects';
import ContactCTA from './components/sections/ContactCTA';
import Contact from './components/sections/Contact';

function App() {
  return (
    <main className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Global custom cursor */}
      <Cursor />

      {/* Page flow */}
      <Hero />
      <Statement />
      <Arsenal />
      <Skills />
      <DiagonalBand />
      <Projects />
      <ContactCTA />
      <Contact />
    </main>
  );
}

export default App;