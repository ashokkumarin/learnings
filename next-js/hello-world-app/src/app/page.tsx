import './globals.css';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Skills from './components/Skills';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}