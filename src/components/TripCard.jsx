import React from "react";
import { Link } from "react-router-dom";

const TripCard = ({
  imageUrl,
  tripName,
  date,
  site1,
  site2,
  site3,
  site4,
  site5,
  description,
}) => {
  return (
    <div className="max-w-sm border-secondary-200 rounded-3xl border-2 bg-white shadow-lg">
      <Link to="/">
        <div className="rounded-3xl border border-secondary-300">
          <img
            className="rounded-t-3xl inline-block object-cover"
            src={imageUrl}
            alt={tripName}
          />

          <div className="space-y-2 px-4 py-[18.5px]">
            <div className="flex space-x-2">
              <img
                src="src/assets/image/vector_title.png"
                alt=""
                className="inline-block h-5 w-5"
              />
              <h6 className="text-grey-500 text-xl font-bold">
                {tripName}
              </h6>
            </div>

            <div className="space-x-2">
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] leading-[18px] text-grey-600">
                {site1}
              </span>
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] text-grey-600">
                {site2}
              </span>
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] text-grey-600">
                {site3}
              </span>
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] text-grey-600">
                {site4}
              </span>
              <span className="inline-block rounded-2xl border border-transparent bg-background-2 px-2 text-[13px] text-grey-600">
                {site5}
              </span>
            </div>

            <p className="text-[14px] leading-[19.6px] tracking-1.5 text-gray-400">
              {description}
            </p>

            <div className="flex justify-end space-x-2">
              <img src="src/assets/image/Group.svg" alt="" />
              <p className="text-[11px] leading-[15.4px] tracking-1.5 text-primary-500">
                {date}
              </p>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
};

export default TripCard;
