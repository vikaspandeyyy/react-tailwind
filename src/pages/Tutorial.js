import React from "react";
import "../index.css";
import TutVideo from "../components/subcomponents/TutVideo";
import bgTuts from "../images/tutorial.png";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";


const Tutorial = () => {
  return (
    <div className="">
      <Helmet>
        <title>Tutorial-Gamernation</title>
        <meta name="decription"
          content="Watching videos to know how to play"
        />
      </Helmet>
      <img src={bgTuts} alt="" className="relative h-auto xxs:h-[250px]"/>
      <div className=""></div>
      <div className="text-white text-xl py-5 absolute top-4 left-1 xs:top-2 xs:text-base xxs:top-0 xxs:text-base">
        <Link to="/">Back</Link>
      </div> 
      <div className="tutorial-txt  text-white absolute top-52 left-32 md:left-12 md:top-32 sm:left-8 sm:top-20 xs:top-12 xs:left-12 xxs:top-12 xxs:left-10">
        <h2 className="font-bebas text-8xl md:text-6xl sm:text-5xl font-medium tracking-normal xs:text-5xl xxs:text-4xl">
          EXPLORE THE WORLD OF <br />
          FANTASY GAMING
        </h2>
        <h3 className="md:text-3xl md:pt-5 font-semibold text-3xl sm:pt-5 sm:text-xl sm:font-normal xs:text-xl xs:pt-4 xxs:text-lg xxs:font-light xxs:pt-3">with our community of gaming enthusiasts</h3>
      </div>
      <div className="bg-tutorialbg">
        <div className="text-searchcolor flex justify-center text-2xl font-normal pt-20">
          <form className="w-full max-w-sm ">
            <div className="flex items-center border-b border-white-500 py-2">
              <div className="text-searchcolor">
                <svg
                  xmlns="http://www.w3.org/1800/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="appearance-none bg-transparent text-2xl xxs:text-xl font-normal border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search video by keyword"
                aria-label="Full name"
              />
            </div>
          </form>
        </div>
        <div className="lg:container lg:mx-auto mt-5 py-12 px-4 xs:py-5">
          <h2 className="text-tutorialheading text-2xl font-normal px-10 underline sm:pl-5 xxs:pl-2 xxs:text-xl">
            Recent Videos
          </h2>
        <TutVideo />
        </div>
        <div className="lg:container lg:mx-auto px-4 mt-5 py-12">
          <h2 className="text-tutorialheading text-2xl font-normal px-10 sm:pl-5 xxs:pl-2 xxs:text-xl">
            Trending videos
          </h2>
          <TutVideo />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
