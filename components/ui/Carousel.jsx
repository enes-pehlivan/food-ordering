import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Title from "./Title";
import OrderButton from "../../components/ui/OrderButton";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded mt-10"></div>
    ),
  };
  return (
    <div className="w-full h-screen  container mx-auto -mt-[88px]">
      <div className="absolute  top-0 left-0 w-full h-full">
        <div className="relative sm:flex hidden h-full w-full ">
          <Image src="/images/background.png" alt="background" fill />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-60 z-30 flex flex-col gap-y-8">
            <Title>
              <h1 className="font-japanfont font-bold text-4xl text-secondary">
                <span className="font-boldfont font-extrabold">RAMEN </span>
                ラーメン
              </h1>
            </Title>
            <p className="font-boldfont font-bold text-3xl">
              EINE SCHALE DER LIEBE AUS DER <br />{" "}
              <span className="text-secondary"> JAPANISCHEN KÜCHE </span>
              FUR SIE
            </p>
            <p className="font-japanfont font-bold text-sm sm:w-2/5 w-full">
              Ramen ist eine japanische Nudelsuppe mit einer Kombination aus
              einer reichhaltigen Brühe, einer Vielzahl von Nudelsorten und
              einer Auswahl an Fleisch oder Gemüse, oft belegt mit einem
              gekochten Ei.
            </p>

            <OrderButton />
          </div>
        </div>
        <div>
          <div className="mt-60 z-30 flex flex-col gap-y-8">
            <Title>
              <h1 className="font-japanfont font-bold text-4xl text-secondary">
                <span className="font-boldfont font-extrabold">SUSHI </span>
                すし
              </h1>
            </Title>
            <p className="font-boldfont font-bold text-3xl">
              EINE SCHALE DER LIEBE AUS DER <br />{" "}
              <span className="text-secondary"> JAPANISCHEN KÜCHE </span>
              FUR SIE
            </p>
            <p className="font-japanfont font-bold text-sm sm:w-2/5 w-full">
              Ramen ist eine japanische Nudelsuppe mit einer Kombination aus
              einer reichhaltigen Brühe, einer Vielzahl von Nudelsorten und
              einer Auswahl an Fleisch oder Gemüse, oft belegt mit einem
              gekochten Ei.
            </p>

            <OrderButton />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
