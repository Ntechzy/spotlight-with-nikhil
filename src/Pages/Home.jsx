import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import AudioSection from '../components/Home/AudioSection'
import PodcastSpotlight from '../components/HomePodcast/PodcastSpotlight'
import TestimonialCarousel from '../components/Home/TestimonialCarousel'
import OurGuests from '../components/Home/OurGuests'
import UpcomingGuest from '../components/Home/UpcomingGuest'

const Home = () => {
  return (
    <div>
        <HomeBanner title={"Let’s Start Now"} description={"Taking Podcast to the Next Level"} image={"/assets/podcastbanner.JPG"} btn={"Explore Now"}/>
        <AudioSection />
        <PodcastSpotlight isHome={true} heading={"Featured Podcasts"}/>
        <OurGuests/>
        <TestimonialCarousel />
        <UpcomingGuest/>
    </div>
  )
}

export default Home