import React, { useEffect } from 'react';
import { Modal, Typography, Button, Box } from '@mui/material/';
import { useState } from 'react';
import AKnotes from '../../src/AKNotes.png';
import { FaEye, FaCode } from 'react-icons/fa';
import { projects } from '../data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '93%',
  maxWidth: '1000px',
  maxHeight: '500px',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  outline: 'none',
  bgcolor: '#343a41',
  border: '2px solid #000',
  boxShadow: 24,
};

const ProjectModal = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      id='modal-pop'
      open={showModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className='w-1/2'>
          <img
            alt='gallery'
            className='inset-0 w-full h-full object-cover  '
            src={projects[0].image}
          />
        </div>
        <div className='flex w-1/2 h-full overflow-x-auto'>
          <div className='px-4 pt-3 relative '>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className='tracking-widest text-small title-font font-medium text-blue-400 '>
                Project
              </h2>
              <Button onClick={handleClose}>Close</Button>
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
              {projects[0].title}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {projects[0].subtitle.map((subtitles) => {
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
                fontSize: '15px',
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
              {projects[0].description}
            </Typography>
            <div className='flex gap-3 h-7'>
              <Button
                sx={{
                  '&:hover': { opacity: 1 },
                  opacity: 0.9,
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
              <Button
                sx={{
                  '&:hover': { opacity: 1 },
                  opacity: 0.9,
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
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
