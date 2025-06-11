import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import Blog from './Pages/Blog/Blog'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about"  element = {<About />}/>
        <Route path = "/services"  element = {<Services />}/>
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/blog"  element = {<Blog />}/>
        <Route path = "*"  element={<p>Nothing to show</p>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App