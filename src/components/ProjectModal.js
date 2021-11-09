import React from 'react';
import { Modal, Typography, Button, Box } from '@mui/material/';
import { FaEye, FaCode, FaTimes } from 'react-icons/fa';
import { projects } from '../data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: { xs: '95%', sm: '60%' },
  width: { md: '93%', xs: '90%' },
  maxWidth: { md: '1000px' },
  maxHeight: { md: '500px' },
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  outline: 'none',
  bgcolor: '#343a41',
  border: '2px solid #000',
  boxShadow: 24,
};

const ProjectModal = ({ showModal, setShowModal, projectID }) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className='w-full lg:w-1/2'>
          <img
            alt='gallery'
            className='inset-0 w-full h-full object-cover  '
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
              {projects[projectID].subtitle.map((subtitles) => {
                return (
                  <li className='project__technology'>
                    <p>{subtitles}</p>
                  </li>
                );
              })}
            </Box>
            <Typography
              variant='h6'
              sx={{
                fontSize: '16px',
                color: '#94a4b4',
                letterSpacing: '1px',
                fontFamily: 'Staatliches,sans-serif',
              }}
            >
              ABOUT
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#94a4b4',
                letterSpacing: '1px',
                overflowX: 'auto',
                width: '90%',
                height: '35%',
                maxHeight: '200px',
                fontFamily: 'Inconsolata,sans-serif',
                mt: '1rem',
                whiteSpace: 'pre-line',
                mb: 5,
              }}
            >
              {projects[projectID].description}
            </Typography>
            <div className='flex gap-3 h-7'>
              <a href={projects[projectID].link} target='_blank'>
                <Button
                  sx={{
                    '&:hover': { opacity: 1 },
                    opacity: 0.9,
                    height: 30,
                    width: 100,
                    transition: 'all 0.5s',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Staatliches,sans-serif',
                    gap: '8px',
                  }}
                  variant='contained'
                  color='inherit'
                >
                  <FaEye className='w-8' />
                  DEMO
                </Button>
              </a>
              <a href={projects[projectID].github}>
                <Button
                  sx={{
                    '&:hover': { opacity: 1 },
                    opacity: 0.9,
                    height: 30,
                    width: 100,
                    transition: 'all 0.5s',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontFamily: 'Staatliches,sans-serif',
                    gap: '8px',
                  }}
                  variant='contained'
                  color='inherit'
                >
                  <FaCode />
                  CODE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
