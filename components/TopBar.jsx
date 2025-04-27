"use client";

import "./styles/topBar.css";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <div className="bar-items desktop">
          <BarItem />
          <BarItem />
          <BarItem />
        </div>
        <div className="bar-items mobile">
          <BarItem />
        </div>
      </div>
    </div>
  );
}

function BarItem() {
  return (
    <div className="bar-item">
      <Image
        src={"/globe.svg"}
        alt="globe"
        width={16}
        height={16}
        loading="lazy"
      />
      <span>Lorem ipsum dolor</span>
    </div>
  );
}
