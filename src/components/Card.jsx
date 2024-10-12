import React from "react";

const Card = ({
  imageSrc,
  title,
  price,
  specialities1,
  specialities2,
  specialities3
}) => {
  return (
    <div className="max-w-sm rounded-2xl border-red-900 shadow-lg">
      <div className="px-6 py-6 border border-secondary-300 rounded-2xl">
        <img
          className="h-[360px] w-full rounded-2xl object-cover"
          src={imageSrc}
          alt={title}
        />

        <div className="pt-6">
          <div className="flex justify-between">
            <h6 className="mb-2 text-xl font-bold text-blue-50">
              {title}
            </h6>
            <span className="text-secondary-700 font-bold text-xl">{price}€ /小時</span>
          </div>
          <div className="space-x-2">
          <span className="inline-block text-[13px] text-grey-600 leading-[18px] border border-transparent rounded-2xl bg-background-2 px-2">
            {specialities1}
          </span>
          <span className="inline-block text-[13px] text-grey-600 border border-transparent rounded-2xl bg-background-2 px-2">
            {specialities2}
          </span>
          <span className="inline-block text-[13px] text-grey-600 border border-transparent rounded-2xl bg-background-2 px-2">
            {specialities3}
          </span>



          </div>

          {/* {specialities && specialities.map((speciality, index) => (
            <span key={index} className="text-base text-secondary-700">{speciality}</span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
