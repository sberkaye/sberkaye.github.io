import React from 'react';

const Contact = () => (
  <div id="contact" className="contact">
    <h1 className="contact--header">Contact</h1>
    <h2>Currently looking for a position as a front-end developer.</h2>
    <p className="contact--text">
      Feel free to contact me via email at{' '}
      <a href="mailto:berkayergin99@gmail.com">berkayergin99@gmail.com</a>
      <br />
      or you can use the following links to see my GitHub & LinkedIn profiles:{' '}
      <br />
      <a href="https://www.linkedin.com/in/berkay-ergin-218436198/">
        <ion-icon className="icon" size="large" name="logo-linkedin"></ion-icon>
      </a>
      <a href="https://github.com/sberkaye">
        <ion-icon className="icon" size="large" name="logo-github"></ion-icon>
      </a>
    </p>
  </div>
);

export default Contact;
