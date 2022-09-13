import React, { useState } from "react";
import { IconContext } from "react-icons";
import "./main.css";
import Logo from "../../images/logo.svg";
import ArrowDown from "../../images/icon-arrow-down.svg";
import { AiOutlineMenu } from "react-icons/ai";

function Main() {
  const [navbar, setNav] = useState(false);

  return (
    <header id="#">
      <div className="main-wrapper">
        <div className="navbar">
          <img className="logo" src={Logo} alt="Sunnyside Logo" />

          <nav className="mobile-btn">
            <button
              className="mobile-nav-btn"
              onClick={() => {
                setNav(!navbar);
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
          </nav>

          <nav className="mobile-nav-icon">
            {navbar && (
              <>
                <div className="mobile-nav-bubble bubble-point">
                  <ul className="mobile-nav-ul">
                    <li className="mobile-nav-li">
                      <a href="#about" aria-label="Link to the about page">
                        About
                      </a>
                    </li>
                    <li className="mobile-nav-li">
                      <a
                        href="#services"
                        aria-label="Link to the services page"
                      >
                        Services
                      </a>
                    </li>
                    <li className="mobile-nav-li">
                      <a
                        href="#projects"
                        aria-label="Link to the projects page"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="mobile-nav-li">
                      <button className="mobile-contact-btn">CONTACT</button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </nav>

          <ul className="navbar-ul">
            <li className="navbar-li">
              <a href="#about" aria-label="Link to the about page">
                About
              </a>
            </li>
            <li className="navbar-li">
              <a href="#services" aria-label="Link to the services page">
                Services
              </a>
            </li>
            <li className="navbar-li">
              <a href="#projects" aria-label="Link to the projects page">
                Projects
              </a>
            </li>
            <li className="navbar-li">
              <button className="contact-btn">CONTACT</button>
            </li>
          </ul>
        </div>

        <header className="main-header">
          <h1>WE ARE CREATIVES</h1>
          <img className="arrow-icon" src={ArrowDown} alt="Arrow down icon" />
        </header>
      </div>
    </header>
  );
}

export default Main;
