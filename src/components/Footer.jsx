import React from "react";
import {useState} from "react";
import { RiInstagramFill } from "react-icons/ri";

import { Link } from "react-router-dom";



function Footer() {

  const [startDate, setStartDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  
  return (
    <>
      {/* footer */}
      <footer className="relative">
        <div>
          <img
            src="/images/footer_background.png"
            alt=""
            className="block w-full"
          />
        </div>
        <div className="relative -top-1 h-[420px] bg-primary-600"></div>

        <div>
          <img
            src="/images/footer_img.png"
            alt=""
            className="absolute bottom-[150px] right-[400px]"
          />
        </div>

        {/* Footer text */}
        <div className="absolute left-[20%] top-[30%]">
          <ul className="space-y-6 text-base text-grey-100">
            <li className="flex">
              <Link to="/" className="inline-flex cursor-pointer">
                <div>
                  <img src="/images/website_logo.png" alt="logo" />
                </div>
                <div className="onClick={() => window.location.href = '/'} flex flex-col justify-around">
                  <div>
                    <h1 className="inline-block text-[20px] font-bold leading-6 text-secondary-600">
                      樂遊巴黎
                      <span className="inline-block ps-2 text-[20px] font-bold leading-6 text-primary-100">
                        Paris, mon guide
                      </span>
                    </h1>
                  </div>
                  <p className="text-[14px] font-normal leading-[1.5] text-white">
                    在地導遊媒合平台
                  </p>
                </div>
              </Link>
            </li>

            <li className="flex space-x-6">
              <span className="">
                <Link to="/about">關於我們</Link>
              </span>

              <span className="">
                <Link to="#">聯絡我們</Link>
              </span>
            </li>
            <li>
              <Link to="tel:+37653421">
                <img
                  src="/images/call.svg"
                  alt="call icon"
                  className="inline-block"
                />

                <p className="ml-3 inline-block">03-7653421</p>
              </Link>
            </li>
            <li className="">
              <Link to="mailto:info@hexschool.com">
                <img
                  src="/images/location_on.svg"
                  alt=""
                  className="inline-block"
                />
                <p className="ml-3 inline-block">Paris-mon-guide@gmail.com</p>
              </Link>
            </li>
            <li className="flex space-x-4">
              <Link to="/">
                <img
                  src="/images/facebook.svg"
                  alt="facebook-link"
                  className="inline-block"
                />
              </Link>
              <Link
                to="/"
                className="inline-block rounded-full border-2 border-white p-2"
              >
    

<RiInstagramFill className="text-xl" />
              </Link>
              <Link to="/">
                <img
                  src="/images/twitter_logo.svg"
                  alt="line-link"
                  className="inline-block h-10 max-w-10 rounded-full"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-[15%] right-[19%]">
          <p className="text-base text-grey-100">© 2024 樂遊巴黎版權所有</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
