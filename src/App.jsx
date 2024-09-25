import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./App.css";


function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <h1>尋找你的完美巴黎旅程</h1>
      <div className="max-w-[1400px] h-[780px] sm:h-[300px] md:h-[700px] lg:h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
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
    </>
  );
}

export default App;
