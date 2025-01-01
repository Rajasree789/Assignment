import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default the first FAQ to be open

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan anytime based on your needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel anytime before the billing cycle ends to avoid future charges.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can customize your invoices with additional information as needed.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is done monthly or annually, depending on the plan you choose.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email from the settings page.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        {/* Centered Title */}
        <h2 className="faq-heading">Frequently asked questions</h2>
        <p className="faq-subheading">
          {" "}
          Everything you need to know about the product and billing.
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-line">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
                <span className="faq-toggle">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
              {/* Divider after every question */}
              <hr className="faq-divider" />
            </div>
          ))}
        </div>
        {/* Centered Footer Section */}
        <div className="faq-contact">
          <p className="faq-contact-heading">Still have questions?</p>
          <p className="faq-contact-description">
            Can’t find the answer you’re looking for? Please chat with our
            friendly team.
          </p>
          <button className="btn get-in-touch">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
