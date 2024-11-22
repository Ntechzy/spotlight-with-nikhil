import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PodcastDetails from './PodcastDetails'



const PodcastNav = () => {
  return (
    <div>
        <Routes>
            {/* <Route path="/*" exact element={<PodcastSpotlight/>} /> */}
            <Route path="/featuredPodcast/:id" exact element={<PodcastDetails/>} />
        </Routes>
    </div>
  )
}

export default PodcastNav