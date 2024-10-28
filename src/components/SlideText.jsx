import React from "react";
// import { Link } from "react-router-dom";

const SlideText = ({ imgUrl }) => {
  return (
    <>
      <div className="h-full w-full min-[200px]:h-[480px] lg:h-[550px] 2xl:h-[700px] min-[1920px]:h-[800px]">
        <img src={imgUrl} alt="" className="object-cover h-full w-full" />
      </div>
    </>
  );
};

export default SlideText;
