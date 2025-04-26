"use client";

import { useEffect } from "react";
import "./sidebar.css";

export default function Sidebar({ isOpen, onClose, side = "left", children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`sidebar ${side} ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </>
  );
}
