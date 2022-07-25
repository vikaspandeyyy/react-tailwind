import React from "react";
import Slider from "react-slick";
import "../index.css";
import profilepic from "../images/profilePic.png";
import warrior03 from "../images/warrior03.png";
import crown from "../images/crown.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topwinner = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="winner xl:container lg:container xl:mx-auto lg:mx-auto 
     px-8 sm:px-8 xxs:px-1  pt-12"
    >
      <div className="flex ">
        <img src={crown} alt="" className="h-12" />
        <h1 className="text-white text-2xl p-1 ">
          Top Winner of this <br />
          <span className="border-b-2">Week</span>
        </h1>
      </div>
      <div className="flex justify-between sm:flex-col xs:flex-col xxs:flex-col xxs:px-3">
        <div className="w-2/5 mt-12 py-12 xxs:py-5 sm:w-full xs:w-11/12 xxs:w-auto">
          <Slider {...settings}>
            <div className="bg-lightpurple rounded-xl">
              <img
                src={profilepic}
                alt=""
                className="rounded-full h-28 m-auto"
              />
              <div className="flex justify-center ">
                <span className="text-white font-semibold text-7xl">1</span>
                <span className="text-white px-1 py-1">
                  <h3 className="text-yellow">144 coins</h3>
                  <h2 className="text-3xl font-bold text-center">
                    Leader Name
                  </h2>
                  <p className="text-base font-normal">@leadernamehere</p>
                </span>
              </div>
              <div className="p-8">
                <p className="text-searchcolor text-base font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tenetur voluptatum nulla dolores quasi impedit, nemo
                  fugit saepe animi ab distinctio blanditiis! Quod molestias
                  molestiae nostrum ipsa obcaecati voluptatibus iste tempore
                  minima cumque voluptatem pariatur minus nesciunt atque, natus
                  perferendis asperiores quia laboriosam. Tenetur in tempore vel
                  hic, ex aut?
                </p>
                <span className="pt-5">
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className="bg-lightpurple rounded-xl">
              <img
                src={profilepic}
                alt=""
                className="rounded-full h-28 m-auto"
              />
              <div className="flex justify-center ">
                <span className="text-white font-semibold text-7xl">1</span>
                <span className="text-white px-1 py-1">
                  <h3 className="text-yellow">144 coins</h3> 
                  <h2 className="text-3xl font-bold text-center">
                    Leader Name
                  </h2>
                  <p className="text-base font-normal">@leadernamehere</p>
                </span>
              </div>
              <div className="p-8">
                <p className="text-searchcolor text-base font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tenetur voluptatum nulla dolores quasi impedit, nemo
                  fugit saepe animi ab distinctio blanditiis! Quod molestias
                  molestiae nostrum ipsa obcaecati voluptatibus iste tempore
                  minima cumque voluptatem pariatur minus nesciunt atque, natus
                  perferendis asperiores quia laboriosam. Tenetur in tempore vel
                  hic, ex aut?
                </p>
                <span className="pt-5">
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className=""></div>
            </div>
            <div className="bg-lightpurple rounded-xl">
              <img
                src={profilepic}
                alt=""
                className="rounded-full h-28 m-auto"
              />
              <div className="flex justify-center ">
                <span className="text-white font-semibold text-7xl">1</span>
                <span className="text-white px-1 py-1">
                  <h3 className="text-yellow">144 coins</h3>
                  <h2 className="text-3xl font-bold text-center">
                    Leader Name
                  </h2>
                  <p className="text-base font-normal">@leadernamehere</p>
                </span>
              </div>
              <div className="p-8">
                <p className="text-searchcolor text-base font-normal leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas tenetur voluptatum nulla dolores quasi impedit, nemo
                  fugit saepe animi ab distinctio blanditiis! Quod molestias
                  molestiae nostrum ipsa obcaecati voluptatibus iste tempore
                  minima cumque voluptatem pariatur minus nesciunt atque, natus
                  perferendis asperiores quia laboriosam. Tenetur in tempore vel
                  hic, ex aut?
                </p>
                <span className="pt-5">
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star text-white" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className=""></div>
            </div>
          </Slider>
        </div>
        <div className="ml-12 w-2/3 sm:w-full xs:w-full xxs:w-full sm:ml-0 xs:ml-0 md:ml-10 xxs:ml-0 md:mt-12">
          <img
            src={warrior03}
            alt=""
            className="xl:h-2/3"
          />
          <h2
            className="tracking-tighter text-7xl text-white font-medium sm:tracking-tighter 
           sm:text-5xl sm:mt-5 xs:mt-5 xxs:mt-5 xs:text-4xl xs:font-semibold xxs:text-4xl "
          >
            let your soul
            <span className="sm:hidden xs:hidden xxs:hidden">
              <br />
            </span>
            feed on gaming.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Topwinner;
