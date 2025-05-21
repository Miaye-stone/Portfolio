import './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
