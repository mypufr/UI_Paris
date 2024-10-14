import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../data/data.json";

import Card from "../components/Card";

import { settings3 } from "../components/helpers/sliderSettings";
import { settings4 } from "../components/helpers/sliderSettings";

function SearchResultPage() {
  return (
    <>
      <div className="flex justify-center space-x-4 hover:cursor-pointer">
        <img
          src="../../src/assets/image/vector_title.png"
          alt=""
          className="inline-block h-[40px]"
        />
        <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
          搜尋您的專屬導遊區
        </h2>
        <img
          src="../../src/assets/image/vector_title.png"
          alt=""
          className="inline-block h-[40px]"
        />
      </div>

      <div className="my-10 flex justify-center space-x-4 hover:cursor-pointer">
        <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
          有10位導遊可為您服務
        </h2>
      </div>

      {/* slides show 1: search results */}
      <div className="m-auto my-20 w-[67.5%]">
        <div className="mt-8">
          <Slider {...settings4}>
            {data.map((data, index) => (
              <div key={index}>
                <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                  <Card
                    imgSrc={data.img}
                    title={data.name}
                    price={data.price}
                    specialities1={data.speciality1}
                    specialities2={data.speciality2}
                    specialities3={data.speciality3}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container m-auto text-center">
        <Link>
          <button className="rounded-2xl bg-primary-900 p-2 text-white">
            查看更多
          </button>
        </Link>
      </div>
      {/* slides show 2: other recommandations */}

      <div className="m-auto my-20 w-[67.5%]">
        <div className="mt-20">
          {/* <Slider {...settings2}>
              {TripsData.map((data, index) => (
                <div key={index}>
                  <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                    <TripCard
                      tripName={data.tripName}
                      imageUrl={data.img}
                      description={data.description}
                      date={data.date}
                      site1={data.site1}
                      site2={data.site2}
                      site3={data.site3}
                      site4={data.site4}
                      site5={data.site5}
                    />
                  </div>
                </div>
              ))}
            </Slider> */}
          <Slider {...settings3}>
            {data.map((data, index) => (
              <div key={index}>
                <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                  <Card
                    imgSrc={data.img}
                    title={data.name}
                    price={data.price}
                    specialities1={data.speciality1}
                    specialities2={data.speciality2}
                    specialities3={data.speciality3}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SearchResultPage;
