import { Box } from '@mui/system';
import { useState } from 'react';
import About from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialWidgets from './components/SocialWidgets';
import { DroneComponent } from './components/DroneComponent';

function App() {
  const [showModal, setShowModal] = useState();
  const [projectID, setProjecttID] = useState(0);
  const onButtonClick = (opendaModal, selectID) => {
    setShowModal(opendaModal);
    setProjecttID(selectID);
    console.log('wazuuuub');
  };

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
      }}
      className='main-container text-gray-400  body-font'
    >
      <ProjectModal
        showModal={showModal}
        setShowModal={setShowModal}
        projectID={projectID}
      />
      <DroneComponent />
      <SocialWidgets />
      <Navbar />
      <About />
      <Projects onButtonClick={onButtonClick} />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
