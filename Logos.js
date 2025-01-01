import React from "react";
import "../styles.css";

const Logos = () => {
  const companies = [
    "Boltshift",
    "Lightbox",
    "FeatherDev",
    "Spherule",
    "GlobalBank",
    "Nietzsche",
  ];

  return (
    <section className="logos">
      <div className="container">
        <p>Join 4,000+ companies already growing</p>
        <div className="logo-list">
          {companies.map((company, index) => (
            <div key={index} className="logo-item">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
