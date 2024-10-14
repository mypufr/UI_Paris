import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useRef, useState } from "react";

// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Navbar, Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// import data from "./data/data.json";
// import DistrictsData from "./data/districts.json";
// import TripsData from "./data/trips.json";
// import SlidesData from "./data/slides.json";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TourguidesPage from "./pages/TourguidesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import TripsPage from "./pages/TripsPage";
import SitesInfoPage from "./pages/SitesInfoPage";
import TravelInfoPage from "./pages/TravelInfoPage";
import About from "./pages/About";
import SignUp from "./pages/SingUp";

// import component

// import Card from "./components/Card";
// import TripCard from "./components/TripCard";
// import TourguideList from "./components/TourguideList";
// import SlideText from "./components/SlideText";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search-tourguides" element={<TourguidesPage />}>
            <Route path="search-results" element={<SearchResultsPage />} />
          </Route>
          <Route path="/book-trips" element={<TripsPage />}></Route>
          <Route path="/sites-info" element={<SitesInfoPage />}></Route>
          <Route path="/travel-info" element={<TravelInfoPage />}></Route>
          <Route path="/about" element={<About />}></Route>

          {/* <Route path="/sign-in" element={<SignIn />}></Route> */}
          <Route path="/sign-up" element={<SignUp />}></Route>

          {/* <Route element={<PrivateRoute />}>        
    <Route path="/dashboard" element={<Dashboard />} />
    </Route> */}

          {/* <Route path="/projects" element={<Projects />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      ;
    </>
  );
}

// function App() {
//   const settings1 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slideseToScroll: 2,
//     arrows: true,
//     rows: 2,
//   };

//   const settings2 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slideseToScroll: 2,
//     arrows: true,
//     rows: 1,
//     // pagination: {
//     //   clickable: true,
//     // },
//     // navigation: true,
//   };

//   const slides = [
//     {
//       url: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1520503652613-5a55d772ec77?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1504896287989-ff1fbde00199?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1501622549218-2c3ef86627cb?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1528535619428-a995242b9096?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const [selectedDistrict, setSelectedDistrict] = useState(null);
//   const [popupPosition, setPopupPosition] = useState({
//     left: "10px",
//     top: "10px",
//   });

//   // List of districts with their respective info
//   const districts = {
//     1: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     2: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     3: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     4: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     5: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     6: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     7: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     8: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     9: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     10: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     11: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     12: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     13: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     14: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     15: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     16: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     17: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     18: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     19: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//     20: (
//       <div>
//         {DistrictsData.map((district, index) => (
//           <TourguideList
//             key={index}
//             name={district.name}
//             district={district.district}
//             img={district.img}
//             specialities={district.specialities}
//             language={district.language}
//           />
//         ))}
//       </div>
//     ),
//   };

//   // Handler for when a district is clicked
//   const handleDistrictClick = (event, district) => {
//     event.preventDefault();
//     let x = event.clientX;
//     let y = event.clientY;
//     setSelectedDistrict(district);
//     console.log(x, y);

//     setPopupPosition({
//       left: `${x * 0.35}px`, // Offset by 3.5% of the window width
//       top: `${y * 0.1}px`, // Offset by 10% of the window height
//     });

//     console.log(popupPosition);
//   };

//   return (
//     <>
//       <Header />

//       {/* trip themes */}
//       <ul className="mx-auto flex max-w-1296px items-center justify-center py-7 text-base leading-[22.4px] text-grey-400">
//         <li className="border border-y-0 border-grey-100 pr-11">
//           <Link to="/" className="text-base">
//             <span>法式美食</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>浪漫蜜月行</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>親子家庭遊</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>時尚購物</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>歷史建築</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>藝術博物館</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>文哲學巡禮</span>
//           </Link>
//         </li>
//         <li className="border border-y-0 border-grey-100 px-11">
//           <Link to="/">
//             <span>自然風光</span>
//           </Link>
//         </li>
//       </ul>

//       {/* banner: Slides show */}
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {SlidesData.map((data, index) => (
//           <SwiperSlide key={index}>
//             <SlideText imgUrl={data.imgUrl} />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* <div className="group relative m-auto w-full max-w-[1920px] py-16 sm:h-[300px] md:h-[700px] lg:h-[780px]"> */}
//       {/* <div
//           style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//           className="relative h-full w-full bg-cover bg-center duration-500"
//         >
//           <div className="absolute left-[22%] top-[20%]">
//             <h1 className="noto-sans-tc-bold py-3 leading-[1.2] text-white drop-shadow-lg">
//               尋找你的完美巴黎旅程
//             </h1>
//             <p className="noto-sans-tc-semibold py-6 text-2xl font-bold text-white drop-shadow-lg">
//               輕盈漫步在巴黎的街巷。
//             </p>
//             <p className="noto-sans-tc-semibold text-2xl font-bold text-white drop-shadow-lg">
//               無論你心繫歷史的脈動、美食的馨香，還是藝術的深邃，
//             </p>
//             <p className="noto-sans-tc-semibold text-2xl font-bold text-white drop-shadow-lg">
//               我們都為你精選了最契合靈魂的旅程。
//             </p>
//             <p className="noto-sans-tc-semibold py-6 text-2xl font-bold text-white drop-shadow-lg">
//               一段符合你心之所向的旅程，正在靜靜等待與你邂逅。
//             </p>

//             <div className="flex items-center">
//               <div className="relative w-full max-w-lg">
//                 <input
//                   type="text"
//                   className="w-full rounded-lg border border-gray-300 bg-white p-3 pr-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="尋找你的完美巴黎旅程"
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center bg-primary-500 pl-2">
//                   <svg
//                     className="h-5 w-5 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707a1 1 0 001.414-1.414l-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               歷史建築
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               博物館導覽
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               文哲學巡禮
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               自然風光
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               法式美食
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               浪漫蜜月行
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               親子家庭遊
//             </button>
//             <button className="mx-2 my-2 rounded-xl bg-background-2 p-1">
//               時尚購物
//             </button>
//           </div>
//         </div> */}

//       {/* <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
//           <BsChevronCompactLeft onClick={prevSlide} size={30} />
//         </div>

//         <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
//           <BsChevronCompactRight onClick={nextSlide} size={30} />
//         </div> */}
//       {/*
//         <div className="top-4 flex justify-center py-2">
//           {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className="cursor-pointer text-2xl"
//             >
//             </div>
//           ))}
//         </div> */}

//       {/* </div> */}

//       <div className="mt-[80px] flex justify-center space-x-4 hover:cursor-pointer">
//         <img
//           src="src/assets/image/vector_title.png"
//           alt=""
//           className="inline-block h-[40px]"
//         />
//         <h3 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
//           分區搜尋專屬導遊
//         </h3>
//         <img
//           src="src/assets/image/vector_title.png"
//           alt=""
//           className="inline-block h-[40px]"
//         />
//       </div>
//       <div className="relative mt-[60px]">
//         <div className="flex items-center justify-center">
//           <p className="text-1xl absolute left-[51.5%] top-[45.5%] text-secondary-700 text-white">
//             4
//           </p>
//           <img
//             src="src/assets/image/parismap_dist_web.png"
//             useMap="#parisMap"
//             alt="Paris District Map"
//             className="w-100 h-100"
//           />
//         </div>

//         <div className="">
//           {/* Display selected district info */}
//           {selectedDistrict && (
//             <div
//               className="absolute rounded-[28px] border border-gray-300 bg-background-blur p-4 shadow-lg"
//               style={{
//                 left: `${popupPosition.left}`,
//                 top: `${popupPosition.top}`,
//               }}
//             >
//               <h3 className="space-x-2 py-6 text-xl font-bold leading-7 tracking-4 text-primary-600">
//                 <img
//                   src="src/assets/image/vector_title.png"
//                   alt=""
//                   className="inline-block"
//                 />
//                 <span>與{selectedDistrict}區導遊預定私人遊覽</span>
//               </h3>

//               <div>{districts[selectedDistrict]}</div>
//               <div className="mt-6 space-y-4">
//                 <button className="flex w-full justify-center rounded-2xl bg-primary-600 py-4 font-bold tracking-1.5 text-white">
//                   <img src="src/assets/image/BsHandIndex.svg" alt="" />

//                   <span className="ml-2">馬上預約</span>
//                 </button>
//                 <button className="w-full rounded-2xl bg-transparent py-4 font-bold tracking-1.5 text-primary-600 outline outline-1">
//                   所有{selectedDistrict}區推薦景點
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* Map for clickable areas */}
//           <map name="parisMap">
//             <area
//               shape="poly"
//               coords="536,334,531,340,527,347,523,356,524,367,531,368,539,367,547,370,561,375,567,379,577,383,584,385,592,389,600,394,609,395,616,399,623,404,637,412,631,405,646,412,646,404,643,396,643,388,647,382,650,375,643,366,635,362,625,358,617,355,607,351,595,349,588,346,582,342,574,339,567,335,558,332,547,328,539,326"
//               href="#"
//               onClick={(event) => handleDistrictClick(event, 1)}
//               alt="Paris 1"
//               className="cursor-pointer"
//             />
//             <area
//               shape="poly"
//               coords="585,303,583,310,578,319,572,327,579,332,586,334,596,339,609,340,613,346,618,343,623,349,630,353,637,353,642,356,650,357,657,351,657,345,663,338,666,331,657,325,647,321,635,316,629,314,621,311,613,307,600,306,591,303"
//               href="#"
//               onClick={(event) => handleDistrictClick(event, 2)}
//               alt="Paris 2"
//               className="cursor-pointer"
//             />
//             {/* Add more <area> elements for other districts */}
//           </map>
//         </div>
//       </div>

//       <div>
//         <img
//           src="src/assets/image/deco_sites.png"
//           alt="decorations Paris sites"
//         />
//       </div>

//       {/* slides show: popular tourist guides */}
//       <div className="">
//         <div className="flex justify-center space-x-4 hover:cursor-pointer">
//           <img
//             src="src/assets/image/vector_title.png"
//             alt=""
//             className="inline-block h-[40px]"
//           />
//           <h2 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
//             熱門導遊
//           </h2>
//           <img
//             src="src/assets/image/vector_title.png"
//             alt=""
//             className="inline-block h-[40px]"
//           />
//         </div>
//       </div>
//       <div className="m-auto w-[67.5%]">
//         <div className="mt-8">
//           <Slider {...settings1}>
//             {data.map((data, index) => (
//               <div key={index}>
//                 <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
//                   <Card
//                     imageSrc={data.img}
//                     title={data.name}
//                     price={data.price}
//                     specialities1={data.speciality1}
//                     specialities2={data.speciality2}
//                     specialities3={data.speciality3}
//                   />
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//       {/* background settings */}
//       <div className="bg-popular_sites relative">
//         <div className="">
//           <img
//             src="src/assets/image/upper-background_popular_sites_w1914.png"
//             alt=""
//             className="h-[328px] w-full object-cover"
//           />
//           <img
//             src="src/assets/image/background_popular_sites_cutted.png"
//             alt=""
//             className="h-[733px] w-full"
//           />
//         </div>

//         <div className="absolute left-[43%] top-[30%] mt-16">
//           <div className="flex justify-center space-x-4 hover:cursor-pointer">
//             <img
//               src="src/assets/image/vector_title.png"
//               alt=""
//               className="inline-block h-[40px] w-[30px]"
//             />
//             <h4 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
//               熱門旅程
//             </h4>
//             <img
//               src="src/assets/image/vector_title.png"
//               alt=""
//               className="inline-block h-[40px] w-[30px]"
//             />
//           </div>
//         </div>

//         {/* slides show: popular sites */}
//         <div className="absolute left-[15%] top-[40%] w-[67.5%]">
//           <div className="mt-20">
//             <Slider {...settings2}>
//               {TripsData.map((data, index) => (
//                 <div key={index}>
//                   <div className="transform space-x-0 transition-transform duration-300 hover:scale-105">
//                     <TripCard
//                       tripName={data.tripName}
//                       imageUrl={data.imgUrl}
//                       description={data.description}
//                       date={data.date}
//                       site1={data.site1}
//                       site2={data.site2}
//                       site3={data.site3}
//                       site4={data.site4}
//                       site5={data.site5}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>

//       {/* 預約導遊和報名行程 */}

//       <div className="">
//         <div className="mb-8 mt-[80px] flex justify-center space-x-4 hover:cursor-pointer">
//           <img
//             src="src/assets/image/vector_title.png"
//             alt=""
//             className="inline-block h-[40px]"
//           />
//           <h5 className="text-[40px] font-bold leading-[3rem] tracking-4 text-primary-600">
//             預約導遊和報名行程
//           </h5>
//           <img
//             src="src/assets/image/vector_title.png"
//             alt=""
//             className="inline-block h-[40px]"
//           />
//         </div>

//         <div className="flex justify-center space-x-6">
//           <div className="border-grey-200 max-w-[34%] rounded-2xl border">
//             <span className="block rounded-t-2xl bg-primary-300 py-10 text-center text-2xl font-bold text-white">
//               預約導遊
//             </span>

//             <div className="space-y-[149px] pb-6">
//               <div className="mt-6 flex px-8">
//                 <img
//                   src="src/assets/image/step-1-1.png"
//                   alt=""
//                   className="inline-block max-w-[200px] object-cover"
//                 />
//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-7">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 1 瀏覽導遊資歷與專長
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     在平台上探索各種導遊的個人檔案，了解他們的資歷、專長領域，並觀看他們的自我介紹影片。挑選最適合你需求的在地專家。
//                   </p>
//                 </div>
//               </div>

//               <div className="flex px-8">
//                 <div className="">
//                   <img
//                     src="src/assets/image/step-1-2.png"
//                     alt=""
//                     className="inline-block max-w-[200px] object-cover"
//                   />
//                 </div>
//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-7">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 2 與導遊聯絡
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     登入會員後，通過私訊與選定的導遊聯絡，詳細溝通你的旅行需求、預期時間和特別喜好，確保導遊能為你提供量身定制的服務
//                   </p>
//                 </div>
//               </div>
//               <div className="flex px-8">
//                 <div className="">
//                   <img
//                     src="src/assets/image/step-1-3.png"
//                     alt=""
//                     className="inline-block max-w-[200px] object-cover"
//                   />
//                 </div>
//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-7">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 3 開啟旅程
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     一切確認後，準備好你的行囊，迎接一段由專業導遊帶領的難忘巴黎旅程吧！
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <button className="flex max-w-full justify-center rounded-2xl bg-primary-600 px-[15%] py-4 transition-colors duration-200 hover:bg-primary-300 active:border active:border-primary-600 active:bg-transparent">
//                   <img
//                     src="src/assets/image/BsHandIndex.svg"
//                     alt=""
//                     className="inline-block"
//                   />

//                   <span className="ml-2 font-bold tracking-1.5 text-white">
//                     我要預約導遊
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="border-grey-200 max-w-[34%] rounded-2xl border">
//             <span className="block rounded-t-2xl bg-secondary-300 py-10 text-center text-2xl font-bold text-white">
//               報名行程
//             </span>

//             <div className="mt-10 flex-col space-y-10">
//               <div className="mt-6 flex px-8">
//                 <img
//                   src="src/assets/image/step-2-1.png"
//                   alt=""
//                   className="inline-block max-w-[188px] object-cover"
//                 />

//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 1 瀏覽行程提案
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     在平台上瀏覽各種精心策劃的行程提案，從文化探險到美食之旅，總有一個行程能讓你心動不已。
//                   </p>
//                 </div>
//               </div>

//               <div className="flex px-8">
//                 <div className="">
//                   <img
//                     src="src/assets/image/step-2-2.png"
//                     alt=""
//                     className="inline-block max-w-[188px] object-cover"
//                   />
//                 </div>
//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 2 報名行程
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     選定心儀的行程後，立即登入會員報名，確保你的名額。你還可以和其他參與者交流，分享期待與興奮
//                   </p>
//                 </div>
//               </div>
//               <div className="flex px-8">
//                 <div className="">
//                   <img
//                     src="src/assets/image/step-2-3.png"
//                     alt=""
//                     className="inline-block max-w-[188px] object-cover"
//                   />
//                 </div>
//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 3 開團確認通知
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     當行程人數達到標準時，我們將向你發送開團確認通知，讓你準備好出發。
//                   </p>
//                 </div>
//               </div>

//               <div className="flex px-8">
//                 <div className="">
//                   <img
//                     src="src/assets/image/step-2-4.png"
//                     alt=""
//                     className="max-w-[188px] object-cover"
//                   />
//                 </div>
//                 <div className="max-w-[360px] flex-col space-y-4 px-6 py-[48px]">
//                   <p className="text-xl font-bold tracking-4 text-grey-950">
//                     Step 4 開啟旅程
//                   </p>
//                   <p className="text-[14px] leading-[19.6px] tracking-1.5 text-grey-400">
//                     一切確認後，準備好你的行囊，迎接一段由專業導遊帶領的難忘巴黎旅程吧！
//                   </p>
//                 </div>
//               </div>

//               <div className="flex justify-center">
//                 <button className="mt-2 flex max-w-full justify-center rounded-2xl bg-secondary-400 px-[15%] py-4 transition-colors duration-200 hover:bg-secondary-200 active:border active:border-secondary-200 active:bg-transparent">
//                   <img
//                     src="src/assets/image/BsHandIndex.svg"
//                     alt=""
//                     className="inline-block"
//                   />

//                   <span className="ml-2 font-bold tracking-1.5 text-white">
//                     馬上報名行程
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Clouds decorations */}
//       <div className="relative mb-[20%]">
//         <div className="absolute -top-6 left-[1%] -rotate-12">
//           <img src="src/assets/image/deco_footer_clouds.png" alt="" />
//         </div>

//         <div className="rotate-10 absolute -top-40 right-[3%]">
//           <img src="src/assets/image/deco_footer_clouds.png" alt="" />
//         </div>

//         {/* Tree decorations */}
//         <div className="absolute left-16 top-[85px]">
//           <img
//             src="src/assets/image/left_tree.png"
//             alt=""
//             className="h-auto w-[98%]"
//           />
//         </div>

//         <div className="absolute right-[7%] top-[190px] -rotate-3">
//           <img
//             src="src/assets/image/deco_middle_tree.png"
//             alt=""
//             className="h-auto w-[89%]"
//           />
//         </div>

//         <div className="absolute -top-5 right-2">
//           <img
//             src="src/assets/image/deco_right_tree.png"
//             alt=""
//             className="h-auto w-[98%]"
//           />
//         </div>
//       </div>

//       {/* footer */}
//       <Footer />
//     </>
//   );
// }

// export default App;
