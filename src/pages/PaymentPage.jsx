import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import data from "../data/data.json";

function PaymentPage() {
  const navigate = useNavigate();
  // const handleGoBackClick = (id) => {
  //   navigate(`/search-tourguides/tourguide-profile/${id}`);
  // };

  // const handleConfirmOrderClick = (id) => {
  //   navigate(
  //     `/search-tourguides/tourguide-profile/${id}/private-trips/payment`,
  //   );
  // };
  const { id } = useParams();
  const CardData = data.find((item) => item.id === parseInt(id));
  console.log(CardData);

  if (!CardData) {
    return <div>Results not found</div>;
  }
  return (
    <>
      <div className="py-10 text-3xl font-bold text-black">
        {/* subNavbar */}
        <div className="m-auto my-10 flex max-w-[80%] justify-center space-x-6 py-10">
          <button className="max-w-60 rounded-2xl border border-secondary-300 px-2 py-2">
            <p className="text-xl text-secondary-500">1. 預約項目</p>
          </button>
          <button className="max-w-60 rounded-2xl border border-secondary-300 px-2 py-2">
            <p className="text-xl text-secondary-500">2. 確認訂單</p>
          </button>
          <button className="max-w-60 rounded-2xl border border-secondary-300 bg-secondary-300 px-2 py-2">
            <p className="text-xl text-white">3. 付款資料</p>
          </button>
          <button className="max-w-60 rounded-2xl border border-secondary-300 px-2 py-2">
            <p className="text-xl text-secondary-500">4. 完成預約</p>
          </button>
        </div>

        {/* title */}
        <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="/images/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            付款資訊
          </h2>
          <img
            src="/images/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

        <div className="m-auto my-10 flex max-w-[90%] justify-center space-x-8 py-10">
          <div className="flex flex-col space-y-4">
            {/* left: Order info */}
            {/* 1st order */}
            <div className="border p-4">
              <div className="flex max-w-full flex-col">
                <h3 className="border-b-4 border-b-secondary-200 py-6 pl-4 text-start text-3xl text-primary-950">
                  私人行程訂單
                </h3>

                <div className="flex flex-col items-center">
                  <div className="flex space-y-8 px-8 py-6">
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={CardData.img}
                        alt=""
                        className="inline-block h-20 max-w-20 rounded-full"
                      />
                      <p className="text-3xl text-secondary-700">
                        {CardData.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start space-y-2">
                    <p className="text-lg text-grey-950">
                      2024年10月19日10:00-17:00
                    </p>
                    <p className="ext-grey-950 text-lg">4位成人, 4位兒童</p>
                  </div>
                </div>
              </div>
              <p className="text-end text-2xl text-primary-700">700 €</p>
            </div>

            {/* 2nd order */}

            <div className="border p-4">
              <div className="flex max-w-full flex-col">
                <h3 className="border-b-4 border-b-secondary-200 py-6 pl-4 text-start text-3xl text-primary-950">
                  定點行程訂單
                </h3>

                <div className="flex flex-col items-center">
                  <div className="flex space-y-8 px-8 py-6">
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src="/images/img_tourguide_5.png"
                        alt=""
                        className="inline-block h-20 max-w-20 rounded-full"
                      />
                      <p className="text-3xl text-secondary-700">
                        Sophie Pinto
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start space-y-2">
                    <p className="text-2xl text-grey-950">
                      龐畢度中心導覽 - 團體行程
                    </p>
                    <p className="text-lg text-grey-950">
                      2024年10月20日13:00-16:00
                    </p>
                    <p className="ext-grey-950 text-lg">4位成人, 0位兒童</p>
                  </div>
                </div>
              </div>
              <p className="text-end text-2xl text-primary-700">180 €</p>
            </div>

            <div className="flex justify-between py-6">
              <h4 className="text-3xl font-black text-primary-700">總計</h4>
              <p className="text-3xl font-black text-primary-700">880 €</p>
            </div>
            <div className="my-20 items-center space-y-4">
              <button
                className="flex max-w-80 justify-center space-x-20 rounded-3xl border border-secondary-600 bg-transparent px-4 py-4 text-secondary-600"
                // onClick={()=>handleGoBackClick(id)}
              >
                <p className="text-2xl">回上一頁</p>
              </button>
            </div>
          </div>

          {/* right: Payment  */}
          <div className="flex min-w-[46%] flex-col border p-4">
            <h3 className="border-b-4 border-b-secondary-200 py-6 pl-4 text-start text-3xl text-primary-950">
              私人行程訂單
            </h3>
            <div className="">
              <div>
                <div className="flex space-y-8 px-8 py-6">
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={CardData.img}
                      alt=""
                      className="inline-block h-20 max-w-20 rounded-full"
                    />
                    <p className="text-3xl text-secondary-700">
                      {CardData.name}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-2xl text-grey-950">2024年10月19日</p>
                  <p className="text-2xl">4位成人, 4位兒童</p>
                  <p className="text-2xl text-primary-700">700 €</p>
                </div>
              </div>

              {/* subtotal */}
              <div className="self-end">
                <div className="flex justify-between">
                  <h4 className="text-3xl font-black text-primary-700">小計</h4>
                  <p className="text-3xl font-black text-primary-700">700 €</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="my-20 items-center space-y-4">
                <button
                  className="flex max-w-80 justify-center space-x-20 rounded-3xl border border-secondary-300 bg-secondary-400 px-4 py-4 text-white"
                  // onClick={()=>handleConfirmOrderClick(id)}
                >
                  <p className="text-2xl">立刻預約</p>
                </button>

                <button
                  className="flex max-w-80 justify-center space-x-20 rounded-3xl border border-secondary-600 bg-transparent px-4 py-4 text-secondary-600"
                  // onClick={()=>handleGoBackClick(id)}
                >
                  <p className="text-2xl">回上一頁</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
