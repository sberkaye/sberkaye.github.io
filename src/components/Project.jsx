import React from 'react';

const projectMatch = {
  'Recipify': 'recipify',
  'Card Game': 'card-game',
  'Cesme Palmiye Ilaclama': 'cesme-palmiye',
  'Lord of the Rings Site': 'lotr-site',
};

const Project = ({ data }) => {
  const { title, description, links, tags } = data;
  const { ghLink, demoLink } = links;

  const renderTags = () =>
    tags.map((tag) => <div className="project--tag">{tag}</div>);

  return (
    <div className="project">
      <div className={`project--header project--header-${projectMatch[title]}`}>
        <h1 className="project--header--title">{title}</h1>
      </div>
      <div className="project--description">{description}</div>
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
      <div className="project--tags">{renderTags()}</div>
    </div>
  );
};

export default Project;
