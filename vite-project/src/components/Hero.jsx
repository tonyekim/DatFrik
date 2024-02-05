import React from "react";
import primary from "../assets/Primary.svg";
import primarysvg from "../assets/Primarysvg.svg";

const Hero = () => {
  return (
    <div className="text-white max-w-lg mx-auto relative h-52 mt-40 md:mt-0 md:h-screen  flex flex-col items-center justify-center" id="/">
      <div className="font-bold text-xl md:text-4xl ">
        <h1 className="text-center">
          It doesn’t matter what <span className="text-[#FFFF00]">JS</span>
        </h1>
        <h1 className=" whitespace-nowrap">
          <span className="text-[#FFFF00] text-nowrap">JS Framework</span> you
          work with.
        </h1>
      </div>

      <div className="mt-2">
        <h1 className="text-sm text-gray-200">
          Our boilerplates works with it{" "}
          <span className="text-[#91D2F7] hover:cursor-pointer">
            out-of-the-box.
          </span>{" "}
        </h1>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="p-2 cursor-pointer hover:opacity-40 font-roboto px-4 w-fit flex items-center gap-2 rounded-md text-center text-black font-normal bg-[#FFFF00] ">
          <button className="w-full text-sm">Get started</button>
          <img src={primary} alt="" />
        </div>
        <div className="p-2 hover:opacity-40 cursor-pointer font-roboto text-[#FFFF00] px-4 w-fit flex items-center gap-2 rounded-md text-center border border-[#FFFF00] font-normal">
          <button className="w-full text-sm ">Get started</button>
          <img src={primarysvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
