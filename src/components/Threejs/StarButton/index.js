import React from "react";
import "./starbutton.styles.css";
import { Suspense, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { StarIcon } from "./StarIcon";

// Ported from https://codepen.io/popmotion/pen/oNGxjpr?editors=1111
export default function StarButton() {
  const [isHover, setIsHover] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const externalUrl = "https://github.com/Ghat0tkach/FirstPR";
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleButtonClick = () => {
    // Add your external URL here
    

    setIsLiked(!isLiked);
  };

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    if (isLiked && !animationComplete) {
      // Redirect to external URL after animation (only once)
      setTimeout(() => {
        // Open the URL in a new tab
        window.open(externalUrl, "_blank");
      }, 5000); // 5000 milliseconds = 5 seconds
    
      setAnimationComplete(true);
    }
  };
  return (
    <motion.button
      className="Starbutton"
      initial={false}
      animate={[isLiked ? "liked" : "unliked", isHover ? "hover" : "rest"]}
      whileTap="press"
      variants={buttonVariants}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onClick={handleButtonClick}
      onAnimationComplete={handleAnimationComplete} 
    >
      <motion.div
        className="icon"
        variants={{
          liked: { opacity: 0, transition: iconFadeTransition },
          hover: isLiked
            ? { opacity: 0, transition: iconFadeTransition }
            : { opacity: 1 }
        }}
      >
        <Suspense fallback={null}>
          <StarIcon isHover={isHover} isLiked={isLiked} />
        </Suspense>
      </motion.div>
      <div className="label">
        <motion.span variants={labelTextVariants} className="default">
          Star
          <motion.span variants={successTextVariants} className="success">
            red
          </motion.span>
        </motion.span>
      </div>
      <div className="number">
        <motion.span variants={currentCountVariants} className="current">
          38
        </motion.span>
        <motion.span variants={newCountVariants} className="new">
          39
        </motion.span>
      </div>
    </motion.button>
  );
}

const iconFadeTransition = { duration: 0.2, delay: 0.3 };

const buttonVariants = {
  rest: {
    "--button-star-greyscale": "100%",
    "--button-star-contrast": "0%",
    transition: { duration: 0.7 }
  },
  hover: {
    "--button-star-greyscale": "0%",
    "--button-star-contrast": "100%",
    scale: 1.2,
    y: -8
  },
  press: { scale: 1.1 }
};

const labelTextVariants = {
  unliked: { x: 24 },
  liked: { x: -46 }
};

const successTextVariants = {
  unliked: { opacity: 0 },
  liked: { opacity: 1 }
};

const likedTransition = {
  duration: 0.25,
  delay: 0.3
};

const currentCountVariants = {
  unliked: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  liked: { opacity: 0, y: -40, transition: likedTransition }
};

const newCountVariants = {
  unliked: { opacity: 0, y: 40, transition: { duration: 0.25 } },
  liked: { opacity: 1, y: 0, transition: likedTransition }
};
