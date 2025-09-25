"use client"
import React from "react";
import { useState,useEffect } from "react";

const Page = () => {
    const [text,setText] = useState("")
    const [words,setWords] = useState(0)
    const [chars,setChars] = useState(0)

    useEffect(()=>{
        setWords(text.split(' ').length)
        setChars(text.length)
    },[text])

    return (
    <div className="w-full h-screen bg-amber-50 flex flex-col gap-4 p-12 max-md:p-8 items-center">
      <h1 className="text-4xl max-md:text-3xl font-semibold">
        Character Counter
      </h1>
      <textarea
        className="w-full max-w-150 placeholder:text-gray-600 h-fit min-h-40 font-medium rounded-lg border-2 p-4 text-lg "
        placeholder="Enter Text here to count words and characters"
        onChange={(e)=>{
            setText(e.target.value.trim())
            
        }}
      ></textarea>
      <div className="flex justify-between items-center max-w-150 text-2xl w-full">
        <p>{words} words</p>
        <p>{chars} characters</p>
      </div>
    </div>
  );
};

export default Page;


// react uses stateful values
// stateful values are create using the usestate hook
// stateful value are values that can change dynamically
//stateful value have a function associated with them, this function update the value of that state



//useEffect runs a function when the value of a state changes