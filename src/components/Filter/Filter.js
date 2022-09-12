import React from "react";
import "./Filter.css";
function Filter(props) {
  const setSearch = props.setSearch;
  const data = props.data;
  const tags = [];
  data.map((dt) => dt.tags.map((tag) => tags.push(tag)));
  return (
    <div className="container">
      <div className="filter">
        <p>
          I’ve gathered larger channel projects on this page. Select any tag(s)
          to filter the list.
        </p>
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Filter-posts"
          autoFocus
        />
      </div>
      <div className="filter-tags">
        {tags
          .reduce(
            (tags, tag) => (tags.includes(tag) ? tags : [...tags, tag]),
            []
          )
          .map((tag) => (
            <button
              onClick={(event) => setSearch(event.target.innerText)}
              className="btn-outline"
            >
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Filter;
