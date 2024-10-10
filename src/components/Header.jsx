import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <div className="flex py-5 max-w-1296px mx-auto">
          <div className="flex">
            <Link to="/" className="inline-flex cursor-pointer">
              <div>
                <img
                  src="src/assets/image/website_logo.png"
                  alt="logo"
                />
              </div>
              <div className="onClick={() => window.location.href = '/'} flex flex-col justify-around">
                <div>
                  <h1 className="inline-block text-[20px] font-bold leading-6 text-secondary-600">
                    樂遊巴黎
                    <span className="inline-block ps-2 text-[20px] font-bold leading-6 text-primary-600">
                      Paris, mon guide
                    </span>
                  </h1>
                </div>
                <p className="text-[14px] font-normal leading-[1.5] text-blue-50">
                  在地導遊媒合平台
                </p>
              </div>
            </Link>
          </div>

          <ul className="ms-[9.9%] flex items-center justify-between space-x-16">
            <li className="text-base leading-[22.4px] text-grey-950">
              <Link to="/" className="text-primary-500 hover:font-bold">
                隨行導遊趣
              </Link>
            </li>
            <li className="text-base leading-[22.4px] text-grey-950">
              <Link to="/" className="text-primary-500 hover:font-bold">
                行程搶先報
              </Link>
            </li>
            <li className="text-base leading-[22.4px] text-grey-950">
              <Link href="/" className="text-primary-500 hover:font-bold">
                推薦景點
              </Link>
            </li>
            <li className="text-base leading-[22.4px] text-grey-950">
              <Link to="/" className="text-primary-500 hover:font-bold">
                旅行指南
              </Link>
            </li>
            <li className="ps-[180px] text-base leading-[22.4px] text-grey-950">
              <button className="rounded-2xl bg-primary-600 text-base font-normal hover:bg-primary-300 active:bg-transparent active:border active:border-primary-600  transition-colors duration-200">
                <Link
                  to="/"
                  className="my-2 inline-block px-5 text-base text-white  active:text-primary-600"
                >
                  註冊/登入
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
