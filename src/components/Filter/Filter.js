import React from "react";
import "./Filter.css";
function Filter(props) {
  return (
    <div className="container">
      <div className="filter">
        <p>
          I’ve gathered larger channel projects on this page. Select any tag(s)
          to filter the list.
        </p>
        <small>{props.data.length} matching projects</small>
        <input
          onChange={(event) => props.setSearch(event.target.value)}
          type="text"
          placeholder="Filter-posts"
          autoFocus
        />
      </div>
    </div>
  );
}

export default Filter;
