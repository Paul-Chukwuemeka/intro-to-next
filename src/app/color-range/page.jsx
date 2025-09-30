// Color Range page allows users to generate color palettes based on input color.
// Uses the values.js library to generate color variations.
"use client";
import React, { useState, useEffect, use } from "react";
import Values from "values.js";

const Page = () => {
  // State for the base color, color array, and input value
  const [color, setColor] = useState("gray");
  const [colorArr, setColorArr] = useState(null);
  const [input,setInput] = useState("")

  // Generate color variations when color changes
  useEffect(() => {
    try {
      const mycolors = new Values(color).all(20);
      setColorArr(mycolors);
    } catch (error) {
      console.log(error);
    }
  }, [color]);

  return (
    // Main container for the color range page
    <div className="w-full h-screen bg-amber-50 flex flex-col gap-4 p-12 max-md:p-8 items-center">
      {/* Page title */}
      <h1 className="text-4xl max-md:text-3xl font-semibold bg-gradient-to-r from-red-500 via-green-600 to-yellow-500 bg-clip-text text-transparent">
        Color range
      </h1>
      {/* Form for color input */}
      <form className="flex gap-2 border w-full rounded-full p-4 max-w-160"
      onSubmit={(e)=>{
        e.preventDefault()
        setColor(input)
      }}
      >
        {/* Color picker input */}
        <input
          type="color"
          className="h-10"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        {/* Text input for color value */}
        <input
          type="text"
          className="border flex-1 px-3 h-10 outline-none"
          // before using submit btn
            onChange={(e) => {
              setInput(e.target.value);
            }}
        />
        <button
        type="button"
          className="w-20 h-10 bg-blue-500 rounded-full text-lg cursor-pointer text-white font-semibold"
          onClick={() => {

            setColor(input);
          }}
        >
          Submit
        </button>
      </form>
      <div className="flex flex-wrap justify-center gap-2">
        {colorArr &&
          colorArr.map((item, i) => {
            const str = `rgb(${item.rgb.join(",")})`;
            return (
              <div
                key={i}
                className={`w-50 h-50 relative  after:bg-black/90 after:content-[''] after:w-full after:block after:h-8  after:absolute after:left-0 after:bottom-0 border p-4 text-lg text-white`}
                style={{ backgroundColor: str }}
              >
                <p className="absolute bottom-0 text-white z-20">#{item.hex}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page;
