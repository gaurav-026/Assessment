"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import Previous from "../assests/previous.png"
import Next from "../assests/next.png"
import Image from 'next/image'

const Sidenavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='md:fixed mb-[30px]' >
     <button onClick={toggleSidebar} className="text-white p-2 bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-[13px] h-[30px] w-[30px] mt-[25rem]">
        {isOpen ?  <Image src={Previous} alt='previous' className='w-full  ' /> :  <Image src={Next} alt='previous' className='w-full  ' />} 
      </button>
    <div className={` text-white h-full w-64 flex flex-col justify-between rounded-[13px] transparent transition duration-[0.5s] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <ul>
          <li className="mb-2">
            <Link href="/">
              <div className="text-white hover:text-gray-300 bg-gray-500 w-[200px] rounded-[13px] "><div className=' ml-2'>Home</div></div>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/about">
              <div className="text-white hover:text-gray-300 bg-gray-500 w-[180px]  rounded-[13px]"><div className=' ml-2'>About</div></div>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/contact">
              <div className="text-white hover:text-gray-300 bg-gray-500 w-[160px] rounded-[13px] "><div className=' ml-2'>Contact</div></div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
      </div>
  );
};

export default Sidenavbar;
