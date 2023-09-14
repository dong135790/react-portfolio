import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />
      {/* 
      Expressions so we can conditionally render them. 
      && due to react unable to render boolean value true or false
      */}
      {currentPage === "Home" && <Home />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Resume" && <Resume />}
    </>
  );
}

export default App;
