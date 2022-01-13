import { Box } from '@mui/system';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import CubeModel from './components/CubeModel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialWidgets from './components/SocialWidgets';

function App() {
  const [showModal, setShowModal] = useState();
  const [projectID, setProjecttID] = useState(0);
  const onButtonClick = (opendaModal, selectID) => {
    setShowModal(opendaModal);
    setProjecttID(selectID);
  };

  return (
    <Box
      id='App'
      className=' text-gray-400  body-font overflow-hidden bg-gray-800'
    >
      {/* <DroneComponent /> */}
      <ProjectModal
        showModal={showModal}
        setShowModal={setShowModal}
        projectID={projectID}
      />
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
