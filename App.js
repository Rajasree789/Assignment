import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Logos from "./components/Logos";
import "./styles.css";
import Features from "./Features";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import FreeBlog from "./components/FreeBlog/FreeBlog";
import FreeTrail from "./components/FreeTrail/FreeTrail";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Logos />
      <Features />
      <FAQ />
      <FreeBlog />
      <FreeTrail />
    </div>
  );
}
export default App;
