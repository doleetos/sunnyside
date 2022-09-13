import React, { useState } from "react";
import { IconContext } from "react-icons";
import "./main.css";
import Logo from "../../images/logo.svg";
import ArrowDown from "../../images/icon-arrow-down.svg";
import { AiOutlineMenu } from "react-icons/ai";

function Main() {
  const [nav, setNav] = useState(false);

  return (
    <section id="#">
      <div className="main-wrapper">
        <div className="navbar">
          <img className="logo" src={Logo} alt="Sunnyside Logo" />

          <div className="mobile-btn">
            <button
              className="mobile-nav-btn"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <IconContext.Provider
                value={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                <div>
                  <AiOutlineMenu />
                </div>
              </IconContext.Provider>
            </button>
          </div>

          <div className="mobile-nav-icon">
            {nav && (
              <>
                <div className="mobile-nav-bubble bubble-point">
                  <ul className="mobile-nav-ul">
                    <li className="mobile-nav-li">
                      <a href="#about">About</a>
                    </li>
                    <li className="mobile-nav-li">
                      <a href="#services">Services</a>
                    </li>
                    <li className="mobile-nav-li">
                      <a href="#projects">Projects</a>
                    </li>
                    <li className="mobile-nav-li">
                      <button className="mobile-contact-btn">CONTACT</button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>

          <ul className="navbar-ul">
            <li className="navbar-li">
              <a href="#about">About</a>
            </li>
            <li className="navbar-li">
              <a href="#services">Services</a>
            </li>
            <li className="navbar-li">
              <a href="#projects">Projects</a>
            </li>
            <li className="navbar-li">
              <button className="contact-btn">CONTACT</button>
            </li>
          </ul>
        </div>

        <div className="main-header">
          <h1>WE ARE CREATIVES</h1>
          <img className="arrow-icon" src={ArrowDown} alt="Arrow down icon" />
        </div>
      </div>
    </section>
  );
}

export default Main;
