import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import Data from "../Assets/Data/ProjectsData.json";
function Projects() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <section style={{ borderBottom: "10px solid #651ef4" }}>
      <Header></Header>
      <div id="projects">
        <Filter setSearch={setSearch} data={data}></Filter>
        <Card data={data} search={search}></Card>
      </div>
    </section>
  );
}

export default Projects;
