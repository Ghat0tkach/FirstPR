import * as React from "react"
import NavModule, { Navbar } from "../components/NavModule/Navbar"
import Hero from "../components/Hero"


const IndexPage = () => {
  return (
    <main>
      <Navbar/>
     {/* <div> <Footer/></div> */}
     <div className="relative z-0"> {/* Add relative positioning and z-0 */}
        <Hero /> {/* Render your styled component here */}
      </div>
     
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
