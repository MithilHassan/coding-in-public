import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
