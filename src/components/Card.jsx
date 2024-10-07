import React from "react";


const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm  rounded-2xl shadow-lg border-red-900">
      <div className="px-6 py-5 ">
      <img className="w-full rounded-2xl" src={imageSrc} alt={title} />

      <div className="px-6 py-4">
        <div className="flex justify-between">
        <div className="mb-2 text-xl font-bold text-primary-500">{title}</div>
        <span className="text-black">€ /小時</span>
        </div>
        <p className="text-base text-secondary-700">{description}</p>
      </div>
      </div>
    </div>
  );
};

export default Card;
