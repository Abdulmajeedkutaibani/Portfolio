import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Me from './components/Me';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialWidgets from './components/SocialWidgets';
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
  const hideMenu = () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const menuList = document.getElementById('menu-list');
    const menuBackground = document.getElementById('menu-background');

    menu.style.opacity = '0';
    menu.style.width = '0';
    menu.style.height = '0';
    menuBtn.style.width = '24px';
    menuBtn.style.height = '24px';
    menuCloseBtn.style.width = '0';
    menuCloseBtn.style.height = '0';
    menuList.style.opacity = '0';
    menuList.style.width = '0';
    menuList.style.height = '0';
    menuBackground.style.height = '0';
    menuBackground.style.width = '0';
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      id='App'
      className=' dark:text-white text-gray-900  body-font` m-0 px-0 w-screen dark:bg-lightBlack overflow-x-hidden relative'
    >
      <div
        onClick={() => hideMenu()}
        id='menu-background'
        className='w-0 h-0 absolute bg-lightBlack opacity-40 z-30 top-0'
      ></div>
      <motion.div
        whileTap={{ scale: 0.75 }}
        onClick={() => topFunction()}
        id='back-to-top-btn'
        className='flex lg:w-14 lg:h-14 w-10 h-10 bg-green-400 rounded-full fixed lg:bottom-10 bottom-5 opacity-0 right-0 z-50  justify-center items-center transition-opacity delay-150 ease-linear cursor-pointer overflow-hidden'
      >
        <BsArrowUpCircle className=' text-lightBlack lg:text-5xl text-4xl hover:text-yellow-400' />
      </motion.div>
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
