import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

function EditMessagePage() {
  const navigate = useNavigate();

  // const handleSubmitMessageClick = (id) => {
  //   navigate(`/search-tourguides/tourguide-profile/${id}/success`);
  // };

  const handleGoBackClick = (id) => {
    navigate(`/search-tourguides/tourguide-profile/${id}`);
  };

  const { id } = useParams();
  const CardData = data.find((item) => item.id === parseInt(id));
  console.log(CardData);

  if (!CardData) {
    return <div>Results not found</div>;
  }
  return (
    <>
      <div className="m-auto mb-20 mt-10 max-w-[70%] px-4 text-center font-bold text-white md:px-0">
        <div className="space-y-4">
          <p className="text-xl text-primary-950">
            親愛的MYP，歡迎來到我們的留言板!{" "}
          </p>
          <p className="text-xl text-primary-950">
            如果您對行程有任何疑問，或是有任何想與我們分享的想法與建議，請隨時在此留言。
          </p>
        </div>
        <div className="border rounded-3xl bg-background-2 my-10 max-w-[70%] m-auto">
          <div className="mt-10 flex justify-center space-x-4 hover:cursor-pointer">
            <img
              src="/images/vector_title.png"
              alt=""
              className="inline-block h-[40px]"
            />
            <h3 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
              我要留言給
            </h3>
            <img
              src="/images/vector_title.png"
              alt=""
              className="inline-block h-[40px]"
            />
          </div>

          <div className="my-10 flex flex-col items-center justify-center space-y-8 px-8 pb-20">
            <div className="flex items-center justify-center space-x-4">
              <img
                src={CardData.img}
                alt=""
                className="inline-block h-20 max-w-20 rounded-full"
              />
              <p className="flex flex-col items-start space-y-2 text-xl text-grey-950">
                <span className="text-3xl text-primary-700">
                  {CardData.name}
                </span>
                <span>{CardData.review}</span>
              </p>
            </div>
            <input
              type="text"
              placeholder="ex: 服務時間、服務內容、報價....."
              className="placeholder-grey-200 cursor-text border border-grey-100 pb-80 pl-4 pr-40 pt-4 text-grey-950 placeholder:text-xl placeholder:italic placeholder:opacity-75"
            />

          </div>
        </div>
        {/* buttons */}

        <div className="flex flex-col justify-center items-center space-y-8 py-6">
            <p className="text-2xl text-secondary-400">
              {" "}
              我們的專業導遊團隊會在第一時間閱讀並回覆您的訊息，確保您獲得滿意的解答。
            </p>
          <button
            className="flex min-w-60 justify-center space-x-20 rounded-lg border border-gray-300 bg-primary-700 px-4 py-4 text-white"
            // onClick={handleSubmitMessageClick}
          >
            <p>送出訊息</p>
          </button>

          <button
            className="flex min-w-60 justify-center space-x-20 rounded-lg border border-gray-300 bg-secondary-400 px-4 py-4 text-white"
            onClick={() => handleGoBackClick(id)}
          >
            <p>回上一頁</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default EditMessagePage;
