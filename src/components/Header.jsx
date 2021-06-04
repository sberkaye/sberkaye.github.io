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
    <div className="header">
      <h1 className="header--name">Berkay Ergin</h1>
      <h1 className="header--title">Software Developer</h1>
      <p className="header--description">
        I'm a software developer who specializes in web development.
        <br /> I'm passionate about learning new tools to add my programming
        skills and improve myself by each day.
      </p>
    </div>
  </>
);

export default Header;
