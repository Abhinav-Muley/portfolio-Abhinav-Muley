import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "motion/react"
import { NavLink } from "react-router-dom";
import '../index.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <div className="lg:w-auto mb-10 lg:mb-2">
        <div className="px-3 lg:px-10 w-full flex z-50 fixed justify-center max-w-[1600px]">
          <div className="flex flex-row w-full justify-between bg-shade_7 border-[0.002px] border-shade_5 border-opacity-20 backdrop-blur-sm bg-opacity-90 shadow-md --shadow-shade_2 p-3 rounded-xl">
            {/* Left Section */}

            <div className=" block md:hidden justify-between w-full ">

              <div className=" flex w-full justify-between">
                <div className="">
                  <NavLink to="/" className="h-10 w-10 grid place-items-center md:hidden">
                  <svg className=" w-14 flex justify-center items-center" viewBox="0 0 123 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.75 41.25V74.75H11.25L12.25 81.25L53.25 84.25V41.25H43.75Z" fill="#D9D9D9" />
                      <path d="M53.25 12.75L9.75 15.75V58.25H18.75V22.25H53.25V12.75Z" fill="#D9D9D9" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M63.75 12.75V84.25L103.75 81.25L113.25 47.25L104.75 15.75L63.75 12.75ZM72.75 44.75V22.25H98.75L105.25 44.75H72.75ZM72.75 74.75V51.25H105.25L98.75 74.75H72.75Z" fill="#D9D9D9" />
                      <path d="M43.75 41.25V74.75H11.25L12.25 81.25L53.25 84.25V41.25H43.75Z" stroke="white" />
                      <path d="M53.25 12.75L9.75 15.75V58.25H18.75V22.25H53.25V12.75Z" stroke="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M63.75 12.75V84.25L103.75 81.25L113.25 47.25L104.75 15.75L63.75 12.75ZM72.75 44.75V22.25H98.75L105.25 44.75H72.75ZM72.75 74.75V51.25H105.25L98.75 74.75H72.75Z" stroke="white" />
                    </svg>
                  </NavLink>
                </div>
                <div
                  className="h-10 md:w-10 flex justify-between md:hidden"
                  onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu
                >

                  {menuOpen ? (
                    <div className=" w-10 h-10 ">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-md"
                      >
                        <g clipPath="url(#clip0_2004_1445)">
                          <rect width="48" height="48" rx="10" />
                          <rect width="48" height="48" />
                          <path
                            d="M15 15L33 33"
                            stroke="#cccccc"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M33 15L15 33"
                            stroke="#cccccc"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2004_1445">
                            <rect width="48" height="48" rx="10" fill="#cccccc" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  ) : (
                    <div className=" w-10 h-10">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-md"
                      >
                        <g clipPath="url(#clip0_2004_1412)">
                          <rect width="48" height="48" rx="10" />
                          <path
                            d="M10 18.5H38"
                            stroke="#cccccc"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 29.5H26.8"
                            stroke="#cccccc"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2004_1412">
                            <rect width="48" height="48" rx="10" fill="#cccccc" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>

              </div>
              {/* Links for Mobile View */}
              {menuOpen && (

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className=" h-[78lvh] header mb-5 mt-10 flex flex-col justify-between">
                  <div className=" ">
                    <ul className="text-lg text-shade_6 font-normal tracking-wide flex flex-col items-center justify-center gap-8 mt-3 py-10 lg:hidden ">
                      <NavLink
                        to="/"
                        className="text-shade_5 hover:text-shade_6 transition ease-in-out duration-150"
                        onClick={closeMobileMenu}
                      >
                        Home
                      </NavLink>

                      <NavLink
                        to="/Project"
                        className="text-shade_5 hover:text-shade_6 transition ease-in-out duration-150"
                        onClick={closeMobileMenu}
                      >
                        Projects
                      </NavLink>

                      <NavLink
                        to="/Contact"
                        className="text-shade_5 hover:text-shade_6 transition ease-in-out duration-150"
                        onClick={closeMobileMenu}
                      >
                        Contact
                      </NavLink>
                    </ul>
                  </div>

                  <div className=" flex gap-3 justify-center">
                    <NavLink to="https://dribbble.com/siddhant_bilange" target="_blank" className=" h-10 w-10 cursor-pointer">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-full">
                        <g clipPath="url(#clip0_2004_1362)">
                          <path d="M27.7741 28.439C28.5403 30.7092 29.0553 33.0566 29.3101 35.439C28.2463 35.8112 27.1272 36.0009 26.0001 36C24.0173 36.0033 22.0787 35.4141 20.4331 34.308C21.2 32.8871 22.2451 31.635 23.5062 30.6265C24.7672 29.6181 26.2183 28.8738 27.7731 28.438L27.7741 28.439ZM35.5731 28.902C34.8594 31.2484 33.3099 33.2516 31.2181 34.532C30.9372 32.3347 30.4484 30.1689 29.7581 28.064C31.7359 27.8597 33.7335 28.1476 35.5731 28.902ZM26.1451 24.485C26.4778 25.1637 26.7878 25.8547 27.0751 26.558C23.6115 27.5727 20.6722 29.8831 18.8681 33.009C17.8542 31.97 17.0767 30.7242 16.5888 29.357C16.1009 27.9897 15.9141 26.5332 16.0411 25.087C19.3841 25.795 22.9111 25.589 26.1451 24.485ZM33.7201 19.644C35.3861 21.6787 36.19 24.2844 35.9601 26.904C33.7602 26.0762 31.3883 25.8115 29.0601 26.134C28.7385 25.3218 28.3866 24.5219 28.0051 23.736C30.148 22.7393 32.0862 21.3516 33.7201 19.644ZM21.2661 17.19C22.761 18.8846 24.078 20.7283 25.1961 22.692C22.3579 23.5959 19.3331 23.7441 16.4201 23.122C17.1871 20.5814 18.9296 18.4484 21.2661 17.19ZM26.0001 16C28.3881 16 30.5811 16.837 32.3001 18.234C30.8123 19.7959 29.0408 21.0604 27.0801 21.96C25.9765 19.9835 24.6838 18.1188 23.2201 16.392C24.1237 16.1313 25.0596 15.9993 26.0001 16Z" fill="black" />
                          <rect width="48" height="48" rx="10" />
                          <path d="M26.2175 27.0488C27.1752 29.8865 27.819 32.8207 28.1375 35.7988C26.8077 36.264 25.4089 36.5011 24 36.5C21.5215 36.5041 19.0983 35.7676 17.0413 34.385C17.9999 32.6088 19.3063 31.0438 20.8826 29.7832C22.4589 28.5226 24.2728 27.5922 26.2163 27.0475L26.2175 27.0488ZM35.9663 27.6275C35.0741 30.5605 33.1372 33.0644 30.5225 34.665C30.1714 31.9183 29.5603 29.2112 28.6975 26.58C31.1697 26.3246 33.6668 26.6845 35.9663 27.6275ZM24.1813 22.1063C24.5971 22.9546 24.9846 23.8183 25.3438 24.6975C21.0143 25.9659 17.3401 28.8539 15.085 32.7613C13.8177 31.4625 12.8458 29.9053 12.2359 28.1962C11.626 26.4871 11.3925 24.6664 11.5513 22.8588C15.73 23.7438 20.1388 23.4863 24.1813 22.1063ZM33.65 16.055C35.7325 18.5984 36.7374 21.8554 36.45 25.13C33.7002 24.0953 30.7353 23.7644 27.825 24.1675C27.423 23.1522 26.9831 22.1524 26.5063 21.17C29.1849 19.9241 31.6076 18.1895 33.65 16.055ZM18.0825 12.9875C19.9512 15.1058 21.5973 17.4104 22.995 19.865C19.4473 20.9949 15.6662 21.1801 12.025 20.4025C12.9837 17.2268 15.1619 14.5605 18.0825 12.9875ZM24 11.5C26.985 11.5 29.7263 12.5463 31.875 14.2925C30.0152 16.2449 27.8008 17.8255 25.35 18.95C23.9705 16.4794 22.3546 14.1485 20.525 11.99C21.6546 11.6641 22.8244 11.4991 24 11.5Z" fill="#CCCCCC" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2004_1362">
                            <rect width="48" height="48" rx="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/siddhant-bilange" target="_blank" className=" h-10 w-10 cursor-pointer">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-full">
                        <g clipPath="url(#clip0_2004_1382)">
                          <rect width="48" height="48" rx="10" />
                          <path d="M17.6748 15.2498C17.6745 15.9128 17.4108 16.5486 16.9417 17.0172C16.4726 17.4858 15.8366 17.7489 15.1736 17.7485C14.5105 17.7482 13.8748 17.4845 13.4062 17.0154C12.9375 16.5463 12.6745 15.9103 12.6748 15.2473C12.6751 14.5842 12.9388 13.9485 13.4079 13.4799C13.877 13.0113 14.513 12.7482 15.1761 12.7485C15.8391 12.7489 16.4748 13.0126 16.9435 13.4817C17.4121 13.9507 17.6751 14.5867 17.6748 15.2498ZM17.7498 19.5998H12.7498V35.2498H17.7498V19.5998ZM25.6498 19.5998H20.6748V35.2498H25.5998V27.0373C25.5998 22.4623 31.5623 22.0373 31.5623 27.0373V35.2498H36.4998V25.3373C36.4998 17.6248 27.6748 17.9123 25.5998 21.6998L25.6498 19.5998Z" fill="#CCCCCC" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2004_1382">
                            <rect width="48" height="48" rx="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </NavLink>
                    <NavLink to="https://github.com/siddhantbilange" target="_blank" className=" h-10 w-10 cursor-pointer">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-full">
                        <g clipPath="url(#clip0_2004_1396)">
                          <rect width="48" height="48" rx="10" />
                          <path d="M17.7798 11.8874C18.7189 12.2043 19.6121 12.6439 20.436 13.1949C21.6004 12.8969 22.7979 12.7473 23.9998 12.7499C25.241 12.7499 26.4385 12.9049 27.561 13.1936C28.3847 12.6432 29.2774 12.204 30.216 11.8874C31.0873 11.5911 32.3285 11.1111 33.066 11.9274C33.566 12.4824 33.691 13.4124 33.7798 14.1224C33.8798 14.9149 33.9035 15.9474 33.641 16.9724C34.6448 18.2686 35.2498 19.8149 35.2498 21.4999C35.2498 24.0524 33.8673 26.2686 31.821 27.8036C30.8358 28.5323 29.7437 29.1041 28.5835 29.4986C28.851 30.1111 28.9998 30.7886 28.9998 31.4999V35.2499C28.9998 35.5814 28.8681 35.8994 28.6337 36.1338C28.3993 36.3682 28.0813 36.4999 27.7498 36.4999H20.2498C19.9183 36.4999 19.6003 36.3682 19.3659 36.1338C19.1315 35.8994 18.9998 35.5814 18.9998 35.2499V34.0111C17.806 34.1574 16.8048 34.0274 15.9535 33.6661C15.0635 33.2886 14.4435 32.7036 13.9773 32.1436C13.5348 31.6136 13.0523 30.4186 12.3548 30.1861C12.199 30.1343 12.055 30.0522 11.9309 29.9447C11.8068 29.8371 11.7052 29.7062 11.6317 29.5594C11.4833 29.2629 11.4588 28.9195 11.5635 28.6049C11.6683 28.2903 11.8938 28.0302 12.1903 27.8818C12.4868 27.7334 12.8302 27.7089 13.1448 27.8136C13.9773 28.0911 14.5198 28.6911 14.891 29.1736C15.491 29.9486 15.9785 30.9611 16.9285 31.3649C17.3198 31.5311 17.8935 31.6399 18.791 31.5174L18.9998 31.4749C19.0027 30.7947 19.1443 30.1222 19.416 29.4986C18.2559 29.1041 17.1638 28.5323 16.1785 27.8036C14.1323 26.2686 12.7498 24.0536 12.7498 21.4999C12.7498 19.8174 13.3535 18.2724 14.3548 16.9774C14.0923 15.9524 14.1148 14.9174 14.2148 14.1236L14.221 14.0761C14.3123 13.3486 14.4185 12.4924 14.9285 11.9274C15.666 11.1111 16.9085 11.5924 17.7785 11.8886L17.7798 11.8874Z" fill="#CCCCCC" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2004_1396">
                            <rect width="48" height="48" rx="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </NavLink>
                  </div>
                </motion.div>

              )}
            </div>

            {/* Links for Desktop View */}
            <ul className="text-lg text-shade_6 font-normal tracking-wide hidden md:flex justify-between w-full h-full ml-5">
              <div className="flex gap-8 items-center w-full h-full">
                <NavLink to="/" className="h-full">
                    <svg className=" w-14 flex justify-center items-center" viewBox="0 0 123 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.75 41.25V74.75H11.25L12.25 81.25L53.25 84.25V41.25H43.75Z" fill="#D9D9D9" />
                      <path d="M53.25 12.75L9.75 15.75V58.25H18.75V22.25H53.25V12.75Z" fill="#D9D9D9" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M63.75 12.75V84.25L103.75 81.25L113.25 47.25L104.75 15.75L63.75 12.75ZM72.75 44.75V22.25H98.75L105.25 44.75H72.75ZM72.75 74.75V51.25H105.25L98.75 74.75H72.75Z" fill="#D9D9D9" />
                      <path d="M43.75 41.25V74.75H11.25L12.25 81.25L53.25 84.25V41.25H43.75Z" stroke="white" />
                      <path d="M53.25 12.75L9.75 15.75V58.25H18.75V22.25H53.25V12.75Z" stroke="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M63.75 12.75V84.25L103.75 81.25L113.25 47.25L104.75 15.75L63.75 12.75ZM72.75 44.75V22.25H98.75L105.25 44.75H72.75ZM72.75 74.75V51.25H105.25L98.75 74.75H72.75Z" stroke="white" />
                    </svg>
                </NavLink>
                <hr className="bg-shade_5 w-[.1px] h-full" />

                <NavLink
                  to="/"
                  className="text-shade_5 hover:text-shade_6 transition ease-in-out duration-150"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Project"
                  className="text-shade_5 hover:text-shade_6 transition ease-in-out duration-150"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/Contact"
                  className="text-shade_5 hover:text-shade_6 transition ease-in-out duration-150"
                >
                  Contact
                </NavLink>
              </div>

              <div className=" flex gap-3 ">
                <NavLink to="https://dribbble.com/siddhant_bilange" target="_blank" className=" h-10 w-10 cursor-pointer">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-full">
                    <g clipPath="url(#clip0_2004_1362)">
                      <path d="M27.7741 28.439C28.5403 30.7092 29.0553 33.0566 29.3101 35.439C28.2463 35.8112 27.1272 36.0009 26.0001 36C24.0173 36.0033 22.0787 35.4141 20.4331 34.308C21.2 32.8871 22.2451 31.635 23.5062 30.6265C24.7672 29.6181 26.2183 28.8738 27.7731 28.438L27.7741 28.439ZM35.5731 28.902C34.8594 31.2484 33.3099 33.2516 31.2181 34.532C30.9372 32.3347 30.4484 30.1689 29.7581 28.064C31.7359 27.8597 33.7335 28.1476 35.5731 28.902ZM26.1451 24.485C26.4778 25.1637 26.7878 25.8547 27.0751 26.558C23.6115 27.5727 20.6722 29.8831 18.8681 33.009C17.8542 31.97 17.0767 30.7242 16.5888 29.357C16.1009 27.9897 15.9141 26.5332 16.0411 25.087C19.3841 25.795 22.9111 25.589 26.1451 24.485ZM33.7201 19.644C35.3861 21.6787 36.19 24.2844 35.9601 26.904C33.7602 26.0762 31.3883 25.8115 29.0601 26.134C28.7385 25.3218 28.3866 24.5219 28.0051 23.736C30.148 22.7393 32.0862 21.3516 33.7201 19.644ZM21.2661 17.19C22.761 18.8846 24.078 20.7283 25.1961 22.692C22.3579 23.5959 19.3331 23.7441 16.4201 23.122C17.1871 20.5814 18.9296 18.4484 21.2661 17.19ZM26.0001 16C28.3881 16 30.5811 16.837 32.3001 18.234C30.8123 19.7959 29.0408 21.0604 27.0801 21.96C25.9765 19.9835 24.6838 18.1188 23.2201 16.392C24.1237 16.1313 25.0596 15.9993 26.0001 16Z" fill="black" />
                      <rect width="48" height="48" rx="10" />
                      <path d="M26.2175 27.0488C27.1752 29.8865 27.819 32.8207 28.1375 35.7988C26.8077 36.264 25.4089 36.5011 24 36.5C21.5215 36.5041 19.0983 35.7676 17.0413 34.385C17.9999 32.6088 19.3063 31.0438 20.8826 29.7832C22.4589 28.5226 24.2728 27.5922 26.2163 27.0475L26.2175 27.0488ZM35.9663 27.6275C35.0741 30.5605 33.1372 33.0644 30.5225 34.665C30.1714 31.9183 29.5603 29.2112 28.6975 26.58C31.1697 26.3246 33.6668 26.6845 35.9663 27.6275ZM24.1813 22.1063C24.5971 22.9546 24.9846 23.8183 25.3438 24.6975C21.0143 25.9659 17.3401 28.8539 15.085 32.7613C13.8177 31.4625 12.8458 29.9053 12.2359 28.1962C11.626 26.4871 11.3925 24.6664 11.5513 22.8588C15.73 23.7438 20.1388 23.4863 24.1813 22.1063ZM33.65 16.055C35.7325 18.5984 36.7374 21.8554 36.45 25.13C33.7002 24.0953 30.7353 23.7644 27.825 24.1675C27.423 23.1522 26.9831 22.1524 26.5063 21.17C29.1849 19.9241 31.6076 18.1895 33.65 16.055ZM18.0825 12.9875C19.9512 15.1058 21.5973 17.4104 22.995 19.865C19.4473 20.9949 15.6662 21.1801 12.025 20.4025C12.9837 17.2268 15.1619 14.5605 18.0825 12.9875ZM24 11.5C26.985 11.5 29.7263 12.5463 31.875 14.2925C30.0152 16.2449 27.8008 17.8255 25.35 18.95C23.9705 16.4794 22.3546 14.1485 20.525 11.99C21.6546 11.6641 22.8244 11.4991 24 11.5Z" fill="#CCCCCC" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2004_1362">
                        <rect width="48" height="48" rx="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </NavLink>
                <NavLink to="https://www.linkedin.com/in/siddhant-bilange/" target="_blank" className=" h-10 w-10 cursor-pointer">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-full">
                    <g clipPath="url(#clip0_2004_1382)">
                      <rect width="48" height="48" rx="10" />
                      <path d="M17.6748 15.2498C17.6745 15.9128 17.4108 16.5486 16.9417 17.0172C16.4726 17.4858 15.8366 17.7489 15.1736 17.7485C14.5105 17.7482 13.8748 17.4845 13.4062 17.0154C12.9375 16.5463 12.6745 15.9103 12.6748 15.2473C12.6751 14.5842 12.9388 13.9485 13.4079 13.4799C13.877 13.0113 14.513 12.7482 15.1761 12.7485C15.8391 12.7489 16.4748 13.0126 16.9435 13.4817C17.4121 13.9507 17.6751 14.5867 17.6748 15.2498ZM17.7498 19.5998H12.7498V35.2498H17.7498V19.5998ZM25.6498 19.5998H20.6748V35.2498H25.5998V27.0373C25.5998 22.4623 31.5623 22.0373 31.5623 27.0373V35.2498H36.4998V25.3373C36.4998 17.6248 27.6748 17.9123 25.5998 21.6998L25.6498 19.5998Z" fill="#CCCCCC" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2004_1382">
                        <rect width="48" height="48" rx="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </NavLink>
                <NavLink to="https://github.com/siddhantbilange" target="_blank" className=" h-10 w-10 cursor-pointer">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-shade_3 hover:bg-shade_4 transition ease-out duration-100 rounded-full">
                    <g clipPath="url(#clip0_2004_1396)">
                      <rect width="48" height="48" rx="10" />
                      <path d="M17.7798 11.8874C18.7189 12.2043 19.6121 12.6439 20.436 13.1949C21.6004 12.8969 22.7979 12.7473 23.9998 12.7499C25.241 12.7499 26.4385 12.9049 27.561 13.1936C28.3847 12.6432 29.2774 12.204 30.216 11.8874C31.0873 11.5911 32.3285 11.1111 33.066 11.9274C33.566 12.4824 33.691 13.4124 33.7798 14.1224C33.8798 14.9149 33.9035 15.9474 33.641 16.9724C34.6448 18.2686 35.2498 19.8149 35.2498 21.4999C35.2498 24.0524 33.8673 26.2686 31.821 27.8036C30.8358 28.5323 29.7437 29.1041 28.5835 29.4986C28.851 30.1111 28.9998 30.7886 28.9998 31.4999V35.2499C28.9998 35.5814 28.8681 35.8994 28.6337 36.1338C28.3993 36.3682 28.0813 36.4999 27.7498 36.4999H20.2498C19.9183 36.4999 19.6003 36.3682 19.3659 36.1338C19.1315 35.8994 18.9998 35.5814 18.9998 35.2499V34.0111C17.806 34.1574 16.8048 34.0274 15.9535 33.6661C15.0635 33.2886 14.4435 32.7036 13.9773 32.1436C13.5348 31.6136 13.0523 30.4186 12.3548 30.1861C12.199 30.1343 12.055 30.0522 11.9309 29.9447C11.8068 29.8371 11.7052 29.7062 11.6317 29.5594C11.4833 29.2629 11.4588 28.9195 11.5635 28.6049C11.6683 28.2903 11.8938 28.0302 12.1903 27.8818C12.4868 27.7334 12.8302 27.7089 13.1448 27.8136C13.9773 28.0911 14.5198 28.6911 14.891 29.1736C15.491 29.9486 15.9785 30.9611 16.9285 31.3649C17.3198 31.5311 17.8935 31.6399 18.791 31.5174L18.9998 31.4749C19.0027 30.7947 19.1443 30.1222 19.416 29.4986C18.2559 29.1041 17.1638 28.5323 16.1785 27.8036C14.1323 26.2686 12.7498 24.0536 12.7498 21.4999C12.7498 19.8174 13.3535 18.2724 14.3548 16.9774C14.0923 15.9524 14.1148 14.9174 14.2148 14.1236L14.221 14.0761C14.3123 13.3486 14.4185 12.4924 14.9285 11.9274C15.666 11.1111 16.9085 11.5924 17.7785 11.8886L17.7798 11.8874Z" fill="#CCCCCC" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2004_1396">
                        <rect width="48" height="48" rx="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
