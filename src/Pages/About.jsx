import React from 'react'
import Banner from '../components/Banner'
import MissionVision from '../components/About/MissionVision'
import AboutContent from '../components/About/AboutContent'
import StudioTour from '../components/About/StudioTour'

const About = () => {
  return (
    <div>
        <Banner CapitalPagename={"ABOUT"} pagename={"About"}/>
        <AboutContent/>
        <MissionVision/>
        <StudioTour/>
    </div>
  )
}

export default About