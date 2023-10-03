import * as React from "react"
import Hero from "../components/Hero"
import ScrollVelocity from "../components/ScrollAnimations/ScrollVelocity"
import Seo from '../components/seo'
import ButtonLayout from "../components/Threejs/buttonlayout"
import "../styles/global.css";

const IndexPage = () => {
  return (
    <>
    
     <main>
    
      <Hero /> 
      <div classname="mt-10 mb-10">
      <ButtonLayout/>
      <ScrollVelocity text1={`HacktoberFest 2023 `} text2={`First Contribution`}/>
      </div>
    
    
      
     
     
    
    
   
    </main></>
   
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage