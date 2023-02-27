import React from 'react'
import LogIn from './component/LogIn'
import Navbar from './component/Navbar'
import Registration from './component/Registration'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'

import About from './component/About'
import Wcube from './component/Wcube'
import { Route, Routes } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    
    <Navbar/> 
    
      <Routes>  
      
    <Route exact path="/" element={<LogIn/>}/>
    <Route exact path="/registration" element={<Registration/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/wcube" element={<Wcube/>} />


    </Routes>
     
    </>
  )
}

export default App