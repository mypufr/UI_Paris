import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  imgSrc,
  title,
  price,
  specialities1,
  specialities2,
  specialities3,
}) => {
  return (
    <div className="md:max-w-sm rounded-2xl border-0 border-secondary-300 md:shadow-lg md:border min-[375px]:p-8 md:p-2">
      <Link to="/search-results/:id">
        <div className="rounded-2xl p-0 2xl:px-6 2xl:py-6 border broder-grey-100 border-1 border-b-0 md:border-0">
          <img
            className="h-[257px] w-full rounded-2xl object-cover md:h-[150px] xl:h-[360px]"
            src={imgSrc}
            alt={title}
          />

          <div className="pt-6 space-y-1">
            <div className="flex justify-between">
              <h6 className="mb-2 text-base font-bold text-blue-50 2xl:text-xl">
                {title}
              </h6>
              <span className="hidden lg:inline-block lg:font-bold lg:text-secondary-700 lg:text-base">
                {price}€ /小時
              </span>
            </div>
            <div className="space-x-2 md:flex md:flex-col md:justify-center md:items-start md:space-x-0 md:space-y-1 min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:justify-start min-[1440px]:space-y-0 min-[1440px]:space-x-1 min-[1920px]:items-start min-[1920px]:justify-start">
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] leading-[18px] text-grey-600">
                {specialities1}
              </span>
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] leading-[18px] text-grey-600">
                {specialities2}
              </span>
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] leading-[18px] text-grey-600">
                {specialities3}
              </span>
            </div>
          </div>
      <div className="flex justify-center pt-3 md:hidden">
        <button className="w-full rounded-xl bg-primary-600 px-[10%] py-3 transition-colors duration-200 hover:bg-primary-300 active:border active:border-primary-600 active:bg-transparent">
          <Link to="/search-tourguides" className="flex justify-center">
            <img src="images/BsHandIndex.svg" alt="" className="inline-block h-6 pr-1" />

            <span className=" font-bold tracking-1.5 text-white">
              我要預約導遊
            </span>
          </Link>
        </button>
      </div>
      <div className="hidden md:flex md:justify-center py-3 2xl:hidden">
        <button className="w-full rounded-xl bg-secondary-400 px-[10%] py-3 transition-colors duration-200 hover:bg-primary-300 active:border active:border-primary-600 active:bg-transparent">
          <Link to="/search-tourguides" className="flex justify-center">
            <img src="images/BsHandIndex.svg" alt="" className="inline-block h-6 pr-1" />

            <span className=" font-bold tracking-1.5 text-white">
              點我看更多
            </span>
          </Link>
        </button>
      </div>
        </div>
      </Link>

    </div>
  );
};

export default Card;
