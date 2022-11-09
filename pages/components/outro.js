import Head from "next/head";
import React from "react";
import ContactUs from "./contactUs";
import Image from "next/image";
import Group8 from "../components/img/Group8.png";
import Rectangle47 from "../components/img/Rectangle47.png";
import Rectangle48 from "../components/img/Rectangle48.png";

const Outro = () => {
  return (
    <>
      <div>
        <div className="bg-orange-500 rounded-full font-normal mx-8 md:mx-24 xl:mx-[272px] ">
          <div className="flex justify-between ">
            <Image className="w-16 h-auto" src={Group8} alt="" />
            <div className="flex h-[21px] gap-x-[5.41px]">
              <Image src={Rectangle47} alt="" />
              <Image src={Rectangle48} alt="" />
            </div>
          </div>
          <h1 className="text-xs md:text-lg lg:text-2xl xl:text-4xl text-white text-center pb-2 font-normal">
            Have you decide to <br />
            <span className="text-blue-300">Develop your Application </span>? If
            is already <br /> Lets Start by Contacting Us.
          </h1>
          <div className="flex justify-between">
            <div className="flex h-[21px] mt-6 gap-x-[5.41px]">
              <Image src={Rectangle48} alt="" />
              <Image src={Rectangle47} alt="" />
            </div>
            <div>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outro;
