import React from "react";
import rightCir from "../images/right-circle.png";
import "../index.css";
import gamePerson from "../images/game-person.png";

const Gameaction = () => {
  return (
    <div className="mt-16 mb-12 sm:mt-8 sm:py-0 xxs:mt-5 ">
      <div className="float-right pt-20 sm:pt-[650px] relative md:top-12 xs:pt-[750px] xxs:top-[750px]">
        <img src={rightCir} alt="" className="max-h-96 sm:h-52 md:h-52 xs:h-52 xxs:h-44" />
      </div>
      <div className="flex sm:flex-col xs:flex-col xxs:flex-col">
        <div className="w-3/4 p-28 lg:pl-2 lg:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-screen
         lg:px-5 lg:py-5 md:p-3  sm:p-3 xs:p-3 xxs:p-2">
          <h3 className="text-white text-2xl md:text-2xl sm:text-5xl xs:text-4xl xxs:text-3xl">Who we are?</h3>
          <h2 className="text-7xl tracking-tighter md:w-5/6 md:tracking-tighter font-semibold py-5
           text-white sm:text-4xl xs:text-4xl xxs:text-4xl">
            let your soul feed on gaming.
          </h2>
          <p className="text-xl md:w-5/6 font-normal xs:font-light py-5 text-dullwhite">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            molestiae odit necessitatibus commodi ad nisi quia eveniet ratione
            est ipsam voluptas deserunt illum, sapiente, et magni, ducimus nihil
            reiciendis quo repudiandae odio recusandae! Earum animi voluptates
            repellendus eaque officia, enim aliquid id libero, odit ipsum
            explicabo eius qui! Ab eos, repellendus aperiam fugiat qui quaerat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="sm:ml-1 sm:-mr-5 xs:-mr-16 xxs:-mr-14 sm:mb-12 md:mt-16">
          <img
            src={gamePerson}
            alt=""
            className="w-1/3 lg:w-1/3 md:w-2/5 h-auto absolute right-28 lg:right-3 md:right-2 sm:w-full
             sm:relative sm:left-1 xs:left-2 xxs:left-2 xs:w-full xxs:w-full xs:relative xxs:relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Gameaction;
