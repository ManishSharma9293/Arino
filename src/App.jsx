import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfoliyo from "./Components/Portfoliyo";
import Blog from "./Components/Blog";
import Page from "./Components/Page";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Home />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfoliyo" element={<Portfoliyo />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/page" element={<Page />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
