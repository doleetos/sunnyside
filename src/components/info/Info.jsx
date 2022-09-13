import React from "react";
import "./info.css";

function Info() {
  return (
    <section id="info" role="information">
      <div className="info-wrapper">
        <div className="grid-wrapper">
          <div className="info-div1">
            <h2 className="info-heading">Transform your brand</h2>
            <p className="description">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button className="transform-btn">LEARN MORE</button>
          </div>
          <div className="info-div2"></div>
          <div className="info-div3"></div>
          <div className="info-div4">
            <h2 className="info-heading">Stand out to the right audience</h2>
            <p className="description">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <button className="standout-btn">LEARN MORE</button>
          </div>
          <div className="info-div5 cherry">
            <h2 className="cherry-heading">Graphic design</h2>
            <p className="description">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
          <div className="info-div6 orange">
            <h2 className="orange-heading">Photography</h2>
            <p className="description">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
