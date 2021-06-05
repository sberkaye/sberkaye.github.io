import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Recipify',
    description:
      'A food recipe site to search hundreds of recipes. Primarily used React, redux and Material UI and various other libraries.',
    links: {
      ghLink: 'https://github.com/sberkaye/recipify',
      demoLink: 'https://reactrecipify.netlify.app/',
    },
    tags: [
      'React',
      'redux',
      'Material UI',
      'React-Router',
      'Formik',
      'testing',
    ],
  },
  {
    title: 'Card Game',
    description:
      'A card game where you need to find the unique card among the others after the cards are shuffled. Made by using React, redux, react-spring and Sass.',
    links: {
      ghLink: '',
      demoLink: '',
    },
    tags: ['React', 'redux', 'react-spring', 'Sass'],
  },
  {
    title: 'Cesme Palmiye Ilaclama',
    description:
      'A landing page for a pest control company. Made by using HTML, Sass and vanilla JS.',
    links: {
      ghLink: '',
      demoLink: '',
    },
    tags: ['HTML', 'CSS', 'Sass', 'JS'],
  },
  {
    title: 'Lord of the Rings Site',
    description:
      'A website where you can find all the details about the original LotR trilogy. Made by using HTML, CSS and vanilla JS.',
    links: {
      ghLink: '',
      demoLink: '',
    },
    tags: ['HTML', 'CSS', 'JS'],
  },
];

const renderProjects = () =>
  projects.map((project) => (
    <div key={project.title} className="col-1-of-4">
      <Project data={project} />
    </div>
  ));

const Projects = () => {
  return (
    <div id="projects" className="projects page">
      <h1 className="projects--header">Projects</h1>
      <div className="row">{renderProjects()}</div>
    </div>
  );
};

export default Projects;
