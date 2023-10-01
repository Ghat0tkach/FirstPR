import * as React from "react"
import NavModule, { Navbar } from "../components/NavModule/Navbar"
import Hero from "../components/Hero"
import ScrollVelocity from "../components/ScrollAnimations/ScrollVelocity"
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <main>
      <Navbar/>
      <Hero /> 
      {/* <div classname="mt-10">
      <ScrollVelocity/>
      </div> */}
     
    
    
   
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage