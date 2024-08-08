import "./Intro.css";
import { useEffect, useState } from "react";
import React from "react";
import "./TypingAnimation.jsx";
import TypingAnimation from "./TypingAnimation.jsx";
import { Link } from "react-scroll";
import hireme from "../../assets/hireme.png";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="IntroContent">
        <span className="hello"> Hello!</span>
        <br />
        <span className="introText">
          I'm <span className="introName">Akshita Khandelwal</span>
          <br /> <TypingAnimation />
        </span>
        <a href="https://www.linkedin.com/in/akshita-khandelwal-ab8a4624b/" target="_blank" rel="noopener noreferrer">
  <button className="btn">
    <img src={hireme} alt="Hire me" className="btnImg" /> Hire me
  </button>
</a>

      </div>
    </section>
  );
};
