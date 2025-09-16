import './App.css'
import Navbar from './components/reusable/Navbar'
import Hero from "./components/HeroSection/Hero"
import Templates from './components/TemplateSection/Templates'
import Love from './components/LoveSection/Love'



function App() {
  

  return (
    <>
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
    <Navbar />
    <Hero />
    </div>
    <Templates />
    <Love />
    </>
  )
}

export default App
