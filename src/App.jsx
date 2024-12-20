import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TopSection from './components/TopSection/TopSection'
import Home from './Pages/Home'
import PodcastNav from './components/HomePodcast/PodcastNav'
import { OurTeam } from './Pages/OurTeam'
import Footer from './components/Footer'
import About from './Pages/About'
import PodcastPage from './Pages/PodcastPage'
import ContactPage from './Pages/Contact'
import Contact from './Pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import GalleryPage from './Pages/GalleryPage'
// import Podcast from './Pages/PodcastPage'
// import { Home } from './pages/Home'
// import Footer from './components/Card/Footer'
// import About from './pages/About'
// import Contact from './pages/Contact'
const App = () => {
  return (
    <div >
    <Router>
      <ScrollToTop/>
      <TopSection/>
      <Navbar/>
      <Routes>
        <Route path="/*" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/home/*" exact element={<PodcastNav/>} />
        <Route path="/podcast/" exact element={<PodcastPage/>} />
        <Route path="/gallery/" exact element={<GalleryPage/>} />
        
        <Route path="/our-team" exact element={<OurTeam/>} />
        <Route path="/contact" exact element={<Contact/>} />
      </Routes>
      <Footer/> 
    </Router>
    </div>
  )
}

export default App