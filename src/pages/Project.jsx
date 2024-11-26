import React,{useEffect} from "react";
import { NavLink } from 'react-router-dom';
import Records from "../data/CaseData";


const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full  gap-3'>
        {Records.map((records) => (
          <NavLink to={`/Casestudy/${records.id}`} key={records.id} className="bg-shade_3 bg-opacity-40 border-2 border-shade_3 rounded-xl hover:shadow-lg  cursor-pointer active:opacity-65  overflow-hidden flex justify-center items-center h-80 relative">
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
            <img src={records.mockup} alt=" " className=' absolute p-2 sm:p-5 lg:p-2 xl:p-10' />
            <div className="group z-20 w-full h-full font-semibold rounded-t-xl overflow-hidden shadow-2xl bottom-0 absolute flex items-end">
              <div className="flex justify-between items-end transition-all duration-300 ease-linear translate-y-0 text-shade_6 bg-gradient-to-t from-shade_3 to-transparent p-5 rounded-lg w-full h-full">
              <div className="flex justify-between items-center w-full">
                <div className=" text-xl sm:text-2xl truncate">
                  {records.Title}
                </div>
                <div className=" visible lg:invisible group-hover:visible transition duration-150 ease-out hover:ease-in flex justify-center items-center w-12 h-12 rounded-full rotate-45 bg-shade_1 truncate">
                  <svg width="18" className='' height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1V20M9 1L17 9.14286M9 1L1 9.14286" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}

      </div>
    </>

  )
}

export default Project