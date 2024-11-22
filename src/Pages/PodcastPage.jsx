import React from 'react'
import PodcastBanner from '../components/PodcastCmp/PodcastBanner'
import PodcastSpotlight from '../components/HomePodcast/PodcastSpotlight'
// import PodcastSpotlight from '../components/HomePodcast/PodcastSpotlight'
// import AllPodcast from '../components/PodcastCmp/AllPodcast'

const PodcastPage = () => {
  return (
    <div>
        <PodcastBanner/>
        <PodcastSpotlight isHome={false} heading={"All Podcasts"} />
    </div>
  )
}

export default PodcastPage