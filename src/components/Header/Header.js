import React from "react";
import logo from "../../images/ciphead-sm.png";
import { FiExternalLink } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <p>Coding In Public</p>
        </Link>
        <div className="menubar">
          <li className="menu-item">
            <Link className="menu-link" to="projects">
              Live Projects
            </Link>
          </li>
          <li className="menu-item">
            <a
              className="menu-link"
              href="https://www.youtube.com/c/CodinginPublic"
            >
              Youtube <FiExternalLink />
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Header;
