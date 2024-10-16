import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import data from "../data/data.json";

function BookPrivateTripsPage() {

  const navigate = useNavigate(); 

  const handleGoBackClick = (id) => {
    navigate(`/search-tourguides/tourguide-profile/${id}`);
  };


  const handleSubmitOrderClick = (id) => {
    navigate(`/search-tourguides/tourguide-profile/${id}/private-trips/confirm-order`);
  };
  const { id } = useParams();
  const CardData = data.find((item) => item.id === parseInt(id));
  console.log(CardData);

  if (!CardData) {
    return <div>Results not found</div>;
  }
  return (
    <>
      <div className=" text-center text-3xl font-bold text-black py-10">

{/* title */}
        <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="/images/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            立即預約私人行程
          </h2>
          <img
            src="/images/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

{/* subNavbar */}
        <div className="m-auto my-10 flex max-w-[75%] justify-center space-x-6 py-10">
          <button className="max-w-60 rounded-2xl bg-secondary-300 px-2 py-2">
            <p className="text-xl text-white">1. 預約項目</p>
          </button>
          <button className="max-w-60 rounded-2xl border border-secondary-300 px-2 py-2">
            <p className="text-xl text-secondary-500">2. 確認訂單</p>
          </button>
          <button className="max-w-60 rounded-2xl border border-secondary-300 px-2 py-2">
            <p className="text-xl text-secondary-500">3. 付款資料</p>
          </button>
          <button className="max-w-60 rounded-2xl border border-secondary-300 px-2 py-2">
            <p className="text-xl text-secondary-500">4. 完成預約</p>
          </button>
        </div>

{/* Selected Tourguide  */}
        <div className="m-auto flex max-w-[55%] flex-col items-center justify-center space-y-8 border border-background-2 px-8 py-6 bg-background-2">
          <p className="text-3xl text-secondary-500">您目前選擇的導遊是：</p>

          <div className="flex items-center justify-center space-x-4">
            <img
              src={CardData.img}
              alt=""
              className="inline-block h-20 max-w-20 rounded-full"
            />
            <p className="text-secondary-700 text-3xl">{CardData.name}</p>
          </div>
          <p className="text-xl text-primary-800">
            專長：
            {CardData.review}
          </p>
        </div>

{/* Options */}
        <div className="flex flex-col items-center max-w-[55%] m-auto border border-background-2 border-spacing-4 pt-20">

          <div className="flex flex-col items-center space-y-6">

          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-3xl text-primary-700">預定日期：</p>
              <div className="relative max-w-sm">
                <input
                  type="text"
                  className="w-full placeholder:text-2xl placeholder:font-normal rounded-lg border border-gray-300 bg-white p-3 pr-4 text-gray-700 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請選擇日期"
                />
                <div className="absolute inset-y-0 right-0 flex items-center rounded-lg bg-primary-500 pl-2">
                  <svg
                    className="h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-3xl text-primary-700">參加人數：</p>
              <div className="relative max-w-sm">
                <input
                  type="text"
                  className="w-full placeholder:text-2xl placeholder:font-normal rounded-lg border border-gray-300 bg-white p-3 pr-4 text-gray-700 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請選擇人數"
                />
                <div className="absolute inset-y-0 right-0 flex items-center rounded-lg bg-primary-500 pl-2">
                  <svg
                    className="h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-3xl text-primary-700">行程主題：</p>
              <div className="relative max-w-sm">
                <input
                  type="text"
                  className="w-full placeholder:text-2xl placeholder:font-normal rounded-lg border border-gray-300 bg-white p-3 pr-4 text-gray-700 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請選擇主題"
                />
                <div className="absolute inset-y-0 right-0 flex items-center rounded-lg bg-primary-500 pl-2">
                  <svg
                    className="h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-3xl text-primary-700">行程時間：</p>
              <div className="relative max-w-sm">
                <input
                  type="text"
                  className="w-full placeholder:text-2xl placeholder:font-normal rounded-lg border border-gray-300 bg-white p-3 pr-4 text-gray-700 placeholder:text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請選擇時間"
                />
                <div className="absolute inset-y-0 right-0 flex items-center rounded-lg bg-primary-500 pl-2">
                  <svg
                    className="h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          </div>
{/* submit buttons */}
          <div className="space-y-4 my-20">
            <button
              className="flex max-w-80 justify-center space-x-20 rounded-3xl border border-secondary-300 bg-secondary-400 px-4 py-4 text-white"
              onClick={()=>handleSubmitOrderClick(id)}
            >
              <p className="text-2xl">立刻預約</p>
            </button>

            <button
              className="flex max-w-80 justify-center space-x-20 rounded-3xl border border-secondary-600 bg-transparent px-4 py-4 text-secondary-600"
              onClick={handleGoBackClick}
            >
              <p className="text-2xl">回上一頁</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPrivateTripsPage;
