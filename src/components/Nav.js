import React from "react";
import Vector from '../images/Vector.png'
import logo from "../images/logo.png";
import android from '../images/android.png'
import apple from '../images/apple.png'
import '../index.css'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="bg-purple flex items-center justify-between py-1">
      <div className="px-2 flex items-center justify-between md:pl-0 sm:pl-0 xs:pl-0 xxs:pl-0">
        <img src={Vector} alt="arrow" className="sm:hidden xs:hidden xxs:hidden"/>
        <img src={logo} alt="GAMER" className="w-auto h-14 pl-12 md:pl-5 sm:p-0 xs:p-0 xxs:p-0" />
      </div>
      <div className=" flex items-center justify-between md:px-16 sm:hidden xs:hidden xxs:hidden w-96 px-3">
        <Link
          to="#"
          className="bg-white text-purple font-bebas px-5 py-0 rounded text-lg font-normal"
          aria-current="page"
        >
          DOWNLOAD
        </Link>
        <Link
          to="#"
          className=""
        >
          <img src={android} alt="androdi" className="h-7 w-auto" />
        </Link>
        <Link
          to="#"
          className=""
        >
          <img src={apple} alt="apple" className="h-7 w-auto"/>
        </Link>
      </div>
      <div className="px-5 py-2 flex items-center justify-between sm:hidden xs:hidden xxs:hidden">
        <h3>
          <Link
            to="/login"
            className="text-white px-3 cursor-pointer text-lg"
          >
            Login
          </Link>
        </h3>
        <h3>
          <Link
            to="/login"
            className="text-white px-3 cursor-pointer text-lg"
          >
            Sign up
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Nav;
