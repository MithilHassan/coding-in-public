import React from "react";
import "./Card.css";
import {
  HiOutlineTemplate,
  HiOutlineVideoCamera,
  HiCode,
} from "react-icons/hi";

function Card(props) {
  const data = props.data;
  const search = props.search.toLowerCase();
  return (
    <div className="card-container">
      {data
        .filter((dt) => {
          return search === ""
            ? dt
            : dt.title.toLowerCase().includes(search) ||
                dt.text.toLowerCase().includes(search) ||
                dt.tags
                  .reduce((sum, tag) => sum + tag, "")
                  .toLowerCase()
                  .includes(search);
        })
        .map((dt) => (
          <div key={dt.id} className="card">
            <a href="/" className="card-img">
              <img src={dt.image} alt="" />
            </a>
            <div className="card-content">
              <a href="/" className="card-title">
                {dt.title}
              </a>
              <p className="card-desc">{dt.text}</p>
              <div className="btn-container">
                <a href="/" className="btn-filled">
                  Demo
                  <HiOutlineTemplate />
                </a>
                <a href="/" className="btn-filled">
                  Video
                  <HiOutlineVideoCamera />
                </a>
                <a href="/" className="btn-filled">
                  GitHub
                  <HiCode />
                </a>
              </div>
            </div>
            <div className="tags">
              {dt.tags.map((tag, index) => (
                <a key={index} href="/">
                  <span># </span>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        ))}
      ;
    </div>
  );
}

export default Card;
