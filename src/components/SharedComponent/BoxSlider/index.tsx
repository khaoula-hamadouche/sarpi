"use client"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BoxSlider = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,           
    autoplaySpeed: 2000,      
    pauseOnHover: true,       
    rtl: false,             
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  
  return (
    <>
      <Slider {...settings} className="text-center">
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/sonatrach.png" alt="Sonatrach" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/pvep.png" alt="pvep" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/pttep.png" alt="pttep" />
        </div>    
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/petrofac.png" alt="petrofac" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
           <img className="mx-auto mb-2 mt-3" src="images/client/inamenas.png" alt="inamenas" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/equinor.png" alt="equinor" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/aec.png" alt="aec" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">      
          <img className="mx-auto mb-2 mt-3" src="images/client/statoil.png" alt="statoil" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/sanahess.png" alt="sanahess" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/jgc.png" alt="jgc" />
         </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/inamenas.png" alt="inamenas" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/bp.png" alt="bp" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">
          <img className="mx-auto mb-2 mt-3" src="images/client/anadarka.png" alt="anadarka" />
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 pt-5 pb-7 rounded-lg text-center group hover:bg-blue-500">  
          <img className="mx-auto mb-2 mt-3" src="images/client/abener.png" alt="abener" />
        </div>
      </Slider>
    </>
  );
};

export default BoxSlider;