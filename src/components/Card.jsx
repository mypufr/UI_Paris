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
    <div className="max-w-sm rounded-2xl border-red-900 shadow-lg">
      <Link to="/search-results/:id">
        <div className="border-secondary-300 rounded-2xl border px-6 py-6">
          <img
            className="h-[360px] w-full rounded-2xl object-cover"
            src={imgSrc}
            alt={title}
          />

          <div className="pt-6">
            <div className="flex justify-between">
              <h6 className="mb-2 text-xl font-bold text-blue-50">{title}</h6>
              <span className="text-xl font-bold text-secondary-700 sm">
                {price}€ /小時
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-grey-600 inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] leading-[18px]">
                {specialities1}
              </span>
              <span className="text-grey-600 inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px]">
                {specialities2}
              </span>
              <span className="text-grey-600 inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px]">
                {specialities3}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
