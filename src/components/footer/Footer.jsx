import React from "react";
import "./footer.css";
import Milk from "../../images/desktop/image-gallery-milkbottles.jpg";
import OrangePlate from "../../images/desktop/image-gallery-orange.jpg";
import Cone from "../../images/desktop/image-gallery-cone.jpg";
import Sugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg";
import Logo from "../../images/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-section">
        <div className="images">
          <img src={Milk} alt="Milk bottles" />
          <img src={OrangePlate} alt="Orange on a plate" />
          <img src={Cone} alt="Ice cream cone" />
          <img src={Sugarcubes} alt="Wall of sugar cubes" />
        </div>

        <section role="contentinfo" className="footer-end">
          <img className="footer-logo" src={Logo} alt="Sunnyside Logo" />
          <div className="links">
            <a
              className="footer-links"
              href="#about"
              aria-label="Link to the about page"
            >
              About
            </a>
            <a
              className="footer-links"
              href="#services"
              aria-label="Link to the services page"
            >
              Services
            </a>
            <a
              className="footer-links"
              href="#projects"
              aria-label="Link to the projects page"
            >
              Projects
            </a>
          </div>
          <div className="socials">
            <a
              className="footer-links"
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Link to the Facebook"
            >
              <AiFillFacebook />
            </a>
            <a
              className="footer-links"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Link to the Instagram"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="footer-links"
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Link to the Twitter"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="footer-links"
              href="https://www.pinterest.com"
              target="_blank"
              aria-label="Link to the Pinterest"
            >
              <BsPinterest />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
