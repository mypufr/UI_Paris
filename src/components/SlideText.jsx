import React from "react";
// import { Link } from "react-router-dom";

const SlideText = ({ imgUrl }) => {
  return (
    <>
      <div className="h-full w-full min-[200px]:h-[480px]">
        <img src={imgUrl} alt="" className="object-cover h-full w-full" />
      </div>
    </>
  );
};

export default SlideText;
