import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
  return (
    <nav className="flex column align-center">
      <img src="/logo.svg" className="width-10" />
      <div className="flex column text-center">
        <h1 className="logo">Ksenija</h1>
        <h4 className="margin-y-0">Full-stack Developer</h4>
      </div>
      <ul>
        <li>About</li>
        <li>My skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      <div>
        <a
          href="https://www.linkedin.com/in/kgerasimcuka/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Menu;
