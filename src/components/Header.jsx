import React from 'react';

const Header = () => (
  <>
    <div className="buttons">
      <a href="https://www.linkedin.com/in/berkay-ergin-218436198/">
        <ion-icon className="icon" size="large" name="logo-linkedin"></ion-icon>
      </a>
      <a href="https://github.com/sberkaye">
        <ion-icon className="icon" size="large" name="logo-github"></ion-icon>
      </a>
    </div>
    <div className="header" style={{ backfaceVisibility: 'hidden' }}>
      <h1 className="header--name animate__animated animate__bounceInLeft animate__slow">
        Berkay Ergin
      </h1>
      <h2 className="header--title">Software Developer</h2>
      <p className="header--description">
        Passionate developer.
        <br /> Focused on learning new tools and improving by each passing day.
      </p>
    </div>
  </>
);

export default Header;
