import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PodcastDetails from './PodcastDetails'
// import PodcastDetails from './PodcastDetail'

const PodcastNav = () => {
  return (
    <div>
        <Routes>
            {/* <Route path="/*" exact element={<PodcastSpotlight/>} /> */}
            <Route path="/podcastDetail/:id" exact element={<PodcastDetails/>} />
        </Routes>
    </div>
  )
}

export default PodcastNav