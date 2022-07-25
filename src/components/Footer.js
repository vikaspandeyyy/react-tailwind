import React from "react";
import footerLogo from "../images/footerlogo.png";
import "../index.css";
import android from "../images/android.png";
import apple from "../images/apple.png";

const Footer = () => {
  return (
    <div className="bg-purple">
      <footer className="text-center lg:text-left  text-white">
        <div className="mx-6 md:mx-auto py-10 text-center md:text-left">
          <div
            className="flex justify-between sm:flex-col xs:flex-col xxs:flex-col 
          p-12 sm:p-2 xs:p-1 mt-12 sm:mt-2 xs:mt-0 xxs:p-1 xxs:mt-0"
          >
            <div className="">
              <img
                src={footerLogo}
                alt="footer-logo"
                className="max-h-40 m-auto"
              />
              <div className="flex items-center justify-between sm:justify-evenly xs:justify-evenly xxs:justify-evenly mb-5 mt-5">
                <img src={android} alt="android" className="h-10" />
                <img src={apple} alt="android" className="h-12 mt-5 " />
              </div>
            </div>
            <div className="flex justify-evenly sm:flex-col xs:flex-col xxs:flex-col xs:justify-start sm:justify-start xxs:justify-start w-full xxs:mt-12">
              <div className="">
                <h6 className="mb-5 flex justify-center md:justify-start sm:justify-start xs:justify-start xxs:justify-start">
                  Company
                </h6>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Download App
                  </a>
                </p>
              </div>
              <div className="sm:py-12 xs:py-12 xxs:py-12">
                <h6 className=" mb-5 flex justify-center md:justify-start sm:justify-start xs:justify-start xxs:justify-start">
                  Games
                </h6>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Ludo
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Free Fire
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    BGMI
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Cricket
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Deathmatch
                  </a>
                </p>
              </div>
              <div className="">
                <h6 className="  mb-5 flex justify-center md:justify-start sm:justify-start xs:justify-start xxs:justify-start">
                  Legal
                </h6>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Support
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    T&C
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    FAQs
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Blogs
                  </a>
                </p>
                <p className="mb-1 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    Disclaimer
                  </a>
                </p>
              </div>
              <div className="sm:py-12 xs:pt-12 xxs:pt-12">
                <h6 className="  mb-5 flex justify-center md:justify-start sm:justify-start xs:justify-start xxs:justify-start">
                  Social
                </h6>
                <p className="mb-2 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    <i className="fa fa-facebook" style={{ fontSize: 28 }}></i>
                  </a>
                </p>
                <p className="mb-2 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    <i className="fa fa-twitter" style={{ fontSize: 28 }}></i>
                  </a>
                </p>
                <p className="mb-2 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    <i className="fa fa-instagram" style={{ fontSize: 28 }}></i>
                  </a>
                </p>
                <p className="mb-2 sm:flex xs:flex xxs:flex">
                  <a href="#!" className="text-white">
                    <i className="fa fa-youtube" style={{ fontSize: 28 }}></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
