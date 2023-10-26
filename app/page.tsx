import React from 'react'
import Background from '../components/HomeScreenBackground/Background'


function LandingPage() {
  return (
    <>
    <Background/>
  
       <Link to="/home"> {/* Use Link for navigation */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 lg:py-4 lg:px-8">
       explore
      </button>
    </Link>
    </>
  )
}

export default LandingPage
