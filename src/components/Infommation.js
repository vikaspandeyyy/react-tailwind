import React from "react";
import Info from "./subcomponents/Info";
import Cup from "../images/cup.png";
import Sound from "../images/sound.png";
import Cam from "../images/cam.png";
import Share from "../images/share.png";

const Infommation = () => {
  return (
    <div className="xl:container xl:mx-auto px-8 lg:px-2 md:px-3 sm:px-3 py-12 xs:px-3 xxs:px-0">
      <div className="flex md:flex-col sm:flex-col xs:flex-col xxs:flex-col">
        <Info
          heading="Upto 3X assured Rewards"
          para="In publishing and graphic design,
         Lorem ipsum is a placeholder text."
          imgSrc={Cup}
        />
        <Info
          heading="Instant Withdrawals"
          para="In publishing and graphic design,
         Lorem ipsum is a placeholder text ."
          imgSrc={Cam}
        />
      </div>
      <div className="flex md:flex-col sm:flex-col xs:flex-col xxs:flex-col xxs:-ml-3">
        <Info
          heading="Round the clock Support"
          para="In publishing and graphic design,
         Lorem ipsum is a placeholder text."
          imgSrc={Sound}
        />
        <Info
          heading="Unlimited Referral Winnings"
          para="In publishing and graphic design,
         Lorem ipsum is a placeholder text."
          imgSrc={Share}
        />
      </div>
    </div>
  );
};

export default Infommation;
