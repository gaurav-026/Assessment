"use client"; 
import React, { useState } from 'react';
import { useApi } from './Apicontext';


function Slider1(props) {
  // State to track the value of the slider
//   const{isValue,setIsValue}=useApi();
  const{isNum,setIsNum}=useApi();
  
               

//   Event handler to update the slider value
//   const handleSliderChange = (event) => {
//     setSliderValue(event.target.value);
//   };
  
  const [sliderValue1, setSliderValue1]= useState([0]);

  // Example function to fetch data from API
//   const handleSliderChange = (event) => {
//     console.log(event.target.value)
//     setSliderValue1(event.target.value);
//     setIsNum(event.target.value);
    
//   };


  return (
    <div className="slider-container flex flex-col ">
      {/* Slider input */}
      <input 
        type="range" 
        min="0" 
        max={props.max}
        step={props.step}
        value={sliderValue1} 
        onChange={(event)=>{
    setSliderValue1(event.target.value);
    setIsNum(event.target.value);}} 
        className="slider  md:w-[400px] md:h-full w-[300px] h-[7.5px] cursor-pointer accent-[#4A508E] " 
      />
      {/* Display slider value */}
      <div className="slider-value text font-sans font-semibold w-[72px] h-[41px] absolute left-[125px] bottom-[2px] md:top-[400px] border-b-[2px] border-[#4A508E] rounded-[15px]  "><span className="absolute top-[10px] ml-6 ">{sliderValue1}</span></div>
    </div>
  );
}

export default Slider1;