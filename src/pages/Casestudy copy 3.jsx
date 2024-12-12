import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Records from "../data/CaseData";
import FlickeringGrid from "../components/ui/flickering-grid";
import { BorderBeam } from "../components/ui/border-beam";
import Userflow from '../components/userflow';


const Casestudy = () => {



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const elementToAnimate = document.getElementById('elementToAnimate');
    if (elementToAnimate) {
      elementToAnimate.classList.add('fade-in');
    }


    const foundCase = Records.find((data) => data.id === Number(id));
    setCaseData(foundCase);
  }, [id]);

  if (!caseData) {
    return <div className=' text-white'>Loading...</div>;
  }





  // Userflow

  const [activeColor, setActiveColor] = useState('red');
  const [isVisible, setIsVisible] = useState(true);
  const [Userflow, setUserflow] = useState(Records[0]); // Select the first record by default

  const handleButtonClick = (color) => {
    setIsVisible(false); // Start the fade-out effect
    setTimeout(() => {
      setActiveColor(color);
      setIsVisible(true); // Start the fade-in effect
    }, 500); // Match this duration with the CSS transition duration
  };


  if (!caseData) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div>
    );
  }

  return (
    <>
      <section className=' grid gap-5 xl:gap-20'>
        <div className=' grid gap-5 xl:gap-20'>
          <div className='grid gap-5 relative '>
            <div className=" grid gap-5 w-full py-20 --bg-shade_3 bg-gradient-to-t from-shade_4 to-shade_3 overflow-hidden relative rounded-lg">
              <div className=" absolute mx-auto top-5 md:top-1/4 z-0 w-full">
                <svg className=' w-[100%] md:w-[80%] mx-auto' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.18">
                    <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="black" strokeWidth="2" />
                    <rect x="101.849" y="99.1602" width="74.6456" height="186.252" rx="37.3228" stroke="white" strokeWidth="2" />
                    <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="black" strokeWidth="2" />
                    <rect x="89.7476" y="88.403" width="96.1602" height="209.112" rx="48.0801" stroke="#F4F4F4" strokeWidth="2" />
                    <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="black" strokeWidth="2" />
                    <rect x="80.3349" y="78.9903" width="116.33" height="227.937" rx="58.1651" stroke="#E8E8E8" strokeWidth="2" />
                    <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="black" strokeWidth="2" />
                    <rect x="69.5777" y="68.233" width="136.5" height="249.451" rx="68.25" stroke="#DFDFDF" strokeWidth="2" />
                    <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="black" strokeWidth="2" />
                    <rect x="58.8204" y="58.8203" width="159.359" height="268.277" rx="79.6796" stroke="#D1D1D1" strokeWidth="2" />
                    <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="black" strokeWidth="2" />
                    <rect x="46.7184" y="48.063" width="182.218" height="289.791" rx="91.1092" stroke="#CACACA" strokeWidth="2" />
                    <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="black" strokeWidth="2" />
                    <rect x="35.9612" y="37.3059" width="205.078" height="311.306" rx="102.539" stroke="#BABABA" strokeWidth="2" />
                    <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="black" strokeWidth="2" />
                    <rect x="23.8592" y="25.2039" width="227.937" height="335.51" rx="113.968" stroke="#A1A1A1" strokeWidth="2" />
                    <rect x="13.1019" y="14.4465" width="250.796" height="357.024" rx="125.398" stroke="#8D8D8D" strokeWidth="2" />
                    <rect x="1" y="1" width="275" height="383.917" rx="135" stroke="#656565" strokeWidth="2" />
                  </g>
                </svg>
              </div>
              {/* <h1 className='absolute top-2 z-0 text-center text-4xl w-full'>{caseData.Title}</h1> */}
              <div className="bottom flex justify-center items-center relative h-[25vh] sm:h-[70vh] md:h-[60vh] xl:h-[70vh] 2xl:h-[70vh]">
                <div id="elementToAnimate" className=" absolute p-3 md:p-0 sm:w-3/5 flex justify-center rounded-md  z-20 ">
                  <img src={caseData.mockup} className="rounded-md" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className="grid gap-5 overflow-hidden">
              <div className="grid gap-3 md:gap-5">
                <div className="grid gap-3 h-full rounded-lg p-5 overflow-hidden bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_5 border-opacity-20">
                  <div className="heading bg-clip-text text-transparent bg-gradient-to-r from-shade_1 to-shade_5 font-semibold text-lg sm:text-md md:text-xl row-start-1">Summary</div>
                  <p className=" text-shade_5 font-medium text-base sm:text-2xl">{caseData.Problem_Statement}</p>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-3">
                  <div className="grid col-span-1 gap-3 h-full md:h-full rounded-lg p-5 overflow-hidden bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_5 border-opacity-20">
                    <div className="heading bg-clip-text text-transparent bg-gradient-to-r from-shade_1 to-shade_5 font-semibold text-lg sm:text-md md:text-xl">Role</div>
                    <p className=" text-shade_5 font-medium text-base sm:text-2xl">{caseData.Role}</p>
                  </div>

                  <div className="grid col-span-1 gap-3 h-full md:h-full rounded-lg p-5 overflow-hidden bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_5 border-opacity-20">
                    <div className="heading bg-clip-text text-transparent bg-gradient-to-r from-shade_1 to-shade_5 font-semibold text-lg sm:text-md md:text-xl ">Tools</div>
                    <div className=" flex flex-wrap gap-3">
                      <div className="h-12 w-12 bg-shade_3 shadow-inner shadow-shade_4 rounded-lg ">
                        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect rx="6" fill="#282828" />
                          <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                        </svg>
                      </div>

                      <div className="h-12 w-12 bg-shade_3 shadow-inner shadow-shade_4 rounded-lg ">
                        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect rx="6" fill="#282828" />
                          <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                        </svg>
                      </div>

                      <div className="h-12 w-12 bg-shade_3 shadow-inner shadow-shade_4 rounded-lg ">
                        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect rx="6" fill="#282828" />
                          <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                        </svg>
                      </div>

                      <div className="h-12 w-12 bg-shade_3 shadow-inner shadow-shade_4 rounded-lg ">
                        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect rx="6" fill="#282828" />
                          <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 h-full rounded-lg p-5 overflow-hidden bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_5 border-opacity-20">
                  <div className="heading bg-clip-text text-transparent bg-gradient-to-r from-shade_1 to-shade_5 font-semibold text-lg sm:text-md md:text-xl row-start-1">Design Process</div>
                  <div className=" grid  gap-5 grid-cols-1 md:grid-cols-2">
                    {caseData.Typography.map((Typography, TypographyIndex) => (
                      <div key={TypographyIndex} className="bg-shade_3  flex items-center gap-5 px-4 py-4 rounded-2xl shadow-inner shadow-shade_4">
                        {/* <div className=" flex justify-center items-center text-4xl font-bold shadow-inner shadow-shade_2 rounded-md text-shade_5 bg-shade_4 px-2 py-2">
                          Aa
                        </div> */}
                        <div className=" flex flex-col pt-1 gap-2">
                          <div className="">
                            <img src={Typography.Style} className=' h-4 xl:h-5' alt="" />
                          </div>

                          <div className=" flex">
                            <span className={`text-shade_5 flex flex-col justify-end p-0 m-0 ${!Typography.Weight1 ? 'hidden' : ''}`}>
                              {Typography.Weight1}
                            </span>
                            <span className={` text-shade_5 text-opacity-50 mx-2 ${!Typography.Weight2 ? 'hidden' : ''}`}>|</span>
                            <span className={`text-shade_5 flex flex-col justify-end p-0 m-0 ${!Typography.Weight2 ? 'hidden' : ''}`}>
                              {Typography.Weight2}
                            </span>
                            <span className={` text-shade_5 text-opacity-50 mx-2 ${!Typography.Weight2 ? 'hidden' : ''}`}>|</span>
                            <span className={`text-shade_5 flex flex-col justify-end p-0 m-0 ${!Typography.Weight3 ? 'hidden' : ''}`}>
                              {Typography.Weight3}
                            </span>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>



            {/* <div className=" grid gap-5 relative overflow-hidden">
              <div className=" grid grid-row-4 gap-3 md:gap-5 z-20 ">
              <div className="grid h-full items-center p-5 rounded-lg ">
              <img src={caseData.mockup} className="" alt="" />
              </div>
              </div>
              </div> */}

            {/* <div className=" grid gap-3 md:gap-5 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-5 ">
              <div className="grid rounded-lg p-5 h-full gap-3 overflow-hidden bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_5 border-opacity-20">
                  <div className="heading bg-clip-text text-transparent bg-gradient-to-r from-shade_1 to-shade_5 font-semibold text-lg sm:text-md md:text-xl ">Typography</div>
                  <div className="main grid grid-cols-1 gap-5">
                  {caseData.Typography.map((Typography, TypographyIndex) => (
                    <div key={TypographyIndex} className="bg-shade_3  flex items-center gap-5 px-4 py-4 rounded-2xl shadow-inner shadow-shade_4">
                    <div className=" flex justify-center items-center text-4xl font-bold shadow-inner shadow-shade_2 rounded-md text-shade_5 bg-shade_4 px-2 py-2">
                    Aa
                    </div>
                    <div className=" flex flex-col pt-1 gap-2">
                    <div className=" flex-col bg-shade_4">
                    {Typography.Style}
                    </div>
                    <span className=' text-shade_5 flex flex-col justify-end p-0 m-0'>{Typography.Weight}</span>
                    </div>
                    </div>
                    ))}
                    </div>
                    </div>
                    
                    <div className="grid rounded-lg p-5 h-full gap-3 overflow-hidden bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_5 border-opacity-20">
                    <div className="heading bg-clip-text text-transparent bg-gradient-to-r from-shade_1 to-shade_5 font-semibold text-lg sm:text-md md:text-xl ">Colors</div>
                    <div className=" flex ">
                    <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%] shadow-md shadow-black rounded-full bg-[#F75274]"></div>
                    <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%]  -ml-3 md:-ml-5 shadow-md shadow-black rounded-full bg-[#4B4B4B]"></div>
                    <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%]  -ml-3 md:-ml-5 shadow-md shadow-black rounded-full bg-[#D9D9D9]"></div>
                    <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%]  -ml-3 md:-ml-5 shadow-md shadow-black rounded-full bg-[#FFFFFF]"></div>
                    </div>
                    </div>
                    </div>
                    </div> */}
          </div>


          {/* <Userflow /> */}

          {/* Userflow */}





          {caseData.Userflow.map(({ Title, Desc, Mock }) => (
            <div className="grid grid-cols-2 rounded-lg overflow-hidden min-h-[70vh]">
              {/* Buttons Section */}
              <div className="grid grid-cols-1 gap-10">
                <div key={Title} className="flex items-center rounded-lg overflow-hidden">
                  <div className={`p-[2px] bg-gradient-to-r w-full rounded-lg ${activeColor === 'red' ? 'from-shade_2 via-shade_1 to-shade_2' : 'from-shade_2 via-shade_4 to-shade_2'}`}>
                    <button
                      className="bg-shade_4 shadow-inner shadow-shade_2 text-white p-2 rounded w-full h-[5rem]"
                      onClick={() => handleButtonClick('red')}
                    >
                      {Desc}
                      {Mock}
                    </button>
                  </div>
                  <div
                    className={`line w-full h-1 mt-1 ${activeColor === 'red' ? 'bg-gradient-to-r from-shade_2 via-shade_1 to-shade_2' : 'bg-shade_4'}`}
                  ></div>
                </div>
              </div>

              {/* Containers Section */}
              <div className="flex h-full w-full bg-shade_4 rounded-xl">
                {/* {caseData.Userflow.map(({ Title, Desc, Mock }) => ( */}
                <div
                  key={Title}
                  className={`w-full h-full border-2 border-shade_3 rounded-lg p-4 transition-opacity duration-500 ${activeColor === 'red' && isVisible ? 'opacity-100' : 'opacity-0'} ${activeColor === 'red' ? 'block' : 'hidden'}`}
                >
                  {Title}
                </div>
                {/* ))} */}
              </div>
            </div>
          ))}
































        </div>
      </section>
    </>
  );
}

export default Casestudy;