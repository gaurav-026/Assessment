import React from 'react'
import work from "../assests/work.png"
import Image from 'next/image'
function How() {
  return (
    <div className='   lg:md:w-[1024] xl:w-full w-[375px] lg:md:h-[1575px] xl:h-[1975px] h-[1433px] bg-white flex  absolute md:top-[120px] top-[155px]  shadow-[rgba(236,233,233,0.1)] '>
        <div className='  w-[450px] h-[600px]  ml-[180px] '>
          <div className='  md:w-[450px] md:h-[240px] w-[348px] h-[350px] ml-[-170px] md:ml-[-40px] flex flex-col gap-[50px] md:mt-[60px] mt-[20px]  '>
            <div className='  md:w-[450px] md:h-[136px] w-[345px] h-[300px] gap-[28px] flex flex-col   '>
              <div className=' md:w-[450px] md:h-[64px] w-[343px] h-[54px] font-[Urbanist] font-[700] leading-[32.4px] text-black text-2xl md:text-3xl  md:tracking-wide '>GetSetYo handholds you at every step of the way</div>
              <div className='md:w-[450px] md:h-[44px] w-[330px] text-[14px] h-[34px] font-[Urbanist] font-[400] md:leading-[21.6px] leading-[16.8px] text-[#404040] text-lg tracking-wider'>You focus on helping your friends and family, we take care of everything else.</div>
            </div>
            <div className='  md:w-[144px] md:h-[54px] w-[126px] h-[43px] absolute top-[170px] md:top-[220px] rounded-[18px] bg-[rgba(74,80,142,1)] pt-[16px] pr-[24px] pb-[16px] pl-[24px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out' >
                <div className=' w-[96px] h-[22px]  font-[Urbanist]  font-[600] leading-[21.6px] text-white '>Get Started</div>
             </div> 
          </div>
        </div>
        <div className=' lg:md:w-[430px] xl:w-[630px] md:h-[1975px] w-[0px] h-[1198px]  flex gap-[50px] '>
          <div className='md:w-[60px] md:h-[1972px] w-[34px] h-[1180px] absolute  md:top-[1px] md:left-[570px] top-[250px] left-[6px]  '>
             <div className='md:w-[60.86px] md:h-[60px] w-[40px] h-[40px]  rounded-[8px] bg-[#4A508E]  '>
              <div className='w-[12.17px] h-[43px] absolute md:top-[8px] top-[1px] md:left-[0px] left-[-7px] md:text-3xl text-20px  z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '> 1</div>
             </div>
             <div className='w-[2px] bg-[#D6D6D6] md:h-[1910px] h-[1120px]  mx-auto -z-10 '></div>
             <div className='md:w-[60.86px] md:h-[60px] w-[40px] h-[40px] rounded-[8px] bg-[#4A508E] absolute md:top-[521px] top-[321px]'>
              <div className='w-[12.17px] h-[43px] absolute md:top-[8px] top-[1px] md:left-[0px] left-[-7px] md:text-3xl text-20px z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '> 2</div>
             </div>
             <div className='md:w-[60.86px] md:h-[60px] w-[40px] h-[40px] rounded-[8px] bg-[#4A508E] absolute  md:top-[1044px] top-[635px]'>
              <div className='w-[12.17px] h-[43px] absolute md:top-[8px] top-[1px] md:left-[0px] left-[-7px] md:text-3xl text-20px z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '>3</div>
             </div>
             <div className='md:w-[60.86px] md:h-[60px] w-[40px] h-[40px] rounded-[8px] bg-[#4A508E] absolute md:top-[1565px] top-[935px]'>
              <div className='w-[12.17px] h-[43px] absolute md:top-[8px] top-[1px] md:left-[0px] left-[-7px] md:text-3xl text-20px z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '> 4</div>
             </div>
          </div>
          <div className='w-[520px] h-[1975px]   gap-[120px] flex flex-col '>
             <div className='lg:md:w-[320px] xl:w-[520px] md:h-[403px] w-[283px] h-[250.83px] gap-[24px]  flex flex-col   absolute md:left-[680px] md:top-[5px] left-[68px] top-[248px]'>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[57px] w-[280px] h-[88px]  font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] md:text-xl text-[14px] tracking-wider   '>Share the holidays, stays and experiences with your friends and family</div>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[34px] w-[283px] h-[32px] xl:mt-[-9px] lg:md:mt-[30px] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden md:inline'/>
              <Image src={work} alt='work' width={226.4} height={133} className=' shadow-[rgba(0,0,0,0.1)] md:hidden inline mt-[15px]'/>
             </div>
             <div className='lg:md:w-[320px] xl:w-[520px] md:h-[403px] w-[283px] h-[256px]  gap-[24px]  flex flex-col   absolute md:left-[680px] md:top-[525px] left-[68px] top-[570px]'>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[57px] w-[282px] h-[32px]  font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] md:text-xl text-[14px] tracking-wider   '>Understand their requirements and budgets</div>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[34px] w-[283] h-[34] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden md:inline'/>
              <Image src={work} alt='work' width={226} height={133} className=' shadow-[rgba(0,0,0,0.1)] md:hidden inline '/>
             </div>
             <div className='lg:md:w-[320px] xl:w-[520px] md:h-[403px] w-[283px] h-[256px] gap-[24px]  flex flex-col  absolute md:left-[680px] md:top-[1050px] left-[68px] top-[885px]'>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[57px] w-[282px] h-[32px] font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] md:text-xl text-[14px] tracking-wider   '>Share the payment link, sit back and relax</div>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[34px] w-[283px] h-[34px] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide '>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden md:inline'/>
              <Image src={work} alt='work' width={226} height={133} className=' shadow-[rgba(0,0,0,0.1)] md:hidden inline mt-[15px]'/>
             </div>
             <div className='lg:md:w-[320px] xl:w-[520px] md:h-[403px] w-[283px] h-[242px] gap-[24px]  flex flex-col  absolute md:left-[680px] md:top-[1570px] left-[68px] top-[1185px]'>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[57px] w-[282px] h-[18px] font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] md:text-xl text-[14px] tracking-wider   '>Get Rewarded each time</div>
              <div className='lg:md:w-[320px] xl:w-[520px] md:h-[34px] w-[283px] h-[34px] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden md:inline'/>
              <Image src={work} alt='work' width={226} height={133} className=' shadow-[rgba(0,0,0,0.1)] md:hidden inline mt-[15px]'/>
             </div>
          </div>
          
        </div>
    </div>
  )
}

export default How