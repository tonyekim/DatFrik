import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="">
          JustAnotherUIKit
        </a>
        <div className="hamburger hover:cursor-pointer" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item  hover:cursor-pointer">
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Home" ? "active" : ""}
              onClick={() => {
                setActiveLink("Home");
                closeMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item  hover:cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "About" ? "active" : ""}
              onClick={() => {
                setActiveLink("About");
                closeMenu();
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item hover:cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Testimonials" ? "active" : ""}
              onClick={() => {
                setActiveLink("Testimonials");
                closeMenu();
              }}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item  hover:cursor-pointer">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={activeLink === "Demo" ? "active" : ""}
              onClick={() => {
                setActiveLink("Demo");
                closeMenu();
              }}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
