import React from 'react';

const Project = ({ data }) => {
  const { title, description, links } = data;
  const { ghLink, demoLink } = links;

  return (
    <div className="project">
      <div className="project--header">
        <h1 className="project--header--title">{title}</h1>
        <div className="project--header--buttons">
          <button
            className="project--header--buttons--button"
            onClick={() => {
              window.open(demoLink, '_blank');
            }}
          >
            <ion-icon size="large" name="eye"></ion-icon>
          </button>
          <button
            className="project--header--buttons--button"
            onClick={() => {
              window.open(ghLink, '_blank');
            }}
          >
            <ion-icon size="large" name="logo-github"></ion-icon>
          </button>
        </div>
      </div>

      <div className="project--description">{description}</div>
    </div>
  );
};

export default Project;
