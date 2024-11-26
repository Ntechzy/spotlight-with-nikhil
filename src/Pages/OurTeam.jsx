import React from 'react'
import TeamBanner from '../components/OurTeam/TeamBanner'
import { StickyScroll } from '../components/ui/StickyScroll'    

const data = {
  "employees": [
    {
      "name": "Rohit Dwivedi",
      "image": "/assets/img4.png",
      "position": "PUBLIC RELATIONS | MARKETING HEAD",
      "experience": "10+ years",
      "about": "Rohit has over a decade of experience in public relations and marketing, excelling at building brand awareness and strategic communications."
    },
    {
      "name": "Arif",
      "image": "/assets/img1.png",
      "position": "PRODUCER | PRODUCTION HEAD",
      "experience": "8+ years",
      "about": "Arif is a seasoned producer with 8 years in the industry, known for his ability to manage complex production schedules and budgets."
    },
    {
      "name": "Akash Sachan",
      "image": "/assets/akash.png",
      "position": "CINEMATOGRAPHER",
      "experience": "8+ years",
      "about": "Akash is a talented cinematographer whose artistic vision and technical skills bring stories to life through stunning visuals."
    },
    {
      "name": "Alok Katiyar",
      "image": "/assets/alok.png",
      "position": "AERIAL CINEMATOGRAPHER",
      "experience": "8+ years",
      "about": "Alok specializes in aerial cinematography, utilizing drones to capture breathtaking perspectives for film and television."
    },
    {
      "name": "Shipra Sachan",
      "image": "/assets/img5.png",
      "position": "CREATIVE HEAD",
      "experience": "6+ years",
      "about": "As the Creative Head, Shipra leads the creative direction of projects, ensuring innovative concepts and designs are realized."
    },
    {
      "name": "Parthsarthi",
      "image": "/assets/img2.png",
      "position": "MEDIA MANAGER | AUDIO ENGINEER",
      "experience": "4+ years",
      "about": "Parthsarthi blends media management and audio engineering, focusing on sound quality and effective media strategy."
    },
    {
      "name": "Sachin Singh",
      "image": "/assets/img3.png",
      "position": "RESEARCH & DEVELOPMENT",
      "experience": "4+ years",
      "about": "Sachin drives innovation in research and development, contributing insights that enhance project outcomes and efficiency."
    },
    {
      "name": " ", // Replace with a real name if desired
      "image": "/assets/img3.png",
      "position": "  ",
      "experience": " ",
      "about": " "
    }
  ]
};
  
  
  
export const OurTeam = () => {
  return (
    <div>
        <TeamBanner/>
       <StickyScroll content={data}/>
 
    </div>
  )
}
