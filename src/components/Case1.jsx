import React, { useEffect } from 'react';
import video from '../assets/connectfm/macbook.mp4'
import img1 from '../assets/connectfm/Desktop Landing Page.png'
import logo from '../assets/connectfm/logo.png'
import '../index.css'

function Case1() {
  useEffect(() => {
    const elementToAnimate = document.getElementById('elementToAnimate');
    if (elementToAnimate) {
      elementToAnimate.classList.add('fade-in');
    }
  }, []);
  return (
    <>
      <section className=" grid gap-5  w-full bg-shade_5 overflow-hidden relative rounded-lg">
        {/* <div className="top"></div> */}
        <div className="">
          
        </div>
        <div className=" absolute mx-auto top-1/4 z-0 w-full">
          <svg className=' md:w-[80%] mx-auto' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <div className="bottom mt-[14%] sm:mt-[10%] flex justify-center relative h-[40vh] sm:h-[70vh] md:h-[60vh] xl:h-[70vh] 2xl:h-[70vh]">
          <div id="elementToAnimate" className=" absolute w-3/4 sm:w-2/4 flex justify-center rounded-md shadow-lg  shadow-shade_3 z-20 ">
            <img src={img1} className="rounded-md" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Case1;
