"use client"; 
import React, { useState } from 'react';
import { useApi } from './Apicontext';


function Slider(props) {
  // State to track the value of the slider
  const{isValue,setIsValue}=useApi();
  
               

  // Event handler to update the slider value
  // const handleSliderChange = (event) => {
  //   setSliderValue(event.target.value);
  // };
  
  const [sliderValue, setSliderValue]= useState([0]);

  // Example function to fetch data from API
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    setIsValue(event.target.value);
    
  };


  return (
    <div className="slider-container flex flex-col">
      {/* Slider input */}
      <input 
        type="range" 
        min="0" 
        max={props.max}
        step={props.step}
        value={sliderValue} 
        onChange={handleSliderChange} 
        className="slider  lg:md:w-[400px] md:h-full w-[300px] h-[7.5px] accent-[#4A508E] " 
      />
      {/* Display slider value */}
      <div className="slider-value  font-sans font-semibold  w-[72px] h-[41px] absolute top-[100px] left-[120.8px] bottom-[2px] lg:md:top-[225px] rounded-[15px] border-b-[2px] border-[#4A508E] ">
      <span  className=" absolute top-[10px] ml-6    ">{sliderValue}k </span></div>
    </div>
  );
}

export default Slider;
