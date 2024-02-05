import React from "react";
import copyright from "../assets/copyright.svg";

const Footer = () => {
  return (
    <div className=" mt-20 md:mt-48 max-w-[800px] px-3 md:px-20 mx-auto" id="contact">
      <div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-1 hover:cursor-pointer">
            <h3 className="font-medium text-lg">Lorem</h3>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
          </div>
          <div className="flex flex-col gap-1 hover:cursor-pointer">
            <h3 className="font-medium text-lg">Lorem</h3>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>

            <h3 className="font-medium text-lg py-1">Lorem</h3>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
          </div>
          <div className="flex flex-col gap-1 hover:cursor-pointer">
            <h3 className="font-medium text-lg">Lorem</h3>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
          </div>
          <div className="flex flex-col gap-1 hover:cursor-pointer">
            <h3 className="font-medium text-lg">Lorem</h3>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm fon t-extralight">Lorem</span>

            <h3 className="font-medium text-lg py-1">Lorem</h3>
            <span className="text-sm font-extralight">Lorem</span>
            <span className="text-sm font-extralight">Lorem</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20 mb-2">
       <div className="flex items-center gap-2">
       <img src={copyright} alt="" />
        <span className="text-xs text-gray-200 font-light">2024</span>
       </div>
      </div>
    </div>
  );
};

export default Footer;
