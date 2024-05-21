import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import div from "./../assets/div.png"
import div2 from "./../assets/div2.png";

<>
  <link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  />
</>;

export default function Corusel() {
  var settings = {
    dots: true,
    infinite: true,
    default: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" px-10">
      <Slider {...settings}>
        <div>
          <div className=" px-10 mt-5">
            <div className=" flex justify-center items-center">
              <img className=" w-full rounded-3xl" src={div} />
            </div>
          </div>
        </div>
        <div>
          <div className=" px-10 mt-5">
            <div className=" flex justify-center items-center">
              <img className=" w-full rounded-3xl" src={div2} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
