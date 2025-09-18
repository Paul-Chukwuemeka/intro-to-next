import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full p-6 py-7 items-center flex justify-between text-gray-100">
      <Image src={"/images/logo.svg"} width={200} height={100} alt="Logo" className="w-35" />
      <div className="flex gap-6 text-md  font-bold items-center">
        <ul className="flex gap-6">
          <li>About</li>
          <li>Services</li>
          <li>Products</li>
        </ul>
        <button className="w-30 cursor-pointer font-fraunces hover:bg-gray-200 font-semibold text-lg h-11 rounded-full text-black bg-white">Contact</button>
      </div>
    </div>
  );
};

export default Header;
