import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <>
      <Header/>
      <Navigation setCurrentPage={setCurrentPage} /> <br />
      {/* 
      Expressions so we can conditionally render them. 
      && due to react unable to render boolean value true or false
      */}
      {currentPage === "Home" && <Home />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Resume" && <Resume />}
      <Footer />
    </>
  );
}

export default App;
