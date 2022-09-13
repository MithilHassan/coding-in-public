import React from "react";
import {
  HiOutlineDesktopComputer,
  HiOutlineVideoCamera,
  HiOutlinePresentationChartBar,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { FiGithub, FiCodepen, FiTwitter, FiCoffee } from "react-icons/fi";
import { RiPatreonLine } from "react-icons/ri";
import "./Home.css";
import avatar from "../images/ciphead.png";
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="greeting">
          <p>👋</p>
          <div>
            <p>
              Hey! My name is <span>Chris.</span>
            </p>
            <h2>
              Welcome to <span className="underline">Coding in Public!</span>
            </h2>
          </div>
        </div>

        <aside className="callout">
          <HiOutlineLightBulb />
          <div className="callout-content">
            <p>
              I could be wrong, but now I feel like you’re just in a pattern of
              clicking stuff. True?
            </p>
          </div>
        </aside>
        <div className="desc">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
            <div className="avatar-circle"></div>
          </div>
          <div className="desc-content">
            <p>
              I enjoy teaching web dev by coding live project builds in public.
            </p>
            <a
              href="https://www.youtube.com/c/CodinginPublic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-filled"
            >
              Watch Tutorials <HiOutlineVideoCamera />
            </a>
            <a href="/projects" className="btn-filled">
              View Projects
              <HiOutlinePresentationChartBar />
            </a>
          </div>
        </div>
        <div className="links">
          <h2>Key Links</h2>
          <div className="key-container">
            <a href="/projects" className="btn-outline">
              Projects
              <HiOutlinePresentationChartBar />
            </a>
            <a
              href="https://www.youtube.com/c/CodinginPublic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Youtube
              <HiOutlineVideoCamera />
            </a>
            <a
              href="https://codepen.io/Coding-in-Public"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              CodePen
              <FiCodepen />
            </a>
            <a
              href="https://github.com/coding-in-public"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
              <FiGithub />
            </a>
            <a
              href="https://chrispennington.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Blog
              <HiOutlineDesktopComputer />
            </a>
            <a
              href="https://twitter.com/cpenned"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Twitter
              <FiTwitter />
            </a>
            <a
              href="https://www.patreon.com/coding_in_public"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Patreon
              <RiPatreonLine />
            </a>
            <a
              href="https://www.buymeacoffee.com/chrispennington"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Buy Me a Coffee
              <FiCoffee />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
