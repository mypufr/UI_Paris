import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navbar, Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import data from "./data/data.json";

import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideseToScroll: 2,
    arrows: true,
    rows: 2,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideseToScroll: 2,
    arrows: true,
    rows: 1,
    // pagination: {
    //   clickable: true,
    // },
    // navigation: true,
  };

  const slides = [
    {
      url: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1520503652613-5a55d772ec77?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1504896287989-ff1fbde00199?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1501622549218-2c3ef86627cb?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1528535619428-a995242b9096?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // List of districts with their respective info
  const districts = {
    1: "1區推薦導遊名單",
    2: "2區推薦導遊名單",
    3: "3區推薦導遊名單",
    4: "4區推薦導遊名單",
    5: "5區推薦導遊名單",
    6: "6區推薦導遊名單",
    7: "7區推薦導遊名單",
    8: "8區推薦導遊名單",
    9: "9區推薦導遊名單",
    10: "10區推薦導遊名單",
    11: "11區推薦導遊名單",
    12: "12區推薦導遊名單",
    13: "13區推薦導遊名單",
    14: "14區推薦導遊名單",
    15: "15區推薦導遊名單",
    16: "16區推薦導遊名單",
    17: "17區推薦導遊名單",
    18: "18區推薦導遊名單",
    19: "19區推薦導遊名單",
    20: "20區推薦導遊名單",
  };

  // Handler for when a district is clicked
  const handleDistrictClick = (event, district) => {
    event.preventDefault();
    setSelectedDistrict(district);
  };

  return (
    <>
      <Header />

      {/* trip themes */}

      <ul className="mx-auto flex max-w-1296px items-center justify-center py-7 text-grey-400 text-base leading-[22.4px]">
        <li className="border border-grey-100 border-y-0 pr-11">
          <Link to="/" className="text-base">
          <span>法式美食</span>
            
          </Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>浪漫蜜月行</span></Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>親子家庭遊</span></Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>時尚購物</span></Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>歷史建築</span></Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>藝術博物館</span></Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>文哲學巡禮</span></Link>
        </li>
        <li className="border border-grey-100 border-y-0 px-11">
          <Link to="/"><span>自然風光</span></Link>
        </li>
      </ul>

      {/* banner: Slides show */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute left-[22%] top-[10%]">
              <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-white drop-shadow-lg">
                尋找你的完美巴黎旅程
              </h1>
              <p className="py-6 text-2xl font-bold text-white">
                輕盈漫步在巴黎的街巷。
              </p>
              <p className="text-2xl font-bold text-white">
                無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
              </p>
              <p className="text-2xl font-bold text-white">
                我們都為你精選了最契合靈魂的旅程。
              </p>
              <p className="py-6 text-2xl font-bold text-white">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1520503652613-5a55d772ec77?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute left-[22%] top-[10%]">
              <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-secondary-500 drop-shadow-lg">
                尋找你的完美巴黎旅程
              </h1>
              <p className="py-6 text-2xl font-bold text-white">
                輕盈漫步在巴黎的街巷。
              </p>
              <p className="text-2xl font-bold text-white">
                無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
              </p>
              <p className="text-2xl font-bold text-white">
                我們都為你精選了最契合靈魂的旅程。
              </p>
              <p className="py-6 text-2xl font-bold text-white">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504896287989-ff1fbde00199?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute left-[22%] top-[10%]">
              <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-white drop-shadow-lg">
                尋找你的完美巴黎旅程
              </h1>
              <p className="py-6 text-2xl font-bold text-white">
                輕盈漫步在巴黎的街巷。
              </p>
              <p className="text-2xl font-bold text-white">
                無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
              </p>
              <p className="text-2xl font-bold text-white">
                我們都為你精選了最契合靈魂的旅程。
              </p>
              <p className="py-6 text-2xl font-bold text-white">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1501622549218-2c3ef86627cb?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute left-[22%] top-[10%]">
              <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-white drop-shadow-lg">
                尋找你的完美巴黎旅程
              </h1>
              <p className="py-6 text-2xl font-bold text-white">
                輕盈漫步在巴黎的街巷。
              </p>
              <p className="text-2xl font-bold text-white">
                無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
              </p>
              <p className="text-2xl font-bold text-white">
                我們都為你精選了最契合靈魂的旅程。
              </p>
              <p className="py-6 text-2xl font-bold text-white">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1528535619428-a995242b9096?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="absolute left-[22%] top-[10%]">
              <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-secondary-500 drop-shadow-lg">
                尋找你的完美巴黎旅程
              </h1>
              <p className="py-6 text-2xl font-bold text-white">
                輕盈漫步在巴黎的街巷。
              </p>
              <p className="text-2xl font-bold text-white">
                無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
              </p>
              <p className="text-2xl font-bold text-white">
                我們都為你精選了最契合靈魂的旅程。
              </p>
              <p className="py-6 text-2xl font-bold text-white">
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
        </SwiperSlide>
      </Swiper>

      <div className="group relative m-auto w-full max-w-[1920px] py-16 sm:h-[300px] md:h-[700px] lg:h-[780px]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="relative h-full w-full bg-cover bg-center duration-500"
        >
          <div className="absolute left-[22%] top-[20%]">
            <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-white drop-shadow-lg">
              尋找你的完美巴黎旅程
            </h1>
            <p className="noto-sans-tc-semibold py-6 text-2xl font-bold text-white drop-shadow-lg">
              輕盈漫步在巴黎的街巷。
            </p>
            <p className="noto-sans-tc-semibold text-2xl font-bold text-white drop-shadow-lg">
              無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
            </p>
            <p className="noto-sans-tc-semibold text-2xl font-bold text-white drop-shadow-lg">
              我們都為你精選了最契合靈魂的旅程。
            </p>
            <p className="noto-sans-tc-semibold py-6 text-2xl font-bold text-white drop-shadow-lg">
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

        {/* Left Arrow */}
        <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="top-4 flex justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer text-2xl"
            >
              {/* <RxDotFilled /> */}
            </div>
          ))}
        </div>
      </div>

 

      <h2 className="mt-2 text-center text-4xl hover:cursor-pointer">
        分區搜尋專屬導遊
      </h2>
      <div className="relative">
        <div className="flex items-center justify-center">
          <p className="text-1xl absolute left-[51.5%] top-[45.5%] text-secondary-700 text-white">
            4
          </p>
          <img
            src="src/assets/image/parismap_dist_web.png"
            useMap="#parisMap"
            alt="Paris District Map"
            className="w-100 h-100"
          />
        </div>

        <div className="">
          {/* Display selected district info */}
          {selectedDistrict && (
            <div className="absolute left-[10%] top-[20%] border border-gray-300 bg-white p-4 shadow-lg">
              <h3 className="text-xl font-bold">{selectedDistrict}區</h3>
              <p>{districts[selectedDistrict]}</p>
            </div>
          )}

          {/* Map for clickable areas */}
          <map name="parisMap">
            <area
              shape="poly"
              coords="536,334,531,340,527,347,523,356,524,367,531,368,539,367,547,370,561,375,567,379,577,383,584,385,592,389,600,394,609,395,616,399,623,404,637,412,631,405,646,412,646,404,643,396,643,388,647,382,650,375,643,366,635,362,625,358,617,355,607,351,595,349,588,346,582,342,574,339,567,335,558,332,547,328,539,326"
              href="#"
              onClick={(event) => handleDistrictClick(event, 1)}
              alt="Paris 1"
              className="cursor-pointer"
            />
            <area
              shape="poly"
              coords="585,303,583,310,578,319,572,327,579,332,586,334,596,339,609,340,613,346,618,343,623,349,630,353,637,353,642,356,650,357,657,351,657,345,663,338,666,331,657,325,647,321,635,316,629,314,621,311,613,307,600,306,591,303"
              href="#"
              onClick={(event) => handleDistrictClick(event, 2)}
              alt="Paris 2"
              className="cursor-pointer"
            />
            {/* Add more <area> elements for other districts */}
          </map>
        </div>
      </div>

      <div>
        <img
          src="src/assets/image/deco_sites.png"
          alt="decorations Paris sites"
        />
      </div>

      {/* slides show: popular tourist guides */}
      <div className="m-auto w-[67.5%]">
        <div className="mt-20">
          <Slider {...settings1}>
            {data.map((data, index) => (
              <div key={index} >
                <div className="space-x-0">
                  <Card
                    imageSrc={data.img}
                    title={data.name}
                    price={data.price}
                    // description={data.review}
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
      {/* background settings */}
      <div className="bg-popular_sites relative">
        <img
          src="src/assets/image/upper-background_popular_sites_w1914.png"
          alt=""
        />
        <img
          src="src/assets/image/background_popular_sites_cutted.png"
          alt=""
          className=""
        />

        <h2 className="left-50 bottom-50 left- absolute top-12 mt-16 text-4xl">
          熱門旅程
        </h2>

        {/* slides show: popular sites */}
        <div className="absolute bottom-20 left-48 m-auto w-[67.5%]">
          <div className="mt-20">
            <Slider {...settings2}>
              {data.map((data, index) => (
                <div key={index}>
                  <div>
                    <Card
                      imageSrc={data.img}
                      title={data.name}
                      description={data.review}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* <div className="m-auto w-3/4">
        <div className="mt-20">
          <Swiper {...settings2} className="mySwiper">
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  imageSrc={item.img}
                  title={item.name}
                  description={item.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

      {/* 預約導遊和報名行程 */}

      <div className="flex-col items-center justify-center">
        <h2 className="mt-2 text-center text-4xl">預約導遊和報名行程</h2>

        <div className="flex justify-center space-x-6">
          <div className="w-[40%] rounded border border-red-700">
            預約導遊
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-1-1.png" alt="" />
              </div>
              <div className="flex-col items-center border border-red-700">
                <p>Step 1 瀏覽導遊資歷與專長</p>
                <p>
                  在平台上探索各種導遊的個人檔案，了解他們的資歷、專長領域，並觀看他們的自我介紹影片。挑選最適合你需求的在地專家。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-1-2.png" alt="" />
              </div>
              <div className="flex-col items-center">
                <p className="cursor-pointer">Step 2 與導遊聯絡</p>
                <p>
                  登入會員後，通過私訊與選定的導遊聯絡，詳細溝通你的旅行需求、預期時間和特別喜好，確保導遊能為你提供量身定制的服務
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-1-3.png" alt="" />
              </div>
              <div className="flex-col items-center">
                <p>Step 3 開啟旅程</p>
                <p>
                  一切確認後，準備好你的行囊，迎接一段由專業導遊帶領的難忘巴黎旅程吧！
                </p>
              </div>
            </div>
            <button className="">我要預約導遊</button>
          </div>

          <div className="w-[40%] border border-red-700">
            報名行程
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-2-1.png" alt="" />
              </div>
              <div className="flex-col items-center">
                <p>Step 1 瀏覽行程提案</p>
                <p>
                  在平台上瀏覽各種精心策劃的行程提案，從文化探險到美食之旅，總有一個行程能讓你心動不已。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-2-2.png" alt="" />
              </div>
              <div className="flex-col items-center">
                <p>Step 2 報名行程</p>
                <p>
                  選定心儀的行程後，立即登入會員報名，確保你的名額。你還可以和其他參與者交流，分享期待與興奮
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-2-3.png" alt="" />
              </div>
              <div className="flex-col items-center">
                <p>Step 3 開團確認通知</p>
                <p>
                  當行程人數達到標準時，我們將向你發送開團確認通知，讓你準備好出發。
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <img src="src/assets/image/step-2-4.png" alt="" />
              </div>
              <div className="flex-col items-center">
                <p>Step 4 開啟旅程</p>
                <p>
                  一切確認後，準備好你的行囊，迎接一段由專業導遊帶領的難忘巴黎旅程吧！
                </p>
              </div>
            </div>
            <button>馬上報名行程</button>
          </div>
        </div>
      </div>

      {/* Clouds decorations */}
      <div className="relative mb-[20%]">
        <div className="absolute -top-6 left-[1%] -rotate-12">
          <img src="src/assets/image/deco_footer_clouds.png" alt="" />
        </div>

        <div className="rotate-10 absolute -top-40 right-[3%]">
          <img src="src/assets/image/deco_footer_clouds.png" alt="" />
        </div>

        {/* Tree decorations */}
        <div className="absolute left-16 top-[85px]">
          <img
            src="src/assets/image/left_tree.png"
            alt=""
            className="h-auto w-[98%]"
          />
        </div>

        <div className="absolute right-[7%] top-[190px] -rotate-3">
          <img
            src="src/assets/image/deco_middle_tree.png"
            alt=""
            className="h-auto w-[89%]"
          />
        </div>

        <div className="absolute -top-5 right-2">
          <img
            src="src/assets/image/deco_right_tree.png"
            alt=""
            className="h-auto w-[98%]"
          />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
