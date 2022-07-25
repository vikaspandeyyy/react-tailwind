import React from "react";
import roundcir from "../images/features.png";
import worrior5 from "../images/feature-worrior.png";
import "../index.css";

const Features = () => {
  return (
    <div className="mt-44 xs:mt-72 xxs:mt-72">
      <div className="flex justify-between items-center relative sm:justify-start
       xs:justify-start xxs:justify-start xxs:mt-12">
        <img src={roundcir} alt="" className="w-1/3 sm:mb-48 xs:mb-48 xxs:mb-40"/>
        <img src={worrior5} alt="" className="w-2/5 sm:w-full sm:mt-12 sm:pl-12 
        sm:-ml-64 xs:w-4/5 xxs:w-full xs:-ml-44 xxs:-ml-44" />
      </div>
        {/* <div className="underline py-1 bg-white w-[400px] float-right"></div> */}
      <div className="text-white absolute left-48 lg:left-44 md:left-44 -mt-12 
      sm:left-0 sm:pl-5 xs:left-5 xxs:left-5">
        <div className="-mt-[250px] sm:-mt-[650px] xs:-mt-[600px] xxs:-mt-[500px]">
          <h2 className="text-7xl font-semibold sm:text-4xl lg:text-6xl md:text-6xl
           xs:text-5xl xxs:text-4xl lg:w-4/5 md:w-4/5">
            Target your win <br /> and earn everyday.
          </h2>
          <p className="text-base pt-5 sm:text-xl sm:font-normal text-registrationcolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupte fug
            <br /> velit. Totam, suscipit fuga?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
