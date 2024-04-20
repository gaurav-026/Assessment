import How from '@/app/components/How'

import React from 'react'
import frame from "../assests/Frame.png"
import Image from "next/image"
import { IoIosInformationCircleOutline } from "react-icons/io";
import vector from "../assests/Vector.png"
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";

import location from "../assests/location.png"
import phone from "../assests/phone.png"
import Link from 'next/link'


function page() {
  return (
    <div >
        <div className=" lg:md:w-[1024px] lg:md:h-[90px] w-[300px] h-[120px] absolute z-10 top-[25px] left-8 lg:md:left-[160px] rounded-[35px]  gap-[50px] bg-[rgba(195,195,195,0.5)]  flex justify-center items-center  " >
           
           <div className=' lg:md:w-[434px] lg:md:h-[50px] rounded-[25px] '>
             <div className='lg:md:hidden inline w-[20px] h-[20px] absolute top-[21px] left-[250px] shadow-sm cursor-pointer'><CiMenuBurger /></div>
             <div className=' lg:md:w-[290px] lg:md:h-[50px] w-[260px] h-[40px] absolute top-[60px] left-[20px] lg:md:top-[19px] lg:md:left-[189px] rounded-[25px] bg-[#F8F9FB] '>
                <div className='  flex '>
                  <Image src={frame}  alt="frame" className='  w-[20px] h-[20px]  absolute lg:md:top-[15px] top-[10px] left-[16px] '/>
                </div>
                <div className=' lg:md:w-[116px] w-[103pxx] lg:text-lg lg:md:h-[19px] h-[17px] absolute top-[11px] left-[46px] lg:md:top-[16px] lg:md:left-[46px] font-[Urbanist] font-[500]  leading-[16.8px] lg:md:leading-[19.2px]    '> <span className=' text-slate-950   '> Search Creators</span></div>
             </div>
            <Link href="/"> <div className=' lg:md:w-[114px] w-[94px]  lg:md:h-[26px] h-[22px] text-2xl absolute lg:md:top-[31px] top-[20px] left-[20px] lg:md:left-[45.25px] font-[Urbanist] font-[700]  leading-[26.4px] text-black  '>Createnary</div></Link>
           </div>
           <div className='w-[449.5px] h-[42px] rounded-[15px] hidden lg:md:inline'>
             <div className='w-[123px] h-[42px] absolute top-[24px] left-[855.75px] rounded-[15px] border border-black flex justify-center items-center gap-[10px] hover:scale-[1.1] transition duration-[0.7s] ease-in-out' style={{padding:"10px,25px,10px,25px"}}>
               
                 <div className=' w-[43px]  h-[22px] text-xl  font-[Urbanist] font-[520]  leading-[21.6px] text-center text-black cursor-pointer '>Login</div>
                 <div><Image src={vector} alt='vector' className=' w-[13.75px] h-[7.5px] '/></div>
               
             </div>
             <div className='w-[300px] h-[22px] absolute  top-[34px] left-[529px] gap-[30px] flex'>
                  <div className=' w-[66px] h-[22px] '>
                     <div className='w-[36px]  h-[22px]  absolute  left-[22px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>Cart</div>
                     <div className='w-[20px] h-[20px] absolute top-[1.8px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'><FiShoppingCart /></div>
                  </div>
                  <div className=' w-[80px] h-[22px] '>
                     <div className='w-[20px] h-[20px] absolute top-[1.88px] left-[96px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'><IoIosInformationCircleOutline /></div>
                     <div className='w-[49px]  h-[22px]  absolute  left-[115px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>About</div>
                  </div>
                  <div className='w-[94px] h-[22px]'>
                     <div className='w-[20px] h-[20px] absolute left-[206px] top-[1.88px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'><TfiHeadphoneAlt /></div>
                     <div className='w-[64px]  h-[22px]  absolute  left-[236px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>Contact</div>
                  </div>
             </div>
           </div>
        
     </div>
        <How/>
        <div className='md:w-full w-[375px] md:h-[385px] h-[517px] absolute md:top-[2107px] top-[1580px] bg-[#4A508E] -z-20'>
        <div className='md:w-[1080px]   absolute h-[229px] top-[40px] left-[180px] '>
          <div className='md:w-[151px] w-[136px] md:h-[116px] h-[114px] absolute  md:left-[928px] left-[-160px] md:top-[30px] top-[280px] flex flex-col gap-[16px]'>
            <div className='md:w-[83px] w-[79px] md:h-[19px]  font-[Urbanist] font-[540] leading-[19.2px] text-[#F8F9FB] tracking-widest text-lg '>Contacts</div>
            <div className=' md:w-[126px] md:h-[20px] w-[126px] h-[20px] md:font-[500] font-[300] flex  text-[14px] gap-[16px]'>
                <Image src={location} alt='location' width={22} height={17.5} />
               <div className='w-[91px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>Delhi, India</div>
            </div>
            <div className='   w-[151px] h-[46px]  '>
               <div className='w-[116px] h-[46px]  ml-[35px] space-y-2 text-[14px]'>
                  <div className='w-[116px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>+91 98765 43210</div>
                  <div className='w-[116px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>+91 99999 99999</div>
               </div>
                <div className='mt-[-26px]'>
                  <Image src={phone} alt='phone' width={20} height={20}/>
                </div>
            </div>
          </div>
          <div className='md:w-[138px] w-[121px] md:h-[229px] h-[217px] absolute left-[-160px] md:left-[471px]  top-[30px] flex flex-col md:gap-[16px] gap-[16px]'>
             <div className='w-[78px] h-[19px]  font-[Urbanist] font-[600] leading-[19.2px] text-[#F8F9FB] cursor-pointer'>Navigation</div>
             <div className='md:w-[128px] w-[152px] h-[17px] md:h-[19px] font-[Urbanist] md:font-[500] font-[300] md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB]  cursor-pointer text-[14px]'>About Createnary</div>
             <div className='md:w-[79px] md:h-[19px]  w-[90px] h-[17] font-[Urbanist] md:font-[500] font-[300] md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Contact Us</div>
             <div className='md:w-[50px] md:h-[19px]  w-[60px] h-[17px] font-[Urbanist] md:font-[500] font-[300] md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Refund</div>
             <div className='md:w-[77px] md:h-[19px]   w-[67px] h-[17px] font-[Urbanist] md:font-[500] font-[300] md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Newsletter</div>
             <div className='md:w-[138px] md:h-[19px]   w-[140px] h-[17px] font-[Urbanist] md:font-[500] font-[300] md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Terms & Conditions</div>
             <div className='md:w-[138px] md:h-[19px] w-[130px] h-[17px] font-[Urbanist] md:font-[500] font-[300] md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Privacy & Policy</div>
          </div>
        </div>
        <div  className=' md:w-[192px] w-[153px] md:h-[29px] h-[31px] absolute md:top-[142px] top-[20px] md:left-[180px] left-[16px] text-white leading-[37.36px]'>
          <span className='monton text-2xl '>Createnary</span> 
        </div>
        <div className='w-full absolute h-[1px] top-[328px] border-[0.5px] border-[#F8F9FB] hidden md:inline' ></div>
        <div className='md:w-[130px] w-[150px] md:h-[17px] h-[13px] absolute md:top-[348px] top-[480px] md:left-[659px] left-[132px] text-base   font-[Urbanist]  font-[500] leading-[16.8px] text-white tracking-wide'>© Createnary 2024</div>
    </div>
      
    </div>
  )
}

export default page