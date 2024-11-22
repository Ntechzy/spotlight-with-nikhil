import React from 'react'
import TeamBanner from '../components/OurTeam/TeamBanner'
import { StickyScroll } from '../components/ui/StickyScroll'    

const data = {
    "employees": [
        {
            "name": "Rohit Dwivedi",
           "image": "/assets/img4.png",
            "position": "PUBLIC RELATIONS | MARKETING HEAD",
            "experience": "10+ years"
          },
      {
        "name": "Arif",
        "image": "/assets/img1.png",
        "position": "PRODUCER | PRODUCTION HEAD",
        "experience": "8+ years"
      },
      {
        "name": "Akash Sachan",
      "image": "/assets/img1.png",
        "position": "CINEMATOGRAPHER",
        "experience": "8+ years"
      },
      {
        "name": "Alok Katiyar",
      "image": "/assets/img1.png",
        "position": "AERIAL CINEMATOGRAPHER",
        "experience": "8+ years"
      },
      {
        "name": "Shipra Sachan",
      "image": "/assets/img5.png",
        "position": "CREATIVE HEAD",
        "experience": "6+ years"
      },
      {
        "name": "Parthsarthi",
       "image": "/assets/img2.png",
        "position": "MEDIA MANAGER | AUDIO ENGINEER",
        "experience": "4+ years"
      },
     
      {
        "name": "Sachin Singh",
       "image": "/assets/img3.png",
        "position": "RESEARCH & DEVELOPMENT",
        "experience": "4+ years"
      },
      {
        "name": "Sandeep Chauhan",
      "image": "/assets/img6.png",
        "position": "CREATIVE TEAM",
        "experience": "1 year"
      },
     
    ]
  }
  
  
  
export const OurTeam = () => {
  return (
    <div>
        <TeamBanner/>
       <StickyScroll content={data}/>
        <div>
            lorem1000
        </div>
    </div>
  )
}
