import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./components/aboutme";
import Header from "./components/header";
import Footer from "./components/footer";
import Projects from "./components/projects";
import { SmoothScroll } from "./smooth";

function App() {
  return (
    <BrowserRouter>
    <SmoothScroll />
      <Header />
      <Routes>
      <Route path="/portfolio/" element={<Navigate to="/about-me" />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
