import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactTooltip from 'react-tooltip';

const projectMatch = {
  'Recipify': 'recipify',
  'Card Game': 'card-game',
  'Cesme Palmiye Ilaclama': 'cesme-palmiye',
  'Lord of the Rings Site': 'lotr-site',
};

const animationDelays = {
  'Recipify': 100,
  'Card Game': 300,
  'Cesme Palmiye Ilaclama': 500,
  'Lord of the Rings Site': 700,
};

const Project = ({ data }) => {
  const { title, description, links, tags } = data;
  const { ghLink, demoLink } = links;

  const renderTags = () =>
    tags.map((tag) => <div className="project--tag">{tag}</div>);

  return (
    <>
      <ScrollAnimation
        offset={250}
        delay={animationDelays[title]}
        animateIn="moveInUp"
      >
        <div className="project">
          <div
            className={`project--header project--header-${projectMatch[title]}`}
          >
            <h1 className="project--header--title">{title}</h1>
          </div>
          <p className="project--description">{description}</p>
          <div className="project--header--buttons">
            <button
              className="project--header--buttons--button"
              data-tip="View live demo"
              onClick={() => {
                window.open(demoLink, '_blank');
              }}
            >
              <ion-icon size="large" name="eye"></ion-icon>
            </button>
            <button
              className="project--header--buttons--button"
              data-tip="View source code"
              onClick={() => {
                window.open(ghLink, '_blank');
              }}
            >
              <ion-icon size="large" name="logo-github"></ion-icon>
            </button>
          </div>
          <div className="project--tags">{renderTags()}</div>
        </div>
      </ScrollAnimation>
      <ReactTooltip effect="solid" />
    </>
  );
};

export default Project;
