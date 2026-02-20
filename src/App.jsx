import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Labrary from './pages/Labrary'
import Contact from './pages/Contact'
import Tools from './pages/Tools'
import Exams from './pages/Exams' 
import WhatsAppButton from './components/WhatsAppButton' 
import ReactGA from "react-ga4";

// Inicializa con tu ID de Google Analytics
ReactGA.initialize("G-0F9V48THMZ");

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* CAMBIOS CLAVE ACÁ ABAJO: 
          1. w-full en lugar de w-screen
          2. min-h-screen en lugar de h-screen
          3. flex flex-col en lugar de grid grid-cols-2 
      */}
      <div className='w-full min-h-screen bg-dark font-mono flex flex-col overflow-x-hidden relative'>
        <Header />
        
        {/* flex-grow hace que el main ocupe todo el espacio disponible, empujando el Footer hacia abajo */}
        <main className='flex-grow w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Labrary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/exams" element={<Exams />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App