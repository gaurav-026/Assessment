// apiContext.js
"use client"; 
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const ApiContext = createContext();

// Create a custom hook to use the ApiContext
export const useApi = () => useContext(ApiContext);

// Create a provider component
export const ApiProvider = ({ children }) => {
  // Define state or functions related to your API
  const [sliderValue, setSliderValue]= useState([]);
  const [isValue,setIsValue]=useState(null);
  const [isNum,setIsNum]=useState(null);

  // Example function to fetch data from API
  // const handleSliderChange = (event) => {
  //   setSliderValue(event.target.value);
  // };
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Provide the context value
  const contextValue = {
    sliderValue,
    setSliderValue,
    isNum,
    setIsNum,
    isValue,
    setIsValue,
    toggleSidebar,
    isOpen,
    setIsOpen,

  };

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};
