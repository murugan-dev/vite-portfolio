import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Portfolio.css";
import Home from "./portfolioContant/Home/Home";
import About from "./portfolioContant/About/About";
import Skills from "./portfolioContant/Skills/Skills";
import Contact from "./portfolioContant/Contact/Contact";

import Navbar from "./portfolioContant/Navbar/Navbar";
//import Home from './portfolioContant/Home/Home';

const Portfolio = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />            

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Portfolio
