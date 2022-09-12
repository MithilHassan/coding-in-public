import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import Data from "../Assets/Data/ProjectsData.json";
function Projects() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <>
      <Header></Header>
      <div id="projects" style={{ padding: "0px 20px" }}>
        <Filter setSearch={setSearch} data={data}></Filter>
        <Card data={data} search={search}></Card>
      </div>
    </>
  );
}

export default Projects;
