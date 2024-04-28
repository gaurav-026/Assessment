"use client";
import React, { useState } from 'react';
import { useApi } from './Context';


function Slider1(props) {

  const { isNum, setIsNum } = useApi();
  const [sliderValue1, setSliderValue1] = useState([0]);

  return (
    <div className="slider-container flex flex-col ">
      <input
        type="range"
        min="0"
        max={props.max}
        step={props.step}
        value={sliderValue1}
        onChange={(event) => {
          setSliderValue1(event.target.value);
          setIsNum(event.target.value);
        }}
        className="slider  lg:md:w-[400px] lg:md:h-full w-[300px] h-[7.5px] cursor-pointer accent-[#4A508E] "
      />
      <div className="slider-value text font-sans font-semibold w-[72px] h-[41px] absolute left-[125px] bottom-[2px] lg:md:top-[400px] border-[1px] border-[#4A508E] rounded-[15px]  "><span className="absolute top-[10px] ml-6 ">{sliderValue1}</span></div>
    </div>
  );
}

export default Slider1;