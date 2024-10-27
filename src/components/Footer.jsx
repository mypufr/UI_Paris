// import React from "react";
// import {useState} from "react";
// import { RiInstagramFill } from "react-icons/ri";

// import { Link } from "react-router-dom";



// function Footer() {

 
//   return (
//     <>
//       {/* footer */}
//       <footer className="relative">
//         <div>
//           <img
//             src="/images/footer_background.png"
//             alt=""
//             className="block w-full"
//           />
//         </div>
//         <div className="relative -top-1 h-[420px] bg-primary-600"></div>

//         <div>
//           <img
//             src="/images/footer_img.png"
//             alt=""
//             className="absolute bottom-[150px] right-[400px]"
//           />
//         </div>

//         {/* Footer text */}
//         <div className="absolute left-[20%] top-[30%]">
//           <ul className="space-y-6 text-base text-grey-100">
//             <li className="flex">
//               <Link to="/" className="inline-flex cursor-pointer">
//                 <div>
//                   <img src="/images/website_logo.png" alt="logo" />
//                 </div>
//                 <div className="onClick={() => window.location.href = '/'} flex flex-col justify-around">
//                   <div>
//                     <h1 className="inline-block text-[20px] font-bold leading-6 text-secondary-600">
//                       樂遊巴黎
//                       <span className="inline-block ps-2 text-[20px] font-bold leading-6 text-primary-100">
//                         Paris, mon guide
//                       </span>
//                     </h1>
//                   </div>
//                   <p className="text-[14px] font-normal leading-[1.5] text-white">
//                     在地導遊媒合平台
//                   </p>
//                 </div>
//               </Link>
//             </li>

//             <li className="flex space-x-6">
//               <span className="">
//                 <Link to="/about">關於我們</Link>
//               </span>

//               <span className="">
//                 <Link to="#">聯絡我們</Link>
//               </span>
//             </li>
//             <li>
//               <Link to="tel:+37653421">
//                 <img
//                   src="/images/call.svg"
//                   alt="call icon"
//                   className="inline-block"
//                 />

//                 <p className="ml-3 inline-block">03-7653421</p>
//               </Link>
//             </li>
//             <li className="">
//               <Link to="mailto:info@hexschool.com">
//                 <img
//                   src="/images/location_on.svg"
//                   alt=""
//                   className="inline-block"
//                 />
//                 <p className="ml-3 inline-block">Paris-mon-guide@gmail.com</p>
//               </Link>
//             </li>
//             <li className="flex space-x-4">
//               <Link to="/">
//                 <img
//                   src="/images/facebook.svg"
//                   alt="facebook-link"
//                   className="inline-block"
//                 />
//               </Link>
//               <Link
//                 to="/"
//                 className="inline-block rounded-full border-2 border-white p-2"
//               >
    

// <RiInstagramFill className="text-xl" />
//               </Link>
//               <Link to="/">
//                 <img
//                   src="/images/twitter_logo.svg"
//                   alt="line-link"
//                   className="inline-block h-10 max-w-10 rounded-full"
//                 />
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="absolute bottom-[15%] right-[19%]">
//           <p className="text-base text-grey-100">© 2024 樂遊巴黎版權所有</p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;


import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="relative">
        {/* 背景圖片 */}
        <div className="hidden lg:block">
          <img
            src="/images/footer_background.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="relative -top-1 h-[420px] bg-primary-600" >



        {/* 右側圖片 - 在小螢幕隱藏 */}
        <div className="absolute bottom-[150px] right-[400px] hidden 1830px:block">
          <img src="https://i.imgur.com/IKExSXw.png" alt="footer_img" 
          className="w-full h-auto"/>
        </div>

        {/* Footer 文字部分 */}
        <div className="absolute left-[20%] top-[30%] md:left-[30%] md:top-[20%]">
          <ul className="space-y-6 text-base text-grey-100">
            {/* 標誌 */}
            <li className="flex">
              <Link to="/" className="inline-flex cursor-pointer">
                <div>
                  <img
                    src="/images/website_logo.png"
                    alt="logo"
                    className="w-16 h-16"
                  />
                </div>
                <div className="flex flex-col justify-around">
                  <div>
                    <h1 className="md:text-[20px] font-bold leading-6 text-secondary-600">
                      樂遊巴黎
                      <span className="ps-2 text-primary-100">
                        Paris, mon guide
                      </span>
                    </h1>
                  </div>
                  <p className="text-[14px] md:text-[14px] font-normal leading-[1.5] text-white">
                    在地導遊媒合平台
                  </p>
                </div>
              </Link>
            </li>

            {/* 導覽連結 */}
            <li className="flex space-x-6">
              <span>
                <Link to="/about">關於我們</Link>
              </span>

              <span>
                <Link to="#">聯絡我們</Link>
              </span>
            </li>

            {/* 聯繫資訊 */}
            <li>
              <Link to="tel:+37653421" className="flex items-center">
                <img
                  src="/images/call.svg"
                  alt="call icon"
                  className="inline-block w-6 h-6"
                />
                <p className="ml-3 inline-block">03-7653421</p>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="mailto:info@hexschool.com">
                <img
                  src="/images/location_on.svg"
                  alt=""
                  className="inline-block w-6 h-6"
                />
                <p className="ml-3 inline-block">Paris-mon-guide@gmail.com</p>
              </Link>
            </li>

            {/* 社群連結 */}
            <li className="flex space-x-4">
              <Link to="/">
                <img
                  src="/images/facebook.svg"
                  alt="facebook-link"
                  className="inline-block w-8 h-8"
                />

              </Link>
              <Link to="/" className="inline-block rounded-full border-2 border-white p-2">
                <RiInstagramFill className="text-sm" />
              </Link>
              <Link to="/">
                <img
                  src="/images/twitter_logo.svg"
                  alt="line-link"
                  className="inline-block w-8 h-8 rounded-full"
                />
              </Link>
            </li>
          </ul>
        </div>


        </div>


        {/* 版權聲明 */}
        <div className="absolute bottom-5 right-1/2 transform translate-x-1/2 md:bottom-[15%] md:right-[19%]">
          <p className="text-center text-base text-grey-100">
            © 2024 樂遊巴黎版權所有
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
