import React from "react";
import PubgHero from "../images/pubg-hero.png";
import Pubg from "../images/pubg.png";
import COC from "../images/COC.png";
import freefire from "../images/FreeFire.png";
import up from "../images/up.png";
import down from "../images/down.png";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Responsivenav from "./Responsivenav";
import { Link } from 'react-router-dom'

const Header = () => {
  const ArrowLeft = (props) => (
    <button {...props} className="prev ml-[100px] mb-[5px]">
      <img src={up} alt="" />
    </button>
  );
  const ArrowRight = (props) => (
    <button {...props} className="next ml-[100px] mt-[5px]">
      <img src={down} alt="" />
    </button>
  );
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 1500,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="Header h-[625px] sm:h-[700px] xs:h-[700px] xxs:h-[700px]">
      <div className="background-overlay absolute h-[625px] sm:h-[700px] xs:h-[700px]
       xxs:h-[700px] w-full top-15 left-0"></div>
      <div className="flex justify-between">
        <div className="flex sm:flex-col">
          <div className="absolute right-2 md:mt-10 sm:mb-8 sm:left-32 xs:left-24 xxs:left-20 xxs:pl-2 ">
            <div className="mb-5 relative top-10 md:right-0 lg:top-32 sm:top-80 xs:top-80 xxs:top-80 right-20 lg:right-5">
              <h2
                className="BGMI-Tag xs:inline-block xxs:inline-block xs:mb-5 mr-36
             lg:mr-0 mt-44 md:mb-5 md:mr-0 md:text-8xl sm:text-5xl xs:text-5xl xxs:text-4xl lg:mt-28 leading-none
              font-bebas font-semibold text-white tracking-normal lg:w-auto "
              >
                BATTLEGROUND <br />
                MOBILE INDIA
              </h2>
              <div className="sm:mt-5 xxs:mt-5">
                <Link
                  to=""
                  className="bg-headerbutton mt-8 text-white rounded p-2.5 xxs:rounded-md xxs:py-2 xxs:px-4"
                >
                  EXPLORE MORE
                </Link>
              </div>
            </div>
            <div
              className="absolute xl:top-9 lg:top-9 right-0 md:w-96 md:pt-0 md:top-40 sm:top-96 sm:-mt-1
             sm:float-right xs:float-right sm:w-72 xs:relative xs:w-56 xs:top-28 xxs:float-right
              xxs:w-44 xxs:top-[505px]"
            >
              <img src={PubgHero} alt="" className="" />
            </div>
          </div>
          <div className="absolute top-52 left-40 lg:left-36 md:left-12 sm:top-20 sm:left-1/3 xs:top-20 xs:left-1/4 xxs:top-20 xxs:left-[22%]">
          <div className="flex ">
            <h2 className="font-pop md:text-xs text-dullwhite xxs:text-xs xxs:pl-5">
              SELECT YOUR GAME
            </h2>
            <span className="md:text-xs text-slickcolor pl-1 xxs:text-xs">
              Battleground..
            </span>
          </div>
          <div className="w-[250px] md:mr-3">
            <Slider {...settings}>
              <div className="">
                <img src={Pubg} alt="" className="h-[100px]" />
              </div>
              <div className="">
                <img src={COC} alt="" className="h-[100px]" />
              </div>
              <div className="">
                <img src={freefire} alt="" className="h-[100px]" />
              </div>
              <div className="">
                <img src={COC} alt="" className="h-[100px]" />
              </div>
            </Slider>
          </div>
          </div>
        </div>
      </div>
      <Responsivenav className="absolute" />
    </div>
  );
};

export default Header;
