import React from 'react'
import Banner from '../components/Banner'
import AllImages from '../components/Gallery/AllImages'
import data from "../components/Gallery/Images.json"
const GalleryPage = () => {
  return (
    <div>
        <Banner CapitalPagename={"GALLERY"} pagename={"Gallery"}/>
        <AllImages data={data}/>
    </div>
  )
}

export default GalleryPage