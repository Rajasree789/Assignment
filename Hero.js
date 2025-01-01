import React from "react";
import "../styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <button className="new-feature-btn">
          <span className="new-feature">New feature</span>
          <span className="dashboard-link">
            Check out the team dashboard ->
          </span>
        </button>
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="hero-buttons">
          <button className="btn demo">Demo</button>
          <button className="btn signup">Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
