import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Menu = () => {
  return (
    <nav className="flex column align-center">
      <div className="margin-bottom-3">
        <img src="/logo.svg" className="width-10" />
        <div className="flex column text-center">
          <h1 className="logo">Ksenija</h1>
          <h4 className="margin-y-0">Full-stack Developer</h4>
        </div>
      </div>
      <ul className="margin-bottom-3">
        <li><a className="arrow menu-item" href="#about">About</a></li>
        <li><a className="arrow menu-item" href="#skills">My skills</a></li>
        <li><a className="arrow menu-item" href="#work">Work</a></li>
        <li><a className="arrow menu-item" href="#contact">Contact</a></li>
      </ul>
      <div className="flex justify-evenly width-full">
        <a href="https://www.linkedin.com/in/kgerasimcuka/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="icon font-2" />
        </a>
        <a href="https://github.com/Kse-Ger" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon font-2" />
        </a>
      </div>
    </nav>
  );
};

export default Menu;
