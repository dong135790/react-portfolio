import "./App.css";
/*
1. Router is the provider
2. Routes is our container (decides what is rendered base on path)
3. Route is the element that we are rendering on that path
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
      {/* Place here so it has the ability to control routes */}
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;
