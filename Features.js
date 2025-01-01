import React from "react";
import "./Features.css";
import Testimonial from "./Testimonial"; // Import the Testimonial component

function Features() {
  return (
    <>
      {/* 1. Analytics that feels like it’s from the future */}
      <section className="features">
        <h2 className="features-heading">Features</h2>
        <h1 className="features-title">
          Analytics that feels like it’s from the future
        </h1>
        <p className="features-subtitle">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="features-cards">
          <div className="feature-card">
            <div className="icon">📂</div>
            <h3>Share team inboxes</h3>
            <p>
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>Deliver instant answers</h3>
            <p>
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Manage your team with reports</h3>
            <p>
              Measure what matters with our easy-to-use reports. Filter, export,
              and drill down on the data in a couple clicks.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">💬</div>
            <h3>Connect with customers</h3>
            <p>
              Solve a problem or close a sale in real time with chat. If no one
              is available, customers are routed to email.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">🔗</div>
            <h3>Connect the tools you already use</h3>
            <p>
              Explore 100+ integrations that make your day-to-day workflow
              efficient and familiar.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon">🤝</div>
            <h3>Our people make the difference</h3>
            <p>
              We're an extension of your customer service team, available 24/7
              when you need help.
            </p>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* 2. Cutting-edge features for advanced analytics */}
      <section className="analytics-features">
        <div className="analytics-header">
          <p className="analytics-badge">Features</p>
          <h2 className="analytics-title">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="analytics-description">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="analytics-center">
          <img
            src="https://via.placeholder.com/800x400" // Replace with your image URL
            alt="Analytics Dashboard"
            className="analytics-image"
          />
        </div>

        <div className="features-cards">
          <div className="feature-card">
            <div className="feature-icon">📬</div>
            <h3>Share team inboxes</h3>
            <p>
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Deliver instant answers</h3>
            <p>
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Manage your team with reports</h3>
            <p>
              Measure what matters with easy-to-use reports. Filter, export, and
              drill down on the data in a couple of clicks.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* 3. Testimonial Section */}
    </>
  );
}

export default Features;
