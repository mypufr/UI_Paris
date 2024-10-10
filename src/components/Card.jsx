import React from "react";



const Card = ({ imageSrc, title, description, specialities }) => {
  return (
    <div className="max-w-sm  rounded-2xl shadow-lg border-red-900">
      <div className="px-6 py-5">
      <img className="w-full rounded-2xl  h-[360px] object-cover" src={imageSrc} alt={title} />

      <div className="px-6 py-4">
        <div className="flex justify-between">
        <div className="mb-2 text-xl font-bold text-primary-500">{title}</div>
        <span className="text-black">€ /小時</span>
        </div>
        <span className="text-base text-secondary-700">{description}</span>
        <span className="text-base text-primary-500">{specialities}</span>
   

        {/* {specialities && specialities.map((speciality, index) => (
            <span key={index} className="text-base text-secondary-700">{speciality}</span>
          ))} */}



      </div>
      </div>
    </div>
  );
};


export default Card;
