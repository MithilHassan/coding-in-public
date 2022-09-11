import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

function Home() {
  const home = {
    minHeight: "100vh",
    borderBottom: "10px solid #651ef4",
    backgroundColor: "#1c1e2b",
  };
  return (
    <section id="home" style={home}>
      <Header></Header>
      <Main></Main>
    </section>
  );
}

export default Home;
