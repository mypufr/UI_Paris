// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
// function Header() {

//   const [isOpen, setIsOpen] = useState(false);

//      const toggleMenu = () => {
//        setIsOpen(!isOpen);
//      };
//   return (
//     <>
//     <div className="relative">

//       <div>
//         <div className="flex py-5 max-w-[1296px] mx-auto">
//           <div className="flex">
//             <Link to="/" className="inline-flex cursor-pointer">
//               <div>
//                 <img
//                   src="images/website_logo.png"
//                   alt="logo"
//                 />
//               </div>
//               <div className="onClick={() => window.location.href = '/'} flex flex-col justify-around">
//                 <div>
//                   <h1 className="inline-block text-[20px] font-bold leading-6 text-secondary-600">
//                     樂遊巴黎
//                     <span className="inline-block ps-2 text-[20px] font-bold leading-6 text-primary-600">
//                       Paris, mon guide
//                     </span>
//                   </h1>
//                 </div>
//                 <p className="text-[14px] font-normal leading-[1.5] text-blue-50">
//                   在地導遊媒合平台
//                 </p>
//               </div>
//             </Link>
//           </div>

//           <ul className="hidden ms-[9.9%] lg:flex items-center justify-between space-x-16">
//             <li className="text-base leading-[22.4px] text-grey-950">
//               <Link to="/search-tourguides" className="text-primary-500 hover:font-bold">
//                 隨行導遊趣
//               </Link>
//             </li>
//             <li className="text-base leading-[22.4px] text-grey-950">
//               <Link to="/book-trips" className="text-primary-500 hover:font-bold">
//                 行程搶先報
//               </Link>
//             </li>
//             <li className="text-base leading-[22.4px] text-grey-950">
//               <Link to="/sites-info" className="text-primary-500 hover:font-bold">
//                 推薦景點
//               </Link>
//             </li>
//             <li className="text-base leading-[22.4px] text-grey-950">
//               <Link to="/travel-info" className="text-primary-500 hover:font-bold">
//                 旅行指南
//               </Link>
//             </li>
//             <li className="ps-[180px] text-base leading-[22.4px] text-grey-950">
//               <button className="rounded-2xl bg-primary-600 text-base font-normal hover:bg-primary-300 active:bg-transparent active:border active:border-primary-600  transition-colors duration-200">
//                 <Link
//                   to="/sign-up"
//                   className="my-2 inline-block px-5 text-base text-white  active:text-primary-600"
//                 >
//                   註冊/登入
//                 </Link>
//               </button>
//             </li>
//           </ul>

//    {/* Hamburger Icon - visible on smaller screens */}
//            <div className="lg:hidden">
//           <button onClick={toggleMenu} className="text-primary-500">
//              {isOpen ? <HiOutlineX className="h-8 w-8" /> : <HiOutlineMenuAlt3 className="h-8 w-8" />}
//            </button>
//          </div>
//        </div>

//        {/* Mobile Menu - visible when isOpen is true */}
//        {isOpen && (
//          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
//            <ul className="flex flex-col items-start p-4 space-y-4">
//              <li>
//                <Link
//                  to="/search-tourguides"
//                  className="block text-base text-primary-500 hover:font-bold"
//                  onClick={toggleMenu}
//                >
//                  隨行導遊趣
//                </Link>
//              </li>
//              <li>
//                <Link
//                  to="/book-trips"
//                  className="block text-base text-primary-500 hover:font-bold"
//                  onClick={toggleMenu}
//                >
//                  行程搶先報
//                </Link>
//              </li>
//              <li>
//                <Link
//                  to="/sites-info"
//                  className="block text-base text-primary-500 hover:font-bold"
//                  onClick={toggleMenu}
//                >
//                  推薦景點
//                </Link>
//              </li>
//              <li>
//                <Link
//                  to="/travel-info"
//                  className="block text-base text-primary-500 hover:font-bold"
//                  onClick={toggleMenu}
//                >
//                  旅行指南
//                </Link>
//              </li>
//              <li>
//                <Link
//                  to="/sign-up"
//                  className="block w-full text-base bg-primary-600 text-white py-2 px-4  text-center"
//                  onClick={toggleMenu}
//                >
//                  註冊/登入
//                </Link>
//              </li>
//            </ul>
//          </div>
//        )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

// RWD

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { SlArrowRight } from "react-icons/sl";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    toggleMenu(); // This closes the menu after clicking the item
  };

  return (
    <div className="relative">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link to="/" className="flex cursor-pointer items-center">
          <img src="images/website_logo.png" alt="logo" className="h-10" />
          <div className="flex flex-col justify-around">
            <h1 className="text-[20px] font-bold leading-6 text-secondary-600">
              樂遊巴黎
              <span className="ps-2 text-[20px] font-bold text-primary-600">
                Paris, mon guide
              </span>
            </h1>
            <p className="text-[14px] leading-[1.5] text-blue-50">
              在地導遊媒合平台
            </p>
          </div>
        </Link>

        {/* Desktop Menu - visible on larger screens */}
        <ul className="hidden items-center justify-between space-x-16 lg:flex">
          <li className="text-base leading-[22.4px] text-grey-950">
            <Link
              to="/search-tourguides"
              className="text-primary-500 hover:font-bold"
            >
              隨行導遊趣
            </Link>
          </li>
          <li className="text-base leading-[22.4px] text-grey-950">
            <Link to="/book-trips" className="text-primary-500 hover:font-bold">
              行程搶先報
            </Link>
          </li>
          <li className="text-base leading-[22.4px] text-grey-950">
            <Link to="/sites-info" className="text-primary-500 hover:font-bold">
              推薦景點
            </Link>
          </li>
          <li className="text-base leading-[22.4px] text-grey-950">
            <Link
              to="/travel-info"
              className="text-primary-500 hover:font-bold"
            >
              旅行指南
            </Link>
          </li>
          <li className="ps-[180px]">
            <button className="rounded-2xl bg-primary-600 text-base font-normal transition-colors duration-200 hover:bg-primary-300">
              <Link
                to="/sign-up"
                className="my-2 inline-block px-5 text-base text-white"
              >
                註冊/登入
              </Link>
            </button>
          </li>
        </ul>

        {/* Hamburger Icon - visible on smaller screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-primary-500">
            {isOpen ? (
              <HiOutlineX className="h-8 w-8" />
            ) : (
              <HiOutlineMenuAlt3 className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - visible when isOpen is true */}
      {isOpen && (
        <div className="absolute left-0 top-full z-10 shadow-lg lg:hidden w-full">

          <div className="absolute right-0 top-0 bg-white w-[45%]">

          <ul className="flex flex-col justify-items-end">


            <li className="flex items-center justify-between px-2 py-4 transition-colors duration-300 hover:bg-grey-100  hover:text-white">
              <Link
                to="/travel-info"
                className="block w-full text-base text-primary-500 transition-colors duration-300 hover:font-bold hover:text-white"
                onClick={toggleMenu}
              >
                <p className="text-base text-primary-500 hover:font-bold hover:text-white">
                  隨行導遊趣
                </p>
              </Link>
              <SlArrowRight className="" />
            </li>

            <li className="flex items-center justify-between px-2 py-4 transition-colors duration-300 hover:bg-grey-100  hover:text-white">
              <Link
                to="/travel-info"
                className="block w-full text-base text-primary-500 transition-colors duration-300 hover:font-bold hover:text-white"
                onClick={toggleMenu}
              >
                <p className="text-base text-primary-500 hover:font-bold hover:text-white">
                  行程搶先報
                </p>
              </Link>
              <SlArrowRight className="" />
            </li>

            <li className="flex items-center justify-between px-2 py-4 transition-colors duration-300 hover:bg-grey-100  hover:text-white">
              <Link
                to="/travel-info"
                className="block w-full text-base text-primary-500 transition-colors duration-300 hover:font-bold hover:text-white"
                onClick={toggleMenu}
              >
                <p className="text-base text-primary-500 hover:font-bold hover:text-white">
                  推薦景點
                </p>
              </Link>
              <SlArrowRight className="" />
            </li>

            <li className="flex items-center justify-between px-2 py-4 transition-colors duration-300 hover:bg-grey-100  hover:text-white">
              <Link
                to="/travel-info"
                className="block w-full text-base text-primary-500 transition-colors duration-300 hover:font-bold hover:text-white"
                onClick={toggleMenu}
              >
                <p className="text-base text-primary-500 hover:font-bold hover:text-white">
                  旅行指南
                </p>
              </Link>
              <SlArrowRight className="" />
            </li>


            <li className="">
              <button
                to="/sign-up"
                className="block w-full bg-primary-600 px-4 py-2 text-center text-base text-white"
                onClick={toggleMenu}
              >
                註冊/登入
              </button>
            </li>
          </ul>

          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // 控制選單是否展開

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Header Container */}
//       <div className="flex py-5 px-4 md:px-6 max-w-[1296px] mx-auto items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center cursor-pointer">
//           <img src="images/website_logo.png" alt="logo" className="h-10" />
//           <div className="flex flex-col justify-around">
//             <h1 className="text-[20px] font-bold leading-6 text-secondary-600">
//               樂遊巴黎
//               <span className="ps-2 text-[20px] font-bold text-primary-600">
//                 Paris, mon guide
//               </span>
//             </h1>
//             <p className="text-[14px] leading-[1.5] text-blue-50">
//               在地導遊媒合平台
//             </p>
//           </div>
//         </Link>

//         {/* Desktop Menu - visible on larger screens */}
//         <ul className="hidden md:flex items-center justify-between space-x-16">
//           <li className="text-base leading-[22.4px] text-grey-950">
//             <Link to="/search-tourguides" className="text-primary-500 hover:font-bold">
//               隨行導遊趣
//             </Link>
//           </li>
//           <li className="text-base leading-[22.4px] text-grey-950">
//             <Link to="/book-trips" className="text-primary-500 hover:font-bold">
//               行程搶先報
//             </Link>
//           </li>
//           <li className="text-base leading-[22.4px] text-grey-950">
//             <Link to="/sites-info" className="text-primary-500 hover:font-bold">
//               推薦景點
//             </Link>
//           </li>
//           <li className="text-base leading-[22.4px] text-grey-950">
//             <Link to="/travel-info" className="text-primary-500 hover:font-bold">
//               旅行指南
//             </Link>
//           </li>
//           <li className="ps-[180px]">
//             <button className="rounded-2xl bg-primary-600 text-base font-normal hover:bg-primary-300 transition-colors duration-200">
//               <Link to="/sign-up" className="my-2 inline-block px-5 text-base text-white">
//                 註冊/登入
//               </Link>
//             </button>
//           </li>
//         </ul>

//         {/* Hamburger Icon - visible on smaller screens */}
//         <div className="block md-hidden">
//           <button onClick={toggleMenu} className="text-primary-500">
//             {isOpen ? <HiOutlineX className="h-8 w-8" /> : <HiOutlineMenuAlt3 className="h-8 w-8" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - visible when isOpen is true */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
//           <ul className="flex flex-col items-start p-4 space-y-4">
//             <li>
//               <Link
//                 to="/search-tourguides"
//                 className="block text-lg text-primary-500 hover:font-bold"
//                 onClick={toggleMenu}
//               >
//                 隨行導遊趣
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/book-trips"
//                 className="block text-lg text-primary-500 hover:font-bold"
//                 onClick={toggleMenu}
//               >
//                 行程搶先報
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/sites-info"
//                 className="block text-lg text-primary-500 hover:font-bold"
//                 onClick={toggleMenu}
//               >
//                 推薦景點
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/travel-info"
//                 className="block text-lg text-primary-500 hover:font-bold"
//                 onClick={toggleMenu}
//               >
//                 旅行指南
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/sign-up"
//                 className="block w-full text-lg bg-primary-600 text-white py-2 px-4 rounded-2xl text-center"
//                 onClick={toggleMenu}
//               >
//                 註冊/登入
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;
