import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import data from "../data/data.json";
import DistrictsData from "../data/districts.json";
import TripsData from "../data/trips.json";
import SlidesData from "../data/slides.json";

// import component

import Card from "../components/Card";
import TripCard from "../components/TripCard";
import TourguideList from "../components/TourguideList";
import SlideText from "../components/SlideText";

export default function HomePage() {
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

  //   {
  //     url: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1520503652613-5a55d772ec77?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1504896287989-ff1fbde00199?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1501622549218-2c3ef86627cb?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1528535619428-a995242b9096?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };
  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [popupPosition, setPopupPosition] = useState({
    left: "10px",
    top: "10px",
  });

  // List of districts with their respective info
  const districts = {
    1: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    2: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    3: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    4: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    5: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    6: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    7: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    8: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    9: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    10: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    11: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    12: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    13: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    14: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    15: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    16: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    17: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    18: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    19: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
    20: (
      <div>
        {DistrictsData.map((district, index) => (
          <TourguideList
            key={index}
            name={district.name}
            district={district.district}
            img={district.img}
            specialities={district.specialities}
            language={district.language}
          />
        ))}
      </div>
    ),
  };

  // Handler for when a district is clicked
  const handleDistrictClick = (event, district) => {
    event.preventDefault();
    let x = event.clientX;
    let y = event.clientY;
    setSelectedDistrict(district);
    console.log(x, y);

    setPopupPosition({
      left: `${x * 0.35}px`, // Offset by 3.5% of the window width
      top: `${y * 0.1}px`, // Offset by 10% of the window height
    });

    console.log(popupPosition);
  };

  return (
    <>

      {/* trip themes */}
      <ul className="mx-auto flex max-w-[1296px] items-center justify-center py-7 text-base leading-[22.4px] text-grey-400">
        <li className="border border-y-0 border-grey-100 pr-11">
          <Link to="/" className="text-base">
            <span>法式美食</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>浪漫蜜月行</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>親子家庭遊</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>時尚購物</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>歷史建築</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>藝術博物館</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>文哲學巡禮</span>
          </Link>
        </li>
        <li className="border border-y-0 border-grey-100 px-11">
          <Link to="/">
            <span>自然風光</span>
          </Link>
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
        {SlidesData.map((data, index) => (
          <SwiperSlide key={index}>
            <SlideText imgUrl={data.imgUrl} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-[80px] flex justify-center space-x-4 hover:cursor-pointer">
        <img
          src="src/assets/image/vector_title.png"
          alt=""
          className="inline-block h-[40px]"
        />
        <h3 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
          分區搜尋專屬導遊
        </h3>
        <img
          src="src/assets/image/vector_title.png"
          alt=""
          className="inline-block h-[40px]"
        />
      </div>
      <div className="relative mt-[60px]">
        <div className="flex items-center justify-center">
          <p className="text-1xl absolute left-[51.5%] top-[45.5%] text-secondary-700 text-white">
            4
          </p>
          <img
            src="src/assets/image/parismap_dist_web.png"
            useMap="#parisMap"
            alt="Paris District Map"
            // className="max-w-100 max-h-100"
          />
        </div>

        <div className="">
          {/* Display selected district info */}
          {selectedDistrict && (
            <div
              className="absolute rounded-[28px] border border-gray-300 bg-background-blur p-4 shadow-lg"
              style={{
                left: `${popupPosition.left}`,
                top: `${popupPosition.top}`,
              }}
            >
              <h3 className="space-x-2 py-6 text-xl font-bold leading-7 tracking-4 text-primary-600">
                <img
                  src="src/assets/image/vector_title.png"
                  alt=""
                  className="inline-block"
                />
                <span>與{selectedDistrict}區導遊預定私人遊覽</span>
              </h3>

              <div>{districts[selectedDistrict]}</div>
              <div className="mt-6 space-y-4">
                <button className="flex w-full justify-center rounded-2xl bg-primary-600 py-4 font-bold tracking-1.5 text-white">
                  <img src="src/assets/image/BsHandIndex.svg" alt="" />

                  <span className="ml-2">馬上預約</span>
                </button>
                <button className="w-full rounded-2xl bg-transparent py-4 font-bold tracking-1.5 text-primary-600 outline outline-1">
                  所有{selectedDistrict}區推薦景點
                </button>
              </div>
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
      <div className="">
        <div className="flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            熱門導遊
          </h2>
          <img
            src="src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>
      </div>
      <div className="m-auto max-w-[67.5%]">
        <div className="mt-8">
          <Slider {...settings1}>
            {data.map((data, index) => (
              <div key={index} className="p-10">
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
      {/* background settings */}
      <div className="bg-popular_sites relative">
        <div className="">
          <img
            src="src/assets/image/upper-background_popular_sites_w1914.png"
            alt=""
            className="h-[328px] w-full object-cover"
          />
          <img
            src="src/assets/image/background_popular_sites_cutted.png"
            alt=""
            className="h-[733px] w-full"
          />
        </div>

        <div className="absolute left-[43%] top-[30%] mt-16">
          <div className="flex justify-center space-x-4 hover:cursor-pointer">
            <img
              src="src/assets/image/vector_title.png"
              alt=""
              className="inline-block h-[40px] "
            />
            <h4 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
              熱門旅程
            </h4>
            <img
              src="src/assets/image/vector_title.png"
              alt=""
              className="inline-block h-[40px] "
            />
          </div>
        </div>

        {/* slides show: popular sites */}
        <div className="absolute left-[15%] top-[40%] max-w-[67.5%]">
          <div className="mt-20">
            <Slider {...settings2}>
              {TripsData.map((data, index) => (
                <div key={index} className="p-4">
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
            </Slider>
          </div>
        </div>
      </div>

      {/* 預約導遊和報名行程 */}

      <div className="">
        <div className="mb-8 mt-[80px] flex justify-center space-x-4 hover:cursor-pointer">
          <img
            src="src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
          <h5 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
            預約導遊和報名行程
          </h5>
          <img
            src="src/assets/image/vector_title.png"
            alt=""
            className="inline-block h-[40px]"
          />
        </div>

        <div className="flex justify-center space-x-6">
          <div className="border-grey-200 max-w-[34%] rounded-2xl border">
            <span className="block rounded-t-2xl bg-primary-300 py-10 text-center text-2xl font-bold text-white">
              預約導遊
            </span>

            <div className="space-y-[149px] pb-6">
              <div className="mt-6 flex px-8">
                <img
                  src="src/assets/image/step-1-1.png"
                  alt=""
                  className="inline-block max-w-[200px] object-cover"
                />
                <div className="max-w-[360px] flex-col space-y-4 px-6 py-7">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 1 瀏覽導遊資歷與專長
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    在平台上探索各種導遊的個人檔案，了解他們的資歷、專長領域，並觀看他們的自我介紹影片。挑選最適合你需求的在地專家。
                  </p>
                </div>
              </div>

              <div className="flex px-8">
                <div className="">
                  <img
                    src="src/assets/image/step-1-2.png"
                    alt=""
                    className="inline-block max-w-[200px] object-cover"
                  />
                </div>
                <div className="max-w-[360px] flex-col space-y-4 px-6 py-7">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 2 與導遊聯絡
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    登入會員後，通過私訊與選定的導遊聯絡，詳細溝通你的旅行需求、預期時間和特別喜好，確保導遊能為你提供量身定制的服務
                  </p>
                </div>
              </div>
              <div className="flex px-8">
                <div className="">
                  <img
                    src="src/assets/image/step-1-3.png"
                    alt=""
                    className="inline-block max-w-[200px] object-cover"
                  />
                </div>
                <div className="max-w-[360px] flex-col space-y-4 px-6 py-7">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 3 開啟旅程
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    一切確認後，準備好你的行囊，迎接一段由專業導遊帶領的難忘巴黎旅程吧！
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="flex max-w-full justify-center rounded-2xl bg-primary-600 px-[15%] py-4 transition-colors duration-200 hover:bg-primary-300 active:border active:border-primary-600 active:bg-transparent">
                  <img
                    src="src/assets/image/BsHandIndex.svg"
                    alt=""
                    className="inline-block"
                  />

                  <span className="ml-2 font-bold tracking-1.5 text-white">
                    我要預約導遊
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-grey-200 max-w-[34%] rounded-2xl border">
            <span className="block rounded-t-2xl bg-secondary-300 py-10 text-center text-2xl font-bold text-white">
              報名行程
            </span>

            <div className="mt-10 flex-col space-y-10">
              <div className="mt-6 flex px-8">
                <img
                  src="src/assets/image/step-2-1.png"
                  alt=""
                  className="inline-block max-w-[188px] object-cover"
                />

                <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 1 瀏覽行程提案
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    在平台上瀏覽各種精心策劃的行程提案，從文化探險到美食之旅，總有一個行程能讓你心動不已。
                  </p>
                </div>
              </div>

              <div className="flex px-8">
                <div className="">
                  <img
                    src="src/assets/image/step-2-2.png"
                    alt=""
                    className="inline-block max-w-[188px] object-cover"
                  />
                </div>
                <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 2 報名行程
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    選定心儀的行程後，立即登入會員報名，確保你的名額。你還可以和其他參與者交流，分享期待與興奮
                  </p>
                </div>
              </div>
              <div className="flex px-8">
                <div className="">
                  <img
                    src="src/assets/image/step-2-3.png"
                    alt=""
                    className="inline-block max-w-[188px] object-cover"
                  />
                </div>
                <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 3 開團確認通知
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    當行程人數達到標準時，我們將向你發送開團確認通知，讓你準備好出發。
                  </p>
                </div>
              </div>

              <div className="flex px-8">
                <div className="">
                  <img
                    src="src/assets/image/step-2-4.png"
                    alt=""
                    className="max-w-[188px] object-cover"
                  />
                </div>
                <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
                  <p className="text-xl font-bold tracking-4 text-grey-950">
                    Step 4 開啟旅程
                  </p>
                  <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
                    一切確認後，準備好你的行囊，迎接一段由專業導遊帶領的難忘巴黎旅程吧！
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="mt-2 flex max-w-full justify-center rounded-2xl bg-secondary-400 px-[15%] py-4 transition-colors duration-200 hover:bg-secondary-200 active:border active:border-secondary-200 active:bg-transparent">
                  <img
                    src="src/assets/image/BsHandIndex.svg"
                    alt=""
                    className="inline-block"
                  />

                  <span className="ml-2 font-bold tracking-1.5 text-white">
                    馬上報名行程
                  </span>
                </button>
              </div>
            </div>
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
            className="h-auto max-w-[98%]"
          />
        </div>

        <div className="absolute right-[7%] top-[190px] -rotate-3">
          <img
            src="src/assets/image/deco_middle_tree.png"
            alt=""
            className="h-auto max-w-[89%]"
          />
        </div>

        <div className="absolute -top-5 right-2">
          <img
            src="src/assets/image/deco_right_tree.png"
            alt=""
            className="h-auto max-w-[98%]"
          />
        </div>
      </div>
    </>
  );
}
