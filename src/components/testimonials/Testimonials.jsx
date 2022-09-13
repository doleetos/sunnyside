import React from "react";
import "./testimonials.css";
import Emily from "../../images/image-emily.jpg";
import Jennie from "../../images/image-jennie.jpg";
import Thomas from "../../images/image-thomas.jpg";

function Testimonials() {
  return (
    <section id="testimonial">
      <div className="testimonials-wrapper">
        <h1 className="testimonials__heading">CLIENT TESTIMONIALS</h1>
        <div className="testimonials">
          <div className="testimonial-section">
            <div className="testimonial-card">
              <img
                className="client-img"
                src={Emily}
                alt="Profile picture of Emily R."
              />
              <p className="client-quote">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <p className="client-name">Emily R.</p>
              <p className="client-job">Marketing Director</p>
            </div>
            <div className="testimonial-card">
              <img
                className="client-img"
                src={Thomas}
                alt="Profile picture of Thomas S."
              />
              <p className="client-quote">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <p className="client-name">Thomas S.</p>
              <p className="client-job">Chief Operating Officer</p>
            </div>
            <div className="testimonial-card">
              <img
                className="client-img"
                src={Jennie}
                alt="Profile picture of Jennie F."
              />
              <p className="client-quote">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <p className="client-name">Jennie F.</p>
              <p className="client-job">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
