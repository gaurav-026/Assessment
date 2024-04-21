"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider1 from "./Slider1";
import drop from "../assests/Drop.png";
import { useApi } from "./Apicontext";
import Slider from "./Slider";


function Calculator() {
  const { isValue, setIsValue } = useApi();
  const { isNum, setIsNum } = useApi();

  const [cal, setcal] = useState(0);
  let vi = 0;
  const Calculate = async () => {
    try {
      if (isNum == 0 || isValue == 0) {
        vi = 0;
      } else if (isNum > 0 && isValue > 0) {
        vi = isValue * 100 + isNum * 1000 - 1000;
      }

      return vi;
    } catch (error) {
      console.error(error);
    }
  };
  const submit = async () => {
    // const setdata= async()=>{
    const data = await Calculate();
    setcal(data);
    console.log("data", data);
    // }
  };

  // useEffect(()=>{

  // },[Calculate]);

  return (
    <div className=" w-full  h-full    bg-[#8f90a0]  ">
      <div className="md:w-[866px]  w-[324px] h-[729px] md:h-[651px] absolute md:top-[1627px] top-[1350px] left-[30px]  md:left-[290px]  md:-z-20 ">
        <div className="md:w-[866px] md:h-[559px] absolute  top-[91px] gap-[50px] flex flex-col ">
          <div className=" md:w-[866px] md:h-[455px] gap-[120px]  flex ">
            <div className="md:w-[572px] md:h-[455px]  ">
              <div className="md:w-[349.09px] w-[267px] md:mt-0 mt-[-50px]  md:h-[22px] h-[19px]  font-[Urbanist]  font-[500] md:leading-[21.6px] leading-[19.24px] text-[#11151D] text-xl">
                What kind of influencer are you?
              </div>
              <div className="md:w-[562px] w-[324.2px] md:h-[43px] h-[39.92px] absolute md:top-[49px] top-[20px] rounded-[8.87px] border-[1.11px] border-[#969699] flex justify-around items-center">
                <div className="w-[467.95px] h-[19px] opacity-[40%] font-[Urbanist]  font-[500] leading-[19.2px] text-black   ">
                  Select influencer type?
                </div>
                <Image src={drop} alt="drop" width={11.09} height={5.54} />
              </div>

              <div className="md:w-[524.14px] w-[313.88px] md:h-[40px] h-[300px] absolute md:top-[200px] md:mt-[-140px] top-[90px] ">
                <div className="md:w-[349.09px] w-[271px] md:h-[22px] h-[19px] font-[Urbanist]  font-[500] md:leading-[21.6px] leading-[19.2px] text-[#11151D] md:text-xl md:mt-[116px]">
                  How many followers do you have?
                </div>

                <div className="md:mt-8 mt-5">
                  <Slider max={1000} step={10} />
                </div>
                <div className="md:w-[349.09px] w-[241px] md:h-[22px] h-[19] font-[Urbanist]  font-[500] md:leading-[21.6px] leading-[19.24px] text-[#11151D] md:text-xl mt-[116px]">
                  How many product do you have?
                </div>
                <div className=" md:mt-8 mt-5">
                  <Slider1 max={100} step={1} />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col absolute left-[20px] md:left-[690px] top-[490.2px] md:top-[1.2px] md:mt-[130px] md:gap-[10px] gap-[40px] md:w-[174px] md:h-[283px] w-[295px] h-[72px] ">
              {" "}
              <div className=" md:w-[174px] md:h-[283px] w-[128.59px] h-[72]  gap-[81px] flex flex-col md:ml-[50px]  md:mt-[110px] font-serif  ">
                <spam className="md:mb-[-70px] md:mx-auto md:ml-[-50px] font-bold w-[148.59px] h-[72px] ml-[5px]">
                  {" "}
                  Monthly earning
                </spam>
                <div className="font-sans font-extrabold text-[#464d9c]  absolute md:top-[180px] md:left-[50px] top-[40px] left-[70px]">
                  ₹{cal}
                </div>
              </div>
              <div className=" md:w-[174px] w-[140px] md:h-[283px] h-[72px] gap-[81px] flex flex-col md:ml-[50px]  md:mt-[65px] font-serif ">
                <spam className="mb-[-70px] md:mx-auto md:ml-[-50px]  font-bold ">
                  Yearly earning
                </spam>
                <div className="text-[#464d9c]  font-sans font-extrabold  absolute md:top-[300px] md:left-[50px] top-[40px] left-[210px]">
                  ₹{cal * 12}
                </div>
              </div>
            </div>
            
          </div>

          <div className=" md:w-[125px] w-[108px] md:h-[54px] h-[43px] md:rounded-[18px] rounded-[12px] bg-[#4A508E] md:pt-[16px] pt-[12px] md:pr-[24px] pr-[20px] md:pb-[12px] pb-[16px] md:pl-[24px] pl-[20px] absolute top-[420px] left-[105px] md:top-[551px] md:left-[358px] md:mx-auto cursor-pointer mb-[20px] hover:scale-[1.2] transition duration-[0.7s] ease-in-out ">
            <div
              className="w-[77px] h-[22px] text-lg  font-[Urbanist]  font-[600] leading-[21.6px] text-[#F8F9FB] cursor-pointer  "
              onClick={submit}
            >
              Calculate
            </div>
          </div>
        </div>
        <div className="  md:w-[600px] w-[300px]  md:h-[32px] h-[19px] md:text-3xl md:mx-auto text-lg  font-[Urbanist]  font-[700] md:leading-[32.4px] leading-[19.2px] text-black md:text-center md:tracking-widest ">
          ESTIMATE EARNING POTENTIAL
        </div>
      </div>
     
    </div>
  );
}

export default Calculator;
