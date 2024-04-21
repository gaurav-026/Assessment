"user client"
import React from 'react'
import location from "../assests/location.png"
import phone from "../assests/phone.png"
import Image from 'next/image'


 


function Footer() {
  return (
    <div className='  lg:md:w-full w-[105%] lg:md:h-[385px] h-[517px] absolute lg:md:top-[3147px]  top-[3100px] bg-[#4A508E] -z-20'>
        <div className=' lg:md:w-[840px] xl:w-[1080px]    absolute h-[229px] top-[40px] left-[180px] '>
          <div className='lg:md:w-[151px] w-[136px] lg:md:h-[116px] h-[114px] absolute  lg:md:left-[670px] xl:left-[928px] left-[-160px] lg:md:top-[30px] top-[280px] flex flex-col gap-[16px]'>
            <div className='lg:md:w-[83px] w-[79px] lg:md:h-[19px]  font-[Urbanist] font-[540] leading-[19.2px] text-[#F8F9FB] tracking-widest text-lg '>Contacts</div>
            <div className=' lg:md:w-[126px] lg:md:h-[20px] w-[126px] h-[20px] lg:md:font-[500] font-[300] flex  text-[14px] gap-[16px]'>
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
          <div className='md:w-[138px] w-[121px] lg:md:h-[229px] h-[217px] absolute left-[-160px] lg:md:left-[471px]  top-[30px] flex flex-col lg:md:gap-[16px] gap-[16px]'>
             <div className='w-[78px] h-[19px]  font-[Urbanist] font-[600] leading-[19.2px] text-[#F8F9FB] cursor-pointer'>Navigation</div>
             <div className='lg:md:w-[128px] w-[152px] h-[17px] lg:md::h-[19px] font-[Urbanist] lg:md:font-[500] font-[300] lg:md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB]  cursor-pointer text-[14px]'>About Createnary</div>
             <div className='lg:md:w-[79px] lg:md:h-[19px]  w-[90px] h-[17] font-[Urbanist] lg:md:font-[500] font-[300] lg:md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Contact Us</div>
             <div className='lg:md:w-[50px] lg:md:h-[19px]  w-[60px] h-[17px] font-[Urbanist] lg:md:font-[500] font-[300] lg:md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Refund</div>
             <div className='lg:md:w-[77px] lg:md:h-[19px]   w-[67px] h-[17px] font-[Urbanist] lg:md:font-[500] font-[300] lg:md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Newsletter</div>
             <div className='lg:md:w-[138px] lg:md:h-[19px]   w-[140px] h-[17px] font-[Urbanist] lg:md:font-[500] font-[300] lg:md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Terms & Conditions</div>
             <div className='lg:md:w-[138px] lg:md:h-[19px] w-[130px] h-[17px] font-[Urbanist] lg:md:font-[500] font-[300] lg:md:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Privacy & Policy</div>
          </div>
        </div>
        <div  className=' lg:md:w-[192px] w-[153px] lg:md:h-[29px] h-[31px] absolute lg:md:top-[142px] top-[10px] lg:md:left-[180px] left-[16px] text-white leading-[37.36px]'>
          <span className='monton text-2xl '>Createnary</span> 
        </div>
        <div className='w-full absolute h-[1px] top-[328px] border-[0.5px] border-[#F8F9FB] hidden lg:md:inline' ></div>
        <div className='lg:md:w-[130px] w-[150px] lg:md:h-[17px] h-[13px] absolute lg:md:top-[348px] top-[480px] lg:md:left-[659px] left-[132px] text-base   font-[Urbanist]  font-[500] leading-[16.8px] text-white tracking-wide'>© Createnary 2024</div>
    </div>
  )
}

export default Footer
// import React from 'react';
// import location from "../assests/location.png";
// import phone from "../assests/phone.png";
// import Image from 'next/image';

// function Footer() {
//   return (
//     <div className='w-full lg:md:w-[105%] lg:md:h-[385px] h-[517px] absolute lg:md:top-[3147px] top-[3100px] bg-[#4A508E] z-[-20]'>
//       <div className='lg:md:w-[1080px] absolute h-[229px] top-[40px] left-[180px]'>
//         <div className='lg:md:w-[151px] w-[136px] lg:md:h-[116px] h-[114px] absolute lg:md:left-[928px] left-[-160px] lg:md:top-[30px] top-[280px] flex flex-col gap-[16px]'>
//           <div className='lg:md:w-[83px] w-[79px] lg:md:h-[19px] font-[Urbanist] font-[540] leading-[19.2px] text-[#F8F9FB] tracking-widest text-lg'>Contacts</div>
//           <div className='lg:md:w-[126px] lg:md:h-[20px] w-[126px] h-[20px] lg:md:font-[500] font-[300] flex items-center text-[14px] gap-[16px]'>
//             <Image src={location} alt='location' width={22} height={17.5} />
//             <div className='font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB]'>Delhi, India</div>
//           </div>
//           <div className='w-[151px] h-[46px]'>
//             <div className='ml-[35px] space-y-2 text-[14px]'>
//               <div className='font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB]'>+91 98765 43210</div>
//               <div className='font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB]'>+91 99999 99999</div>
//             </div>
//             <div className='mt-[-26px]'>
//               <Image src={phone} alt='phone' width={20} height={20} />
//             </div>
//           </div>
//         </div>
//         <div className='md:w-[138px] w-[121px] lg:md:h-[229px] h-[217px] absolute left-[-160px] lg:md:left-[471px] top-[30px] flex flex-col gap-[16px]'>
//           <div className='font-[Urbanist] font-[600] leading-[19.2px] text-[#F8F9FB] cursor-pointer'>Navigation</div>
//           <div className='w-[152px] h-[17px] font-[Urbanist] font-[500] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>About Createnary</div>
//           <div className='w-[90px] h-[17px] font-[Urbanist] font-[500] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Contact Us</div>
//           <div className='w-[60px] h-[17px] font-[Urbanist] font-[500] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Refund</div>
//           <div className='w-[67px] h-[17px] font-[Urbanist] font-[500] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Newsletter</div>
//           <div className='w-[140px] h-[17px] font-[Urbanist] font-[500] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Terms & Conditions</div>
//           <div className='w-[130px] h-[17px] font-[Urbanist] font-[500] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Privacy & Policy</div>
//         </div>
//       </div>
//       <div className='lg:md:w-[192px] w-[153px] lg:md:h-[29px] h-[31px] absolute lg:md:top-[142px] top-[10px] lg:md:left-[180px] left-[16px] text-white leading-[37.36px]'>
//         <span className='monton text-2xl'>Createnary</span>
//       </div>
//       <div className='w-full absolute h-[1px] top-[328px] border-[0.5px] border-[#F8F9FB] hidden lg:md:inline'></div>
//       <div className='lg:md:w-[130px] w-[150px] lg:md:h-[17px] h-[13px] absolute lg:md:top-[348px] top-[480px] lg:md:left-[659px] left-[132px] text-base font-[Urbanist] font-[500] leading-[16.8px] text-white tracking-wide'>© Createnary 2024</div>
//     </div>
//   );
// }

// export default Footer;
