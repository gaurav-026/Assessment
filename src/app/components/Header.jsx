import React from 'react'
import frame from "../assests/Frame.png"
import Image from "next/image"
import { IoIosInformationCircleOutline } from "react-icons/io";
import vector from "../assests/Vector.png"
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link'
function Header() {
  return (
    <div className=' lg:md:fixed '>
      <div className=" lg:md:w-[824px] xl:w-[1024px] lg:md:h-[90px] w-[300px] h-[120px] absolute z-10 top-[25px] left-11 lg:md:left-[100px]  xl:left-[160px] rounded-[35px]  gap-[50px] bg-[rgba(195,195,195,0.5)]  flex justify-center items-center  " >

        <div className=' lg:md:w-[434px] lg:md:h-[50px] rounded-[25px] '>
          <div className='lg:md:hidden inline w-[20px] h-[20px] absolute top-[21px] left-[250px] shadow-sm cursor-pointer'><CiMenuBurger /></div>
          <div className=' lg:md:w-[220px] xl:w-[290px] lg:md:h-[50px] w-[260px] h-[40px] absolute top-[60px] left-[20px] lg:md:top-[19px] lg:md:left-[155px] xl:left-[189px] rounded-[25px] bg-[#F8F9FB] '>
            <div className='  flex '>
              <Image src={frame} alt="frame" className='  w-[20px] h-[20px]  absolute lg:md:top-[15px] top-[10px] left-[16px] ' />
            </div>
            <div className=' lg:md:w-[116px] w-[103pxx] lg:text-lg lg:md:h-[19px] h-[17px] absolute top-[11px] left-[46px] lg:md:top-[12px] xl:top-[12px] lg:md:left-[38px] xl:left-[46px] font-[Urbanist] font-[500]  leading-[16.8px] lg:md:leading-[19.2px]    '> <span className=' text-slate-950   '> Search Creators</span></div>
          </div>
          <Link href="/"> <div className=' lg:md:w-[114px] w-[94px]  lg:md:h-[26px] h-[22px] text-2xl absolute lg:md:top-[31px] top-[20px] left-[20px] lg:md:left-[30.25px] xl:left-[45.25px] font-[Urbanist] font-[700]  leading-[26.4px] text-black  '>Createnary</div></Link>
        </div>
        <div className='w-[449.5px] h-[42px] rounded-[15px] hidden lg:md:inline'>
          <div className='w-[123px] h-[42px] absolute top-[24px] lg:md:left-[655.75px] xl:left-[855.75px] rounded-[15px] border border-black flex justify-center items-center gap-[10px]' style={{ padding: "10px,25px,10px,25px" }}>

            <div className=' w-[43px]  h-[22px] text-xl  font-[Urbanist] font-[520]  leading-[21.6px] text-center text-black cursor-pointer '>Login</div>
            <div><Image src={vector} alt='vector' className=' w-[13.75px] h-[7.5px] ' /></div>

          </div>
          <div className='w-[300px] h-[22px] absolute  top-[34px] lg:md:left-[400px] xl:left-[529px] gap-[30px] flex'>
            <div className=' w-[66px] h-[22px] '>
              <div className='w-[36px]  h-[22px]  absolute  left-[22px]  font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer '>Cart</div>
              <div className='w-[20px] h-[20px] absolute top-[1.8px] cursor-pointer '><FiShoppingCart /></div>
            </div>
            <div className=' w-[80px] h-[22px] '>
              <div className='w-[20px] h-[20px] absolute top-[1.88px] lg:md:left-[66px] xl:left-[96px] cursor-pointer '><IoIosInformationCircleOutline /></div>
              <div className='w-[49px]  h-[22px]  absolute  lg:md:left-[85px] xl:left-[115px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer '>About</div>
            </div>
            <div className='w-[94px] h-[22px]'>
              <div className='w-[20px] h-[20px] absolute lg:md:left-[150px] xl:left-[206px] top-[1.88px] cursor-pointer '><TfiHeadphoneAlt /></div>
              <div className='w-[64px]  h-[22px]  absolute  lg:md:left-[170px] xl:left-[236px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer'>Contact</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
