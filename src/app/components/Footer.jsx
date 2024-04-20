"user client"
import React from 'react'
import location from "../assests/location.png"
import phone from "../assests/phone.png"
import Image from 'next/image'


 


function Footer() {
  return (
    <div className='md:w-full w-[375px] md:h-[385px] h-[517px] absolute md:top-[3147px] top-[3100px] bg-[#4A508E] -z-20'>
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
        <div  className=' md:w-[192px] w-[153px] md:h-[29px] h-[31px] absolute md:top-[142px] top-[10px] md:left-[180px] left-[16px] text-white leading-[37.36px]'>
          <span className='monton text-2xl '>Createnary</span> 
        </div>
        <div className='w-full absolute h-[1px] top-[328px] border-[0.5px] border-[#F8F9FB] hidden md:inline' ></div>
        <div className='md:w-[130px] w-[150px] md:h-[17px] h-[13px] absolute md:top-[348px] top-[480px] md:left-[659px] left-[132px] text-base   font-[Urbanist]  font-[500] leading-[16.8px] text-white tracking-wide'>© Createnary 2024</div>
    </div>
  )
}

export default Footer