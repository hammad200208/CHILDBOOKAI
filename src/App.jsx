import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/reusable/Navbar";
import Footer from "./components/reusable/Footer";
import Hero from "./components/HeroSection/Hero";
import Templates from "./components/TemplateSection/Templates";
import Love from "./components/LoveSection/Love";
import Like from "./components/LikeToDoSection/Like";
import Create from "./Pages/Create";
import Guide from "./Pages/Guide";
import Price from "./Pages/Price";
import Template from  "./Pages/Template"
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const Home = () => (
  <>
    <Hero />
    <Templates />
    <Love />
    <Like />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
