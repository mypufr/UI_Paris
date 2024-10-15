import React from "react";

import { useParams } from "react-router-dom";
import data from "../data/data.json";

function TourguideProfilePage() {
  const { id } = useParams();
  const CardData = data.find((item) => item.id === parseInt(id));
  console.log(CardData);

  if (!CardData) {
    return <div>Results not found</div>;
  }

  return (
    <>
      <div className="flex h-[1000px] flex-col justify-center bg-green-800 text-center text-3xl font-bold text-white">
        {CardData.name} Profile Page
        {CardData.review}
        {CardData.price}€
      </div>
    </>
  );
}

export default TourguideProfilePage;
