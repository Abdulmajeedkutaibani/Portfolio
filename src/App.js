import { Box } from '@mui/system';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import CubeModel from './components/CubeModel';
import Footer from './components/Footer';
import Me from './components/Me';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialWidgets from './components/SocialWidgets';
import { SquareModel } from './components/SquareModel';
import { BsArrowUpCircle } from 'react-icons/bs';
import { motion } from 'framer-motion/dist/framer-motion';

function App() {
  const [showModal, setShowModal] = useState();
  const [projectID, setProjecttID] = useState(0);
  const onButtonClick = (opendaModal, selectID) => {
    setShowModal(opendaModal);
    setProjecttID(selectID);
  };
  const topFunction = () => {
    console.log('button pressed');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    const ScrollUpBtn = document.getElementById('back-to-top-btn');
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      ScrollUpBtn.style.opacity = '1';
    } else {
      ScrollUpBtn.style.opacity = '0';
    }
  };
  window.onscroll = function () {
    scrollFunction();
  };
  return (
    <section
      id='App'
      className=' dark:text-white text-gray-900  body-font` m-0 px-0 w-screen dark:bg-lightBlack overflow-hidden relative'
    >
      <div
        onClick={() => {
          document.getElementById('menu-background').style.width = '0';
          document.getElementById('menu-background').style.height = '0';
        }}
        id='menu-background'
        className='w-0 h-0 absolute bg-lightBlack opacity-40 z-30 top-0'
      ></div>
      <motion.div
        whileTap={{ scale: 0.75 }}
        onClick={() => topFunction()}
        id='back-to-top-btn'
        className='lg:flex w-14 h-14 bg-green-400 rounded-full fixed bottom-10 opacity-0 right-6 z-50 hidden justify-center items-center transition-opacity delay-150 ease-linear cursor-pointer overflow-hidden'
      >
        <BsArrowUpCircle className=' text-lightBlack text-5xl hover:text-yellow-400' />
      </motion.div>
      {/* <DroneComponent /> */}
      <ProjectModal
        showModal={showModal}
        setShowModal={setShowModal}
        projectID={projectID}
      />
      <SocialWidgets />
      <Navbar onButtonClick={onButtonClick} />
      <About />
      <Projects onButtonClick={onButtonClick} />
      <Skills />
      <Me />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
