import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            Projects I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-xl font-sans'>
            // These are my favorite projects I've worked on so far. Have a look
            around and make sure to hit me up!
          </p>
        </div>
        <div className='flex flex-wrap -m-6'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 m-auto w-100 p-4'
            >
              <div className='flex relative project '>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center rounded-3xl'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded-3xl'>
                  <h2 className='tracking-widest text-xl title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-2xl font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed text-lg'>
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
