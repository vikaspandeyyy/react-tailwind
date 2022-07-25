import React from "react";
import "../index.css";
import loginBg from "../images/login-bg.png";
import google from "../images/google-icon.png";
import fb from "../images/fb-icon.png";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div className="bg-logincolor flex md:py-12 sm:flex-col xs:flex-col xxs:flex-col">
    <Helmet>
      <title>Login-Gamernation</title>
      <meta name="decription"
        content="Please login or sign"
      />
    </Helmet>
      <div className="">
        <img
          src={loginBg}
          alt="" 
          className="h-screen w-screen sm:h-auto xs:h-auto xxs:h-auto"
        />
        <div className="absolute top-24  md:left-10 xs:top-12 left-12 xxs:top-10 xxs:left-5">
          <h2 className="text-white large-txt font-bebas text-7xl font-semibold md:text-6xl xs:text-5xl
           xxs:text-5xl xxs:font-normal">
            HI THERE ! <br />
            WHERE ARE YOU
          </h2>
          <h3 className="text-white text-xl font-pop absolute top-80 py-5  xs:top-52 xxs:top-44">
            Welcome to the world of <br /> fantasy gaming
          </h3>
        </div>
      </div>
      <div className="text-white px-12 w-10/12 sm:w-screen xs:px-0 xs:m-auto xxs:px-0 xxs:m-auto ">
        <div className="flex mt-12 mb-5 md:mt-0">
          <h3 className="text-registrationcolor text-lg font-semibold cursor-pointer">REGISTRATION</h3>
          <h3 className="Login px-12 text-lg font-semibold text-white cursor-pointer">
            LOGIN
          </h3>
        </div>
        <div className="form">
          <form action="">
            <div className="">
              <label
                className="block mb-2 font-normal text-base text-dullwhite"
                for=""
              >
                Email
              </label>
              <input
                className="Input_form text-formtxt rounded-md mb-7 inline-block w-full p-3 leading-6
                 text-lg shadow border-1 rounded"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="">
              <label className="block mb-2 text-dullwhite" for="">
                Password
              </label> 
              <input
                className="Input_form text-formtxt rounded-md mb-7 inline-block w-full p-3 leading-6
                 text-lg bg-white shadow border-1  rounded"
                type="password"
                placeholder="***************"
              />
            </div>
            <div className="mb-6 text-sm md:text-sm md:text-center xxs:font-thin xxs:text-sm">
              <div className="w-full lg:w-auto text-dullwhite">
                By Clicking Agree and Join you agree to the Gamenation user
                <span className="px-1 underline text-loginunderline">
                  <Link to="#">Agreement Privacy Policy</Link>
                </span>
                and
                <span className="px-1 underline text-loginunderline">
                  <Link to="#">Cookie Policy.</Link>
                </span>
              </div>
            </div>
            <button className="login_btn  rounded-lg inline-block w-full py-4 px-6 mb-6 text-center text-lg
             xxs:text-base leading-6 xxs:leading-4 text-white border-3 shadow xxs:rounded transition duration-200">
              AGREE AND JOIN
            </button>
            <p className="text-dullwhite text-sm text-center">
              or you can join via
            </p>
            <div className="flex items-center justify-center py-12 md:py-5">
              <Link to="/">
                <img src={google} alt="" />
              </Link>
              <Link to="/">
                <img src={fb} alt="" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
