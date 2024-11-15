import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import AudioSection from '../components/Home/AudioSection'
import PodcastSpotlight from '../components/HomePodcast/PodcastSpotlight'

const Home = () => {
  return (
    <div>
        <HomeBanner />
        <AudioSection />
        <PodcastSpotlight />
    </div>
  )
}

export default Home