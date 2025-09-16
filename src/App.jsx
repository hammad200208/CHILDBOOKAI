import './App.css'
import Navbar from './components/reusable/Navbar'
import Hero from "./components/HeroSection/Hero"


function App() {
  

  return (
    <>
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
    <Navbar />
    <Hero />
    </div>
    </>
  )
}

export default App
