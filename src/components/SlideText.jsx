import React from "react";
// import { Link } from "react-router-dom";

const SlideText = ({
  imgUrl,

}) => {
  return (
    <div className="relative h-full w-full">
    <img
      src={imgUrl}
      alt=""
      className="h-full w-full object-cover"
    />
    <div className="absolute left-[22%] top-[10%]">
      <div className="flex-col space-y-5 text-start">
        <p className="noto-sans-tc-bold py-3 leading-[1.2] text-white drop-shadow-lg">
          尋找你的完美巴黎旅程
        </p>
        <p className="py-6 text-2xl font-bold text-white">
          輕盈漫步在巴黎的街巷。
        </p>
        <div>
          <p className="text-2xl font-bold leading-[28.8px] text-white">
            無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
          </p>
          <p className="text-2xl font-bold leading-[28.8px] text-white">
            我們都為你精選了最契合靈魂的旅程。
          </p>
        </div>
        <p className="py-6 text-2xl font-bold leading-[28.8px] text-white">
          一段符合你心之所向的旅程，正在靜靜等待與你邂逅。
        </p>

        <div className="flex items-center">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 pr-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="尋找你的完美巴黎旅程"
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-primary-500 pl-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707a1 1 0 001.414-1.414l-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        歷史建築
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        博物館導覽
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        文哲學巡禮
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        自然風光
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        法式美食
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        浪漫蜜月行
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        親子家庭遊
      </button>
      <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
        時尚購物
      </button>
    </div>
  </div>

  );
};

export default SlideText;
