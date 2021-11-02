import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialWidgets from './components/SocialWidgets';

function App() {
  const [showModal, setShowModal] = useState();
  const onButtonClick = (opendaModal) => {
    setShowModal(opendaModal);
    console.log('wazuuuub');
  };

  return (
    <main className='main-container text-gray-400 bg-gray-900 body-font'>
      <ProjectModal showModal={showModal} setShowModal={setShowModal} />
      <SocialWidgets />
      <Navbar />
      <About />
      <Projects onButtonClick={onButtonClick} />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
