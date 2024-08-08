import React from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo2} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Skills
          </Link>
          <Link
            to="Projects"  
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>
          <Link
            to="contact"  
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
