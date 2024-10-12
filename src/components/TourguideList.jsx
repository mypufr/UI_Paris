import React from "react";
import { Link } from "react-router-dom";

const TourguideList = ({ name, img, specialities, language }) => {
  return (
    <>
    
    <div className="">
      <Link to="/">
        <div className="border-secondary-300 rounded-2xl border px-6 py-6">
          <img
            className="w-full rounded-2xl object-cover"
            src={img}
            alt={name}
          />
          <div className="">
            <div className="flex justify-between">
              <span className="mb-2 text-xl font-bold text-blue-50">
                {name}
              </span>
              <span className="text-xl font-bold text-secondary-700">
                {language}
              </span>
              <span className="text-xl font-bold text-secondary-700">
                {specialities}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
      </>
  );
};

export default TourguideList;
