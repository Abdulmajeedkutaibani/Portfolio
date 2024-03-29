import React from 'react';
import { Modal, Typography, Button, Box, Fade, Backdrop } from '@mui/material/';
import { FaEye, FaCode, FaTimes } from 'react-icons/fa';
import { projects } from '../data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: { xs: '95%', sm: '60%' },
  width: { md: '93%', xs: '90%' },
  maxWidth: { xs: '80%', md: '80%', lg: '1000px' },
  maxHeight: { xs: '80%', md: '500px' },
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  outline: 'none',
  bgcolor: '#343a41',
  border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
};

const ProjectModal = ({ showModal = false, setShowModal, projectID }) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={showModal}>
        <Box sx={style}>
          <div className='w-full lg:w-1/2 '>
            <img
              alt='gallery'
              className='inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg sm:rounded border-b-2 border-purple-500 sm:border-none max-h-72 sm:max-h-full'
              src={projects[projectID].image}
            />
          </div>
          <Button
            sx={{
              display: { xs: 'flex', sm: 'none' },
              position: 'absolute',
              right: '15px',
              top: '15px',
              transition: 'all 0.5s',
              fontWeight: 'bold',
              fontSize: '18px',
              fontFamily: 'Staatliches,sans-serif',
            }}
            variant='contained'
            color='error'
            onClick={handleClose}
          >
            <FaTimes />
          </Button>
          <div className='flex w-full lg:w-1/2 h-full overflow-x-auto'>
            <div className='px-4 pt-3 relative '>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className='tracking-widest text-small title-font font-medium text-blue-400 '>
                  Project
                </h2>
                <Button
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    position: 'absolute',
                    right: '15px',
                    transition: 'all 0.5s',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Staatliches,sans-serif',
                  }}
                  variant='contained'
                  color='error'
                  onClick={handleClose}
                >
                  <FaTimes />
                </Button>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '30px',
                  fontFamily: 'Staatliches,sans-serif',
                }}
              >
                {projects[projectID].title}
              </Typography>
              <Box sx={{ mb: 1 }}>
                {projects[projectID].subtitle.map((subtitles, i) => {
                  return (
                    <li
                      className='project__technology border border-lightGreen flex justify-center items-center lg:inline-block lg:mr-2 p-1 text-center'
                      key={i}
                    >
                      <p>{subtitles}</p>
                    </li>
                  );
                })}
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '16px',
                  color: 'white',
                  letterSpacing: '1px',
                  fontFamily: 'Staatliches,sans-serif',
                  mt: '20px',
                }}
              >
                Description
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '14px', lg: '16px' },
                  color: '#0fb',
                  letterSpacing: '1px',
                  overflowX: 'auto',
                  width: '100%',
                  height: { xs: '100px', lg: '400px' },
                  maxHeight: '200px',
                  fontFamily: 'Inconsolata,sans-serif',
                  whiteSpace: 'pre-line',
                  mb: 5,
                  border: '2px solid lightBlue',
                  padding: { lg: '10px', xs: '6px' },
                }}
              >
                {projects[projectID].description}
              </Typography>
              <div className='flex gap-3 h-7 items-center justify-center pb-6'>
                <a
                  href={projects[projectID].link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button
                    sx={{
                      '&:hover': { background: '#DA70D6' },
                      opacity: 0.9,
                      height: 30,
                      width: 100,
                      transition: 'all 0.5s',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      fontFamily: 'Staatliches,sans-serif',
                      gap: '8px',
                      background: '#d317fd',
                    }}
                    variant='contained'
                    color='inherit'
                  >
                    <FaEye className='w-8' />
                    DEMO
                  </Button>
                </a>
                {projects[projectID].title === 'Diamonds Group' ? null : (
                  <a href={projects[projectID].github}>
                    <Button
                      sx={{
                        '&:hover': { background: '#DAF7A6' },
                        opacity: 0.9,
                        height: 30,
                        width: 100,
                        transition: 'all 0.5s',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        fontFamily: 'Staatliches,sans-serif',
                        gap: '8px',
                        background: '#0fb',
                      }}
                      variant='contained'
                      color='inherit'
                    >
                      <FaCode />
                      CODE
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProjectModal;
