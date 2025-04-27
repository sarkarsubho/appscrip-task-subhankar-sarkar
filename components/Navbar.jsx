"use client";

import { useState, useEffect } from "react";
import "./styles/nav.css";
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
  const [dropDownopen, setDropDownopen] = useState(false);

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
        <div className="navbar-logo-container">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
            ☰
          </button>
          <Image
            src="/images/logo.svg"
            alt="MySite Logo"
            width={30}
            height={30}
            priority
            loading="lazy"
          />
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
      </Sidebar>
    </div>
  );
}
