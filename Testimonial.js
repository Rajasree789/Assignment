import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <h2 className="brand-name">Sisyphus</h2>
        <p className="testimonial-quote">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </p>
        <div className="user-info">
          <img
            src="https://via.placeholder.com/50"
            alt="Candice Wu"
            className="user-image"
          />
          <div className="user-details">
            <p className="user-name">Candice Wu</p>
            <p className="user-title">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
