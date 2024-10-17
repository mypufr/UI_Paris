import React from "react";
import { Link } from "react-router-dom";

const SiteCard = ({
  imageUrl,
  tripName,
  date,
  duration,
  NumPeople,
  description, 
  price,
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
                className="inline-block h-5 max-w-5"
              />
              <h6 className="text-grey-500 text-xl font-bold ">
                {duration}
              </h6>
            </div>

            <div className="flex space-x-2">
              <img
                src="src/assets/image/vector_title.png"
                alt=""
                className="inline-block h-5 max-w-5"
              />
              <h6 className="text-grey-500 text-xl font-bold">
                {NumPeople}
              </h6>
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

            <div className="flex justify-end space-x-2">
              <img src="src/assets/image/Group.svg" alt="" />
              <p className="text-[11px] leading-[15.4px] tracking-1.5 text-primary-500">
                {price} €/人
              </p>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
};

export default SiteCard;
