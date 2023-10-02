import * as React from "react"
import NavModule, { Navbar } from "../components/NavModule/Navbar"
import Hero from "../components/Hero"
import ScrollVelocity from "../components/ScrollAnimations/ScrollVelocity"
import Seo from '../components/seo'
import FeatureSection from "../components/features"
import StarButton from "../components/Threejs/StarButton"
import ButtonLayout from "../components/Threejs/buttonlayout"


const IndexPage = () => {
  return (
    <>
    
     <main>
    
      <Hero /> 
      <div classname="mt-10 mb-10">
      <ButtonLayout/>
      <ScrollVelocity/>
      </div>
    
    
      
     
     
    
    
   
    </main></>
   
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage