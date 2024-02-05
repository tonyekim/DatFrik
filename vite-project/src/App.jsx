import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Supported from "./components/Supported";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Supported />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
