import React from "react";
import logo from "../../images/ciphead-sm.png";
import { FiExternalLink } from "react-icons/fi";
import "./Header.css";
function Header() {
  return (
    <nav>
      <div className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="" />
          <p>Coding In Public</p>
        </a>
        <div className="menubar">
          <li className="menu-item">
            <a className="menu-link" href="/live-projects">
              Live Projects
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/youtube">
              Youtube <FiExternalLink />
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Header;
