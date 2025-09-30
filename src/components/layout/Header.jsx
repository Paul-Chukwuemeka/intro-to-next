// Header component displays the top navigation or branding section.
// It usually contains the logo and navigation links.
import React from "react";
import Image from "next/image";

const Header = () => {
  // Main functional component for the header
  return (
    // Container for the header section
    <div className="w-full p-6 py-7 items-center flex justify-between text-gray-100">
      {/* Logo section */}
      <Image src={"/images/logo.svg"} width={200} height={100} alt="Logo" className="w-35" />
      {/* Navigation links and contact button */}
      <div className="flex gap-6 text-md  font-bold items-center">
        <ul className="flex gap-6">
          {/* Navigation menu items */}
          <li>About</li>
          <li>Services</li>
          <li>Products</li>
        </ul>
        {/* Contact button */}
        <button className="w-30 cursor-pointer font-fraunces hover:bg-gray-200 font-semibold text-lg h-11 rounded-full text-black bg-white">Contact</button>
      </div>
    </div>
  );
};

// Export the Header component for use in other parts of the app
export default Header;
