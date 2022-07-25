import React from "react";

const Info = (props) => {
  return (
    <div className="flex sm:flex-col xs:flex-col xxs:flex-col items-center px-2 sm:px-0 xs:px-0 xxs:px-0 py-12 sm:my-22">
      <img src={props.imgSrc} alt="" className="h-28 sm:h-56 xs:h-44" />
      <div className="text-info sm:text-center xs:text-center xxs:text-center px-2 xs:px-0 xs:py-8 xxs:py-2 sm:mt-5">
        <h2 className="text-3xl xxs:text-2xl xxs:font-bold text-white xs:mx-auto tracking-tighter">
          {props.heading}
        </h2>
        <p className="py-4 text-dullwhite">{props.para}</p>
      </div>
    </div>
  );
};

export default Info;
