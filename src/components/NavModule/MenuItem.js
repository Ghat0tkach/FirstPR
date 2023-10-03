import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby"; // Import Link from Gatsby

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const menuItems = ["","","", ""];

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    > 
    {i === 0 ? (
        <Link to="/">Home</Link> // Use Link to navigate to the "Blog" page
      ) : (
        menuItems[i]
      )}
      {i === 1 ? (
        <Link to="/blog">Blog Section</Link> // Use Link to navigate to the "Blog" page
      ) : (
        menuItems[i]
      )}
      {i === 2 ? (
        <Link to="/readme">Explore Github Readme</Link> // Use Link to navigate to the "Blog" page
      ) : (
        menuItems[i]
      )}
        {i === 3 ? (
        <a href="https://www.github.com/ghat0tkach/firstPR">Github Repo ⭐</a> // Use Link to navigate to the "Blog" page
      ) : (
        menuItems[i]
      )}
    </motion.li>
  );
};
