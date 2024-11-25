import React from 'react'
import { NavLink } from 'react-router-dom';
import PersonalInfo from '../components/PersonalInfo'
import About from '../components/About'
import Counter from '../components/Counter'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import Records from '../records.json'

function Project() {

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full  gap-3'>

        {Records.map((records) => (
          <NavLink
            to={`/Casestudy/${records.id}`}
            key={records.id}
            className="bg-shade_4 rounded-xl hover:opacity-90 cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative"
          >
            <svg className=' h-[50vh]' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.18">
                <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" stroke-width="2" />
                <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" stroke-width="2" />
                <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" stroke-width="2" />
                <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" stroke-width="2" />
                <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" stroke-width="2" />
                <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" stroke-width="2" />
                <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" stroke-width="2" />
                <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" stroke-width="2" />
                <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" stroke-width="2" />
                <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" stroke-width="2" />
                <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" stroke-width="2" />
                <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" stroke-width="2" />
                <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" stroke-width="2" />
                <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" stroke-width="2" />
                <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" stroke-width="2" />
                <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" stroke-width="2" />
                <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" stroke-width="2" />
                <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" stroke-width="2" />
              </g>
            </svg>
            <img src={records.mockup} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-5' />
            <div className="group z-20 w-full h-full p-2 font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
              <div className="transition-all duration-300 ease-linear translate-y-0 group-hover:translate-y-48  bg-shade_7 text-shade_6 bg-opacity-50 backdrop-blur-2xl p-5 rounded-lg w-full">
                <div className=" text-xl sm:text-2xl truncate text-center">
                {records.Title}
                </div>
              </div>
            </div>
          </NavLink>
        ))}

        {/* <a href='#' className=" bg-shade_4 rounded-xl hover:opacity-90 cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative">
          <svg className=' h-[50vh]' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" stroke-width="2" />
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" stroke-width="2" />
              <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" stroke-width="2" />
              <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" stroke-width="2" />
            </g>
          </svg>
          <img src={card} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-5' />
          <div className="group z-20 w-full h-full p-2 font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
            <div className="transition-all duration-300 ease-linear translate-y-0 group-hover:translate-y-48  bg-shade_7 text-shade_6 bg-opacity-50 backdrop-blur-2xl p-5 rounded-lg w-full">
              <div className=" text-xl sm:text-2xl truncate text-center">
                Directory App
              </div>
            </div>
          </div>
        </a>

        <a href='#' className=" bg-shade_4 rounded-xl hover:opacity-90 cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative">
          <svg className=' h-[50vh]' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" stroke-width="2" />
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" stroke-width="2" />
              <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" stroke-width="2" />
              <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" stroke-width="2" />
            </g>
          </svg>
          <img src={card2} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-5' />
          <div className="group z-20 w-full h-full p-2 font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
            <div className="transition-all duration-300 ease-linear translate-y-0 group-hover:translate-y-48  bg-shade_7 text-shade_6 bg-opacity-50 backdrop-blur-2xl p-5 rounded-lg w-full">
              <div className=" text-xl sm:text-2xl truncate text-center">
                ConnectFm
              </div>
            </div>
          </div>
        </a>

        <a href='#' className=" bg-shade_4 rounded-xl hover:opacity-90 cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative">
          <svg className=' h-[50vh]' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" stroke-width="2" />
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" stroke-width="2" />
              <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" stroke-width="2" />
              <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" stroke-width="2" />
            </g>
          </svg>
          <img src={card} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-5' />
          <div className="group z-20 w-full h-full p-2 font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
            <div className="transition-all duration-300 ease-linear translate-y-0 group-hover:translate-y-48  bg-shade_7 text-shade_6 bg-opacity-50 backdrop-blur-2xl p-5 rounded-lg w-full">
              <div className=" text-xl sm:text-2xl truncate text-center">
                Directory App
              </div>
            </div>
          </div>
        </a>

        <a href='#' className=" bg-shade_4 rounded-xl hover:opacity-90 cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative">
          <svg className=' h-[50vh]' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" stroke-width="2" />
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" stroke-width="2" />
              <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" stroke-width="2" />
              <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" stroke-width="2" />
            </g>
          </svg>
          <img src={card2} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-5' />
          <div className="group z-20 w-full h-full p-2 font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
            <div className="transition-all duration-300 ease-linear translate-y-0 group-hover:translate-y-48  bg-shade_7 text-shade_6 bg-opacity-50 backdrop-blur-2xl p-5 rounded-lg w-full">
              <div className=" text-xl sm:text-2xl truncate text-center">
                ConnectFm
              </div>
            </div>
          </div>
        </a>

        <a href='#' className=" bg-shade_4 rounded-xl hover:opacity-90 cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative">
          <svg className=' h-[50vh]' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.18">
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" stroke-width="2" />
              <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" stroke-width="2" />
              <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" stroke-width="2" />
              <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" stroke-width="2" />
              <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" stroke-width="2" />
              <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" stroke-width="2" />
              <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" stroke-width="2" />
              <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" stroke-width="2" />
              <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" stroke-width="2" />
              <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" stroke-width="2" />
              <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" stroke-width="2" />
            </g>
          </svg>
          <img src={card} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-5' />
          <div className="group z-20 w-full h-full p-2 font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
            <div className="transition-all duration-300 ease-linear translate-y-0 group-hover:translate-y-48  bg-shade_7 text-shade_6 bg-opacity-50 backdrop-blur-2xl p-5 rounded-lg w-full">
              <div className=" text-xl sm:text-2xl truncate text-center">
                Directory App
              </div>
            </div>
          </div>
        </a> */}

      </div>
    </>

  )
}

export default Project