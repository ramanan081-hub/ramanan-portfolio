import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Programmes from './components/Programmes';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Programmes />
        <Education />
        <Skills />
        <Certifications />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
