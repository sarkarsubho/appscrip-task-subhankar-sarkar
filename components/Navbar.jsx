"use client";

import { useState, useEffect } from "react";
import "./nav.css";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  let [dropDownopen, setDropDownopen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isMenuOpen &&
        !target.closest(".navbar-nav") &&
        !target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Prevent scrolling when sidebar is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
   
    <div className="navbar">
      <div className="navbar-container">
        {/* <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}

        <div className="navbar-logo-container">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
            ☰
          </button>

          {/* <div className="logo-icon"> */}
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4H8V8H4V4Z" stroke="currentColor" strokeWidth="2" />
              <path
                d="M4 16H8V20H4V16Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 4H20V8H16V4Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 16H20V20H16V16Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M4 10H20V14H4V10Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg> */}
            <Image
              src="/images/logo.svg"
              alt="MySite Logo"
              width={30}
              height={30}
              priority
            />
          {/* </div> */}
        </div>

        <div className="navbar-center">
          <h1 className="logo-text">LOGO</h1>
        </div>

        <div className="navbar-right">
          <button className="icon-button">
            <Search size={20} />
          </button>
          <button className="icon-button">
            <Heart size={20} />
          </button>
          <button className="icon-button">
            <ShoppingBag size={20} />
          </button>
          <button className="icon-button">
            <User size={20} />
          </button>
          {/* <div className="language-selector">
            <span>ENG</span>
            <ChevronDown size={16} id="up" />
          </div> */}
          <div className="language-select">
            <div className="select-wrapper">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                onBlur={(e) => setDropDownopen(false)} // helps with visual reset after click
                aria-label="none"
                onClick={() => setDropDownopen(!dropDownopen)}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
              </select>
              {
                <ChevronDown
                  size={16}
                  style={{ rotate: dropDownopen ? "180deg" : "0deg" }}
                  className="arrow"
                />
              }
            </div>
          </div>
        </div>

        <div className="mobile-icons">
          <button className="icon-button">
            <Search size={20} />
          </button>
          <button className="icon-button">
            <Heart size={20} />
          </button>
          <button className="icon-button">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      <nav className={`navbar-nav `}>
        <ul className="nav-links">
          <li>
            <a href="/">SHOP</a>
          </li>
          <li>
            <a href="/skills">SKILLS</a>
          </li>
          <li>
            <a href="stories">STORIES</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
      {/* Mobile icons in sidebar */}

      <Sidebar
        side="left"
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        {/* <nav className={`navbar-nav `}> */}
        <ul className="nav-linksMob">
          <li>
            <a href="/">SHOP</a>
          </li>
          <li>
            <a href="/skills">SKILLS</a>
          </li>
          <li>
            <a href="stories">STORIES</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      {/* </nav> */}
      </Sidebar>
    </div>
  );
}
