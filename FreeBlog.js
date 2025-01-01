import React from "react";
import "./FreeBlog.css";

const FreeBlog = () => {
  const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: "path/to/image1.jpg", // Replace with actual image URL
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: "path/to/image2.jpg", // Replace with actual image URL
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: "path/to/image3.jpg", // Replace with actual image URL
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header-wrapper">
          <h2 className="blog-header">Our Blog</h2>
          <a href="#all-posts" className="blog-link">
            View all posts
          </a>
        </div>
        <h3 className="blog-subheader">Latest blog posts</h3>
        <p className="blog-description">
          Tools and strategies modern teams need to help their companies grow.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-description">{post.description}</p>
                <div className="blog-footer">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeBlog;
