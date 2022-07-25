import React from "react";
import Accordian from "../components/Accordian";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gameaction from "../components/Gameaction";
import Infommation from "../components/Infommation";
import Nav from "../components/Nav";
import Topwinner from "../components/Topwinner";
import Payment from "../components/Payment";
import "../index.css"
import Header from "../components/Header";


const Home = () => {
  return (
    <div className="home">  
      <Nav/>
      <Header/>
      <Gameaction/>
      <Features/>
      <Infommation/>
      <Topwinner/>
      <Payment/>
      <Accordian/>
      <Footer/> 
    </div>
  );
};

export default Home;
