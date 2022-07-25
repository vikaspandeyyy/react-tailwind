import React from "react";
import "../index.css";
import payCircle from "../images/payment-circle.png";
import paytm from "../images/paytm.png";
import Bhim from "../images/bhim.png";
import rajzorpay from "../images/razor.png";
import payU from "../images/payu.png";
import warrior from "../images/warrior02.png";

const Payment = () => {
  return (
    <div className="mt-12">
      <div className="">
        <img
          src={payCircle}
          alt=""
          className="w-96 float-right lg:w-72 md:w-64 sm:w-52 xs:w-40 xxs:w-32"
        />
      </div>
      <div className="flex justify-between">
        <div className="px-5 sm:px-0 xs:px-2 xxs:px-2">
          <h2
            className="text-white text-7xl font-bold pt-20 pl-20 pb-10 lg:pl-1 lg:pt-1 lg:pb-32 lg:text-6xl
           md:text-6xl md:pl-0 md:font-extrabold md:pt-24 md:pb-12 sm:text-4xl xs:text-4xl xxs:text-4xl sm:pt-5
            sm:pl-2 xxs:pl-0 xxs:pt-12 xs:pl-0 xs:pt-14"
          >
            OUR <br />
            TRUSTED <br />
            PARTNERS
          </h2>
        </div>
      </div>
      <div className="flex justify-evenly sm:flex-col xs:flex-col xxs:flex-col sm:mx-12 xs:mx-12 xxs:mx-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 
        sm:gap-20 xs:gap-12 xxs:gap-14 sm:mx-auto xs:mx-auto xxs:mx-auto">
          <img src={paytm} alt="" className="h-28 md:h-24 sm:h-auto xs:h-auto" />
          <img src={rajzorpay} alt="" className="h-20 md:h-16 sm:h-auto xs:h-auto" />
          <img src={Bhim} alt="" className="h-28 md:h-24 sm:h-auto xs:h-auto" />
          <img src={payU} alt="" className="h-20 md:h-16 sm:h-auto xs:h-auto" />
        </div>
        <div className="-mt-[250px] md:-mt-[200px] sm:mt-10 xs:mt-5 xxs:mt-5 sm:mx-auto xs:mx-auto xxs:mx-auto">
          <img
            src={warrior}
            alt=""
            className="h-[550px] md:h-[450px] sm:h-auto xs:h-auto xxs:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
