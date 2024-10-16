import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

function EditMessagePage() {
  const navigate = useNavigate();

  const handleSubmitMessageClick = (id) => {
    navigate(`/search-tourguides/tourguide-profile/${id}/success`);
  };

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
      <div className="h-[1000px] text-center text-3xl font-bold text-white max-w-[70%] m-auto">
        EditMessage Page
        <div>
          <p className="bg-background-2 text-primary-500">
            親愛的MYP，歡迎來到我們的留言板!
            如果您對行程有任何疑問，或是有任何想與我們分享的想法與建議，請隨時在此留言。我們的專業導遊團隊會在第一時間閱讀並回覆您的訊息，確保您獲得滿意的解答。
            我們期待為您提供最優質的服務,幫助您在巴黎度過一段難忘的時光!
          </p>



        </div>
        <div className="my-10 flex flex-col items-center justify-center space-y-8 px-8">
          <div className="flex items-center justify-center space-x-4">
            <h2 className="text-grey-950">我要留言給</h2>
            <img
              src={CardData.img}
              alt=""
              className="inline-block h-20 max-w-20 rounded-full"
            />
            <p className="flex flex-col items-start space-y-2 text-xl text-grey-950">
              <span>{CardData.name}</span>
              <span>{CardData.review}</span>
            </p>
          </div>
        <input
          type="text"
          placeholder="ex: 服務時間、服務內容、報價....."
          className="cursor-text text-grey-950 placeholder-grey-200 border border-grey-100 pb-80 pl-4 pr-40 pt-4 placeholder:text-xl placeholder:italic placeholder:opacity-75"
        />
        <button
          className="flex max-w-60 justify-center space-x-20 rounded-lg border border-gray-300 bg-primary-700 px-4 py-4 text-white"
          onClick={handleSubmitMessageClick}
        >
          <p>送出訊息</p>
        </button>

        <button
          className="flex max-w-60 justify-center space-x-20 rounded-lg border border-gray-300 bg-secondary-400 px-4 py-4 text-white"
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
