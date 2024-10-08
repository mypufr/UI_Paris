import React from "react";
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

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import data from "./data/data.json";

import Card from "./components/Card";

function App() {
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideseToScroll: 1,
    arrows: true,
  };

  const settings2 = {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: true,
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
  // const [isHovered, setIsHovered] = useState(false);

  // List of districts with their respective info
  const districts = {
    1: "1區推薦導遊名單",
    2: "2區推薦導遊名單",
    3: "3區推薦導遊名單",
    4: "4區推薦導遊名單",
    // Add more districts...
  };

  // Handler for when a district is clicked
  const handleDistrictClick = (event, district) => {
    event.preventDefault();
    setSelectedDistrict(district);
  };

  // const handleMouseEnter = () => {
  //   setIsHovered(true); // Set hover state to true
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false); // Set hover state to false
  // };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="flex justify-center py-5">
        <div className="flex items-center">
          <div>
            <img
              src="src/assets/image/website_logo.png"
              alt="logo"
              className=""
            />
          </div>
          <div className="flex-col">
            <div>
              <p className="inline-block text-black">樂遊巴黎</p>
              <span className="inline-block ps-2 text-black">
                Paris, mon guide
              </span>
            </div>
            <p className="text-black">在地導遊媒合平台</p>
          </div>
        </div>

        <ul className="ms-[8.6%] flex items-center justify-between space-x-16">
          <li>
            <a href="#">隨行導遊趣</a>
          </li>
          <li>
            <a href="#">行程搶先報</a>
          </li>
          <li>
            <a href="#">精選主題</a>
          </li>
          <li>
            <a href="#">旅行指南</a>
          </li>
     <li>
            <button className="ms-60">
            <a href="#">註冊/登入</a>
              
              </button>
     </li>
        </ul>
        
      </div>


      <ul className="flex items-center justify-center space-x-24">
          <li>
            <a href="#">法式美食</a>
          </li>
          <li>
            <a href="#">浪漫蜜月行</a>
          </li>
          <li>
            <a href="#">親子家庭遊</a>
          </li>
          <li>
            <a href="#">時尚購物</a>
          </li>
          <li>
            <a href="#">歷史建築</a>
          </li>
          <li>
            <a href="#">藝術博物館</a>
          </li>
          <li>
            <a href="#">文哲學巡禮</a>
          </li>
          <li>
            <a href="#">自然風光</a>
          </li>


        </ul>

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

      {/* <div className="image-container">
        <img src="src/assets/image/4.png" alt="Image Description" />
        <div className="text-overlay">Zoomed Text</div>
      </div> */}

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
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              alt="Paris 1"
              className="cursor-pointer"
            />
            <area
              shape="poly"
              coords="585,303,583,310,578,319,572,327,579,332,586,334,596,339,609,340,613,346,618,343,623,349,630,353,637,353,642,356,650,357,657,351,657,345,663,338,666,331,657,325,647,321,635,316,629,314,621,311,613,307,600,306,591,303"
              href="#"
              onClick={(event) => handleDistrictClick(event, 2)}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
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

      {/* <map name="parisMap">
        <area
          shape="poly"
          coords="227,168,231,172,236,177,238,183,241,190,242,196,249,199,254,202,260,203,267,204,271,200,274,194,277,188,282,182,273,178,263,175,254,172,246,170,238,167"
          href="#"
          data-district="1"
          alt="Paris 1"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="1區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="222,166,228,166,234,166,240,166,246,164,251,166,257,166,262,168,268,169,275,170,281,171,288,168,288,176,282,163,274,161,269,157,260,154,251,152,246,152,240,155,233,158"
          href="#"
          data-district="2"
          alt="Paris 2"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="2區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="9299,165,295,170,292,175,289,181,296,191,288,189,303,194,309,198,312,203,318,208,326,211,332,210,331,202,332,194,330,185,328,178,324,170,319,165,311,160,304,160"
          href="#"
          data-district="3"
          alt="Paris 3"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="3區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="285,195,283,201,279,208,278,214,276,220,283,224,289,229,297,232,305,236,312,240,319,244,325,248,330,243,331,235,333,229,335,221,330,214,322,210,311,204,306,198,301,194,295,192,290,188"
          href="#"
          data-district="4"
          alt="Paris 4"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="4區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="9273,229,270,235,268,243,266,248,262,254,257,261,257,267,255,273,252,278,248,283,252,288,259,293,265,298,271,300,278,302,286,299,293,296,299,294,306,290,309,285,312,279,318,274,322,266,324,258,320,253,313,245,306,238,297,234,288,231,281,228"
          href="#"
          data-district="5"
          alt="Paris 5"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="5區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="6"
          alt="Paris 6"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="6區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="7"
          alt="Paris 7"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="7區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="8"
          alt="Paris 8"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="8區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="9"
          alt="Paris 9"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="9區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="10"
          alt="Paris 10"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="10區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="11"
          alt="Paris 11"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="11區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="12"
          alt="Paris 12"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="12區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="13"
          alt="Paris 13"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="13區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="14"
          alt="Paris 14"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="14區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="15"
          alt="Paris 15"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="15區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="16"
          alt="Paris 16"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="16區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="17"
          alt="Paris 17"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="17區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="18"
          alt="Paris 18"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="18區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="19"
          alt="Paris 19"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="19區推薦導遊名單"
        />

        <area
          shape="poly"
          coords="93,118,100,121,105,125,113,129,120,134,129,138,134,128,139,121,148,118,155,111,162,106,170,102,178,101,186,100,196,99,206,97,214,94,213,82,216,71,220,58,222,47,224,36,224,26,214,26,205,28,193,31,181,37,174,38,161,50,153,54,168,40,149,58,142,64,134,70,129,74,123,78,118,80,113,83,107,87,102,94,97,97,94,103,92,109"
          href="#"
          data-district="20"
          alt="Paris 20"
          target="_blank"
          rel="nofollow noreferrer noopener"
          title="20區推薦導遊名單"
        />
      </map> */}

      <div className="m-auto w-3/4">
        <div className="mt-20">
          <Slider {...settings1}>
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
        <div className="absolute bottom-20 left-48 m-auto w-3/4">
          <div className="mt-20">
            <Slider {...settings1}>
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
      <footer className="relative">
        <div>
          <img
            src="src/assets/image/footer_background.png"
            alt=""
            className="block w-full"
          />
        </div>
        <div className="relative -top-1 h-[420px] bg-primary-600"></div>

        <div>
          <img
            src="src/assets/image/footer_img.png"
            alt=""
            className="absolute bottom-[190px] right-[400px]"
          />
        </div>
      </footer>
    </>
  );
}

export default App;
