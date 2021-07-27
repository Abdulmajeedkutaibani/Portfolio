import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialWidgets from './components/SocialWidgets';
function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <SocialWidgets />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
