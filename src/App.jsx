import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TopSection from './components/TopSection/TopSection'
import Home from './Pages/Home'
// import { Home } from './pages/Home'
// import Footer from './components/Card/Footer'
// import About from './pages/About'
// import Contact from './pages/Contact'
const App = () => {
  return (
    <div >
    <Router>
      <TopSection/>
      <Navbar/>
      <Routes>
        <Route path="/*" exact element={<Home/>} />
        <Route path="/services" exact element={<div>Services</div>} />
        <Route path="/about" exact element={"jguiih"} />
        <Route path="/contact" exact element={"guyuyu"} />
      </Routes>
      {/* <Footer/>  */}
    </Router>
    </div>
  )
}

export default App