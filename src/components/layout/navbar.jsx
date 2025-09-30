 import React from "react";
import { MdSunny } from "react-icons/md";
import {FaMoon} from "react-icons/fa"

const Navbar = ({setDarkmode,darkMode}) => {
// Navbar component displays the navigation menu.
// It provides links to different sections or pages of the app.
// Import necessary dependencies (React, etc.)
// Main functional component for the navbar
// Destructure props if needed
  return (
    <div className="flex items-center justify-between text-white my-6">
      // Render the navigation bar
      <h1 className="text-5xl font-bold tracking-[8px]">TODO</h1>
      <button className="text-2xl cursor-pointer fill-current"
      onClick={()=>{
        setDarkmode((prev)=> !prev)
      }}
      >
        {darkMode ? <MdSunny /> : <FaMoon/> }
      </button>
    </div>
  );
};

// Export the Navbar component for use in other parts of the app
export default Navbar;
