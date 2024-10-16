import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import data from "../data/data.json";
import TripsData from "../data/trips.json";
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

  const handleSendMessageClick = () => {
    navigate(`/search-tourguides/tourguide-profile/${id}/message`);
  };

  const handlePrivateTripsClick = () => {
    navigate(`/search-tourguides/tourguide-profile/${id}/private-trips`);
  };


  return (
    <>
      <div className="flex flex-col justify-center bg-background-2 py-[10vh] text-3xl font-bold text-grey-950">
     
        <div className="flex justify-evenly">
          {/* Search criteria */}

          <div className="mt-10">
            <div className="border-grey-200 flex w-full max-w-lg flex-col items-center justify-center space-y-8 border p-10">
              <div className="flex justify-center">
                <Link>
                  <button className="flex w-full space-x-20 rounded-lg border border-gray-300 bg-background-2 px-4 py-4">
                    <svg
                      className="h-8"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="grey"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
                      <line x1="16" y1="3" x2="16" y2="7" />{" "}
                      <line x1="8" y1="3" x2="8" y2="7" />{" "}
                      <line x1="4" y1="11" x2="20" y2="11" />{" "}
                      <rect x="8" y="15" width="2" height="2" />
                    </svg>
                    <span className="text-xl font-bold text-primary-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      需求日期
                    </span>
                    <svg
                      className="h-8 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="grey"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="flex justify-center">
                <Link>
                  <button className="flex w-full space-x-20 rounded-lg border border-gray-300 bg-background-2 px-4 py-4">
                    <svg
                      className="h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="grey"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-xl font-bold text-primary-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      參加人數
                    </span>
                    <svg
                      className="h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="grey"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="flex justify-center">
                <Link>
                  <button className="flex w-full space-x-20 rounded-lg border border-gray-300 bg-background-2 px-4 py-4">
                    <svg
                      className="inline-block h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="grey"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                    <span className="text-xl font-bold text-primary-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      參觀主題
                    </span>
                    <svg
                      className="h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="grey"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="flex flex-col items-center justify-center space-y-8 px-8">
                <p className="text-xl">您目前選擇的導遊</p>

                <div className="flex items-center justify-center">
                  <img
                    src={CardData.img}
                    alt=""
                    className="inline-block h-20 w-20 rounded-full"
                  />
                  <p className="text-xl">{CardData.name}</p>
                </div>
                <p className="text-xl">
                  除了團體行程，我們的導遊提供靈活的私人行程，採用時薪制計費，讓您可以根據自己的需求與時間安排，預訂專屬的導覽服務。
                </p>

                <button
                  className="flex w-full justify-center space-x-20 rounded-lg border border-secondary-300 bg-secondary-400 px-4 py-4 text-white"
                  onClick={handlePrivateTripsClick}
                >
                  <p>私人行程馬上預定</p>
                </button>
              </div>
            </div>
          </div>

          {/* Tourguide profile */}
          <div className="max-w-[50%]">
            <h2>您的專屬導遊</h2>
            <img src="" alt="" />
            <div className="">
              <p>巴黎歷史建築、博物館專業導覽</p>
              <div>
                <span>大人   {CardData.price}€ /小時</span>
                <span>兒童   {CardData.price -3 }€ /小時</span>
              </div>
              {/* <img src="" alt="notes-star" /> */}
          
              <span className="flex">
              <img src="src/assets/image/star.svg" alt="full star" className="max-w-6"/>
              <img src="src/assets/image/star.svg" alt="" className="max-w-6"/>
              <img src="src/assets/image/star.svg" alt="" className="max-w-6"/>
              <img src="src/assets/image/star.svg" alt="" className="max-w-6"/>
              <img src="src/assets/image/empty-star.svg" alt="" className="max-w-6"/>
              </span>
              <p>80人已評價</p>
              <p>語言：中文、英文</p>

              <button
                className="flex w-full justify-center space-x-20 rounded-lg border border-gray-300 bg-primary-700 px-4 py-4 text-white"
                onClick={handleSendMessageClick}
              >
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
                        className="inline-block h-auto max-w-4 rounded"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        src="../../src/assets/image/twitter_logo.svg"
                        alt="line-link"
                        className="inline-block h-10  rounded-full"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
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
        <div className="mt-20 flex flex-wrap justify-center space-x-4">
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
        <div className="mt-20 flex flex-wrap justify-center space-x-4">
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
                <div key={index} onClick={() => handleCardClick(data.id)} className="p-3">
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
                <div key={index} onClick={() => handleCardClick(data.id)}>
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
