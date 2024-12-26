import React from 'react'
import Quizapp from './components/Quizapp'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './pages/Navbar'
import Pagenot from './pages/Pagenot'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Footer from './pages/Footer'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/loginpage" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/pagenot" element={<Pagenot />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/quiz" element={<Quizapp />} />
      </Routes>
    
    
    
    

    
      
    
    </>
  )
}

export default App