import React from "react";
import { Link } from "react-router-dom";

const TourguideList = ({ name, img, specialities, language }) => {
  return (
    <>
    
    <div className="">
      <Link to="/">
        <div className="flex border-secondary-300 rounded-2xl border p-4">
          <img
            className="rounded-full object-cover w-24 h-24"
            src={img}
            alt={name}
          />
          <div className="ml-4">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
              <span className="text-base font-bold text-secondary-950">
                {name}
              </span>
              <span className="flex">
              <img src="src/assets/image/star.svg" alt="" className="w-6"/>
              <img src="src/assets/image/star.svg" alt="" className="w-6"/>
              <img src="src/assets/image/star.svg" alt="" className="w-6"/>
              <img src="src/assets/image/star.svg" alt="" className="w-6"/>
              <img src="src/assets/image/empty-star.svg" alt="" className="w-6"/>
              </span>
              </div>
              <span className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                專長：{specialities}
              </span>
              <span className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                語言：{language}
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
