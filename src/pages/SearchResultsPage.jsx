import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../data/data.json";

import Card from "../components/Card";

function SearchResultPage() {
  return (
    <>
      <div>Search results page</div>
      {/* <div className="m-auto w-[67.5%]">
        <div className="mt-8">
          <Slider {...settings1}>
            {data.map((data, index) => (
              <div key={index}>
                <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                  <Card
                    imageSrc={data.img}
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
      </div> */}
      <div className="h-[1000px] bg-green-800"></div>
    </>
  );
}

export default SearchResultPage;
