import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-cool-inview"; // Import the library for tracking element visibility

const FeatureSection = () => {
 const controls1 = useAnimation();
 const controls2 = useAnimation();
 const [isFeature2Visible, setIsFeature2Visible] = useState(false);

// Function to trigger the animation for feature 2
const animateFeature2 = async () => {
await controls2.start("visible");
  setIsFeature2Visible(true);
 };

 useEffect(() => {
  // Apply background color directly to the body element
  document.body.style.backgroundColor = "black";
 }, []);

 // Use the inView hook to track the visibility of the second feature
 const { observe } = useInView({
  unobserveOnEnter: true,
  onEnter: animateFeature2,
 });

 // Animation variants for feature 1 and feature 2
 const featureVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
 };

 // Function to handle the transition between feature 1 and feature 2
  const handleTransition = () => {
    if (isFeature2Visible) {
      // Animate feature 2 in
      controls2.start("visible");
    } else {
      // Animate feature 1 out
      controls1.start("hidden");
    }
  };

 return (
  <div className="min-h-screen text-white flex justify-center items-center">
   {/* Feature 1 */}
   <motion.div
    className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-10 bg-gray-100 shadow-md my-8"
    variants={featureVariants}
    initial="hidden"
    animate={controls1}
    onAnimationComplete={handleTransition}
   >
    <div className="w-full md:w-1/2"> 
     {/* Glowing border box */}
     <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg filter blur-md brightness-150 opacity-70 animate-pulse"></div>
      <img
       src="1.jpg"
       alt="Feature 1"
       className="w-full h-full object-cover rounded-lg border-4 border-transparent hover:border-white"
      />
     </div>
    </div>
    <div className="w-full md:w-1/2">
     {/* Feature 1 content */}
     <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      Feature 1 Title
     </h2>
     <p className="text-lg md:text-xl">
      Feature 1 description goes here.
     </p>
    </div>
   </motion.div>

   {/* Feature 2 */}
   <motion.div
    className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-10 bg-gray-100 shadow-md my-8"
    variants={featureVariants}
    initial="hidden"
    animate={controls2}
    onAnimationComplete={handleTransition}
    ref={observe}
    style={{
      // If feature 2 is visible, set its opacity to 0 to start
      opacity: isFeature2Visible ? 0 : 1,
    }}
   >
    <div className="w-full md:w-1/2">
     {/* Glowing border box */}
     <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg filter blur-md brightness-150 opacity-70 animate-pulse"></div>
      <img
       src="2.jpg"
       alt="Feature 2"
       className="w-full h-full object-cover rounded-lg border-4 border-transparent hover:border-white"
      />
     </div>
    </div>
    <div className="w-full md:w-1/2">
     {/* Feature 2 content */}
     <h2 className="text-2xl md:text-3xl font-semibold mb-4">
      Feature 2 Title
     </h2>
     <p className="text-lg md:text-xl">
      Feature 2 description goes here.
     </p>
    </div>
   </motion.div>
  </div>
 );
};

export default FeatureSection;

