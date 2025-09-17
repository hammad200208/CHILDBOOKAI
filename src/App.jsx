import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/reusable/Navbar'
import Hero from "./components/HeroSection/Hero"
import Templates from './components/TemplateSection/Templates'
import Love from './components/LoveSection/Love'
import Like from './components/LikeToDoSection/Like'
import Footer from './components/reusable/Footer'



function App() {
  

  return (
    <>
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
    <Navbar />
    <Hero />
    </div>
    <Templates />
    <Love />
    <Like />
    <Footer />
    </>
  )
}

export default App
