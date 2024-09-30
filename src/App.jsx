import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideseToScroll: 1,
  };

  const data = [
    {
      name: `John Morgan`,
      img: `src/assets/image/1.png`,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in necessitatibus temporibus doloribus pariatur rerum nesciunt itaque quae et. Maxime consequatur vero iusto optio iure magnam itaque blanditiis praesentium odit.`,
    },
    {
      name: `Teddy Bear`,
      img: `src/assets/image/2.png`,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in necessitatibus temporibus doloribus pariatur rerum nesciunt itaque quae et. Maxime consequatur vero iusto optio iure magnam itaque blanditiis praesentium odit.`,
    },
    {
      name: `Lilly Collins`,
      img: `src/assets/image/4.png`,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate in necessitatibus temporibus doloribus pariatur rerum nesciunt itaque quae et. Maxime consequatur vero iusto optio iure magnam itaque blanditiis praesentium odit.`,
    },
  ];

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

  return (
    <>
      <div className="group relative m-auto w-full max-w-[1920px] py-16 sm:h-[300px] md:h-[700px] lg:h-[780px]">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="relative h-full w-full bg-cover bg-center duration-500"
        >
          <div className="absolute left-[22%] top-[20%]">
            <h1 className="py-3 text-6xl font-bold text-white">
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
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              歷史建築
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              博物館導覽
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              文哲學巡禮
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              自然風光
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              法式美食
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              浪漫蜜月行
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
              親子家庭遊
            </button>
            <button className="mx-2 my-2 rounded-xl bg-secondary-500 p-1">
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

      <div className="image-container">
        <img src="src/assets/image/4.png" alt="Image Description" />
        <div className="text-overlay">Zoomed Text</div>
      </div>

      <h2>分區搜尋專屬導遊</h2>

      <img
        src="src/assets/image/巴黎分區圖.jpg"
        useMap="#parisMap"
        alt="Paris District Map"
      />

      <map name="parisMap">
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
      </map>

      <div className="m-auto w-3/4">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((data, index) => (
              <div
                key={index}
                className="h-[450px] rounded-xl bg-secondary-600 text-black"
              >
                <div className="flex h-56 items-center justify-center rounded-t-xl bg-blue-700">
                  <img
                    src={data.img}
                    alt=""
                    className="h-44 w-44 rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{data.name}</p>
                  <p>{data.review}</p>
                  <button className="rounded-xl bg-indigo-500 px-6 py-1 text-lg text-white">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default App;
