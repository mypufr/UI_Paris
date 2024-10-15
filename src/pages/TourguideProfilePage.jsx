import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import  { useNavigate } from "react-router-dom"

import data from "../data/data.json";
import TripsData from "../data/trips.json"
import TripCard from "../components/TripCard";
import Card from "../components/Card";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { settings3 } from "../components/helpers/sliderSettings";
import { settings4 } from "../components/helpers/sliderSettings";

function TourguideProfilePage() {
  const { id } = useParams();
  const CardData = data.find((item) => item.id === parseInt(id));
  console.log(CardData);

  if (!CardData) {
    return <div>Results not found</div>;
  }


  const navigate = useNavigate();

  const handleSendMessageClick = ()=> {
    navigate("/search-tourguides/tourguide-profile/:id/message");
  }


  return (
    <>
      <div className="flex flex-col justify-center bg-background-2 text-3xl font-bold text-grey-950 py-[10vh]">
        {CardData.name} Profile Page
        {CardData.review}
        {CardData.price}€{/* Search criteria */}
        <div></div>
        {/* Tourguide profile */}
        <div>
          <h2>您的專屬導遊</h2>
          <img src="" alt="" />
          <div className="">
            <p>巴黎歷史建築、博物館專業導覽</p>
            <div>
              <span>大人 15€ /小時</span>
              <span>兒童 10€ /小時</span>
            </div>
            <img src="" alt="notes-star" />
            <p>80人已評價</p>
            <p>語言：中文、英文</p>




            <button className="flex w-full space-x-20 rounded-lg border border-gray-300 bg-primary-700 text-white px-4 py-4" onClick={handleSendMessageClick}>
              <p>留言給{CardData.name}</p>
            </button>

            {/* Profile description */}
            <div>
              <h3>關於{CardData.name}</h3>
              <p>
                大家好，我是{CardData.name}，您的專屬巴黎導遊！
                <br />
                <br />
                我已經在巴黎生活了七年，並且有超過五年的導遊經驗。這些年來，我有幸帶領來自世界各地的遊客深入探索這座充滿魅力的城市。
                <br />
                <br />
                我對巴黎的熱愛源於她豐富的歷史、迷人的文化以及多姿多彩的生活方式。無論是漫步在塞納河畔、欣賞盧浮宮的藝術珍寶，還是探索隱藏在小巷中的法式咖啡館，我都希望能將巴黎的每一個角落最真實、最動人的一面展現在您的面前。
                <br />
                <br />
                在這五年多的導遊生涯中，我帶領過各種不同需求和背景的團隊，包括家庭旅遊、小型私人團體、商務考察團等。我擅長根據每位客人的興趣和喜好，設計出個性化的旅遊行程。不管您是藝術愛好者、美食饕客，還是歷史迷，我都能為您量身定制一個完美的巴黎之旅。
                <br />
                <br />
                除了帶團之外，我也積極參與當地文化活動和導覽培訓，這讓我不僅擁有豐富的知識，更能為您提供最新、最有趣的巴黎資訊。我的目標是讓每一位客人都能在輕鬆愉快的氛圍中，感受巴黎的獨特魅力，並帶著滿滿的美好回憶離開。
                <br />
                <br />
                希望能在巴黎與您相遇，一起走過這座充滿故事的城市，留下屬於您的巴黎篇章！
              </p>
              <h4>{CardData.name}的連結</h4>

              <ul>
                <li className="flex space-x-4">
                  <Link to="/">
                    <img
                      src="../../src/assets/image/facebook.svg"
                      alt="facebook-link"
                      className="inline-block"
                    />
                  </Link>
                  <Link
                    to="/"
                    className="inline-block rounded-full border-2 border-white p-2"
                  >
                    <img
                      src="../../src/assets/image/Instagram.svg"
                      alt="instagram-link"
                      className="inline-block h-auto w-4 rounded"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      src="../../src/assets/image/twitter_logo.svg"
                      alt="line-link"
                      className="inline-block h-10 w-10 rounded-full"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* single trip title */}
        <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            {CardData.name} 的定點深度導覽
          </h2>
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

     {/* single trips*/}

        <div className="mt-20 flex flex-wrap space-x-4 justify-center">
          
              {TripsData.map((data, index) => (
                <div key={index}>
                  <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                    <TripCard
                      tripName={data.tripName}
                      imageUrl={data.imgUrl}
                      description={data.description}
                      date={data.date}
                      site1={data.site1}
                      site2={data.site2}
                      site3={data.site3}
                      site4={data.site4}
                      site5={data.site5}
                    />
                  </div>
                </div>
              ))}
    
          </div>

       {/* thematic trip title */}
       <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            {CardData.name} 的主題式導覽行程
          </h2>
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

   {/* thematic trips*/}

   <div className="mt-20 flex flex-wrap space-x-4 justify-center">
          
          {TripsData.map((data, index) => (
            <div key={index}>
              <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                <TripCard
                  tripName={data.tripName}
                  imageUrl={data.imgUrl}
                  description={data.description}
                  date={data.date}
                  site1={data.site1}
                  site2={data.site2}
                  site3={data.site3}
                  site4={data.site4}
                  site5={data.site5}
                />
              </div>
            </div>
          ))}

      </div>

 {/* service*/}

   <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            {CardData.name} 的服務內容
          </h2>
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

        <div className="my-[80px] py-[1%]">
        <div className="m-auto mb-[5%] max-w-[1296px]">
          <ul className="flex justify-evenly">
            <li className="flex h-full max-w-[240px] flex-col items-center justify-center">
              <p className="py-5 text-2xl font-bold tracking-4 text-grey-950">
                100%私人導覽
              </p>
              <img
                src="../../src/assets/image/step-1-1.png"
                alt=""
                className="block object-cover"
              />
              <p className="mt-2 flex-grow py-3 text-justify text-xl tracking-1.5 text-primary-950">
                享受完全專屬於您的私人導遊體驗，不會與其他遊客分享導遊。
              </p>
            </li>
            <li className="flex h-full max-w-[240px] flex-col items-center justify-center">
              <p className="py-5 text-2xl font-bold tracking-4 text-grey-950">
                客製化行程
              </p>
              <img
                src="../../src/assets/image/step-1-1.png"
                alt=""
                className="block object-cover"
              />
              <p className="mt-2 flex-grow py-3 text-justify text-xl tracking-1.5 text-primary-950">
                根據您的興趣和需求，設計出 完全符合您個人偏好的獨特行程
              </p>
            </li>
            <li className="flex h-full max-w-[240px] flex-col items-center justify-center">
              <p className="py-5 text-2xl font-bold tracking-4 text-grey-950">
                獲取當地視角
              </p>
              <img
                src="../../src/assets/image/step-1-1.png"
                alt=""
                className="block object-cover"
              />
              <p className="mt-2 flex-grow py-3 text-justify text-xl tracking-1.5 text-primary-950">
                透過我們的專家帶領，發掘旅遊指南中找不到的熱點
              </p>
            </li>
            <li className="flex h-full max-w-[240px] flex-col items-center justify-center">
              <p className="py-5 text-2xl font-bold tracking-4 text-grey-950">
                彈性取消政策
              </p>
              <img
                src="../../src/assets/image/step-1-1.png"
                alt=""
                className="block object-cover"
              />
              <p className="mt-2 flex-grow py-3 text-justify text-xl tracking-1.5 text-primary-950">
                無論是計劃有變,還是臨時有事，您都可以輕鬆取消或更改預訂，而不會產生任何額外費用
              </p>
            </li>
          </ul>
        </div>
      </div>


      <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            {CardData.name} 15位客人的評價
          </h2>
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

        <div className="m-auto my-20 w-[67.5%]">
        <div className="mt-8">
          <Slider {...settings3}>
            {data.map((data, index) => (
              <div key={index} onClick={()=> handleCardClick(data.id)}>
                <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                  <Card
                    imgSrc={data.img}
                    title={data.name}
                    price={data.price}
                    specialities1={data.speciality1}
                    specialities2={data.speciality2}
                    specialities3={data.speciality3}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

  {/* More recommaned tourguides */}
  <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
          還有下面9位導遊，等你隨時預約!
          </h2>
          <img
            src="../../src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>


        <div className="m-auto my-20 w-[67.5%]">
        <div className="mt-8">
          <Slider {...settings3}>
            {data.map((data, index) => (
              <div key={index} onClick={()=> handleCardClick(data.id)}>
                <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
                  <Card
                    imgSrc={data.img}
                    title={data.name}
                    price={data.price}
                    specialities1={data.speciality1}
                    specialities2={data.speciality2}
                    specialities3={data.speciality3}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      </div>
    </>
  );
}

export default TourguideProfilePage;
