import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { useState } from 'react'

function App() {

    const [Var,setVar] = useState(0)
  
  return (
 <>
 <h1>{Var}</h1>
 <button onClick={()=>{setVar(Var+1)}}>Add into var </button>
    <Router>
         <h1>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
         </h1>
        <Footer/>
    </Router>
</>
  )
}

export default App
