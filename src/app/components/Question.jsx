"use client"
import { HiOutlinePlus,HiOutlineMinus } from "react-icons/hi";
function Question() {
  return (
    <div className=' md:w-[730px] w-[328px] md:h-[715px] h-[815px] absolute md:top-[2394px] top-[2150px] md:left-[355px] left-[16px]  md:-z-20 '>
        <div className=' md:w-[630px] w-[327px] md:h-[92px] h-[69px] md:ml-[56px] ml-[17px] gap-[16px] flex flex-col'>
            <div className='md:w-[460px] w-[270px] md:h-[32px] h-[19px]  font-[Urbanist] md:text-2xl md:mx-auto  font-[700] md:leading-[32.4px] leading-[19.2px] text-black md:tracking-widest'>FREQUENTLY ASKED QUESTIONS</div>
            <div className='md:w-[630px] w-[275px] md:h-[44px] h-[34px] font-[Urbanist] md:text-base  font-[500] md:leading-[21.6px] leading-[16.8px] md:text-center text-black md:tracking-widest'>Quick answers to questions you may have. Can&apos;t find what you&apos;re looking for?<span className=' hidden md:inline bg-gradient-to-r from-[rgba(74,80,142,1)] to-[rgba(103,74,142,1)] inline-block text-transparent bg-clip-text font-[550]' >Check out our full documentation</span></div>
        </div>
        <div className='  md:w-[730px] w-[328px]  md:h-[563px] h-[815px] mt-[60px] gap-[16px] flex flex-col'>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>How much does it cost to set up a store?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px]  rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>What kind of digital products can I sell?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           
           <div className='md:w-[730px] md:h-[115px] w-[327] h-[184px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[14px] bg-[#D6D6D6] flex flex-col'>
              <div className='md:w-[690px] w-[295px] md:h-[20px] h-[34px] gap-[20px] flex'>
                    <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>Do I need technical skills to use the platform?</div>
                    <div className='w-[20px] h-[20px]'><HiOutlineMinus /></div>
              </div>
              <div className=' md:w-[690px] w-[295px] h-[1px]  bg-[#11151D] opacity-[8%]'></div>
              <div className='md:w-[690px] w-[295]  md:h-[38px] h-[85px] font-[Urbanist]   font-[500] leading-[19.2px]  text-black'>No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It&apos;s as simple as a few clicks to get started!</div>
           </div>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>Is there a limit to the number of products I can list?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>How do I receive payments for my sales?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>Can I sell internationally on this marketplace?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>What support and resources are available for sellers?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           <div className='md:w-[730px] w-[328px] md:h-[48px] h-[62px] rounded-[16px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[20px] bg-[#D6D6D6] flex'>
              <div className='w-[650px] h-[19px] font-[Urbanist]   font-[600] leading-[19.2px]  text-black'>Is there a review process for uploaded products?</div>
              <div className='w-[20px] h-[20px]'><HiOutlinePlus /></div>
           </div>
           
        </div>
    </div>
  )
}

export default Question