import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Labrary from './pages/Labrary'
import Contact from './pages/Contact'
import Tools from './pages/Tools'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='w-screen h-screen bg-dark font-mono grid grid-cols-2 overflow-x-hidden'>
        <Header />
        <main className='col-span-2'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/library" element={<Labrary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
