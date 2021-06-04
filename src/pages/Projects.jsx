import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Recipify',
    description:
      'A food recipe site to search hundreds of recipes. Primarily used React, redux and Material UI and various other libraries',
    links: {
      ghLink: '',
      demoLink: '',
    },
  },
];

const renderProjects = () =>
  projects.map((project) => (
    <div className="col-1-of-4">
      <Project data={project} />
    </div>
  ));

const Projects = () => {
  return (
    <div className="projects page">
      <div className="row">{renderProjects()}</div>
    </div>
  );
};

export default Projects;
