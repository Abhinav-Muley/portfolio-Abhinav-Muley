import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Records from "../data/CaseData";


const Casestudy = () => {
  // const images = [PA1, PA2, PA3, PA4, PA5, PA6];
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

  return (
    // <div className='text-white'>
    //   <h2>{caseData.id}</h2>
    //   <p>{caseData.Title}</p>
    //   ... other Case details using caseData object properties
    // </div>

    <>
    <section className=' flex flex-col gap-5 xl:gap-20'>
        <div className='grid gap-5 '>
          {/* <Case1 /> */}
          <section className=" grid gap-5  w-full bg-shade_5 overflow-hidden relative rounded-lg">
            <div className=" absolute mx-auto top-1/4 z-0 w-full">
              <svg className=' md:w-[80%] mx-auto' viewBox="0 0 277 386" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <h1 className='absolute top-2  z-0 text-center text-4xl w-full'>{caseData.Title}</h1>
            <div className="bottom mt-[14%] sm:mt-[10%] flex justify-center relative h-[40vh] sm:h-[70vh] md:h-[60vh] xl:h-[70vh] 2xl:h-[70vh]">
              <div id="elementToAnimate" className=" absolute w-3/4 sm:w-2/4 flex justify-center rounded-md shadow-lg  shadow-shade_3 z-20 ">
                <img src={caseData.image} className="rounded-md" alt="" />
              </div>
            </div>
          </section>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
          <section className=" grid gap-5 ">
            <div className="   flex flex-col gap-5">
              <div className=" flex items-center gap-5">
                <div className=" h-full w-full py-5 sm:py-10 px-3 flex justify-center items-center rounded-lg bg-shade_3">
                  <img src={caseData.mockup} className="" alt={caseData.Title} />
                </div>
              </div>

              <div className="grid h-full rounded-lg p-5 overflow-hidden bg-shade_3">
                <div className="heading text-shade_1 font-semibold text-xl sm:text-2xl row-start-1">Problem Statement</div>
                <p className=" text-shade_5 font-medium text-xl sm:text-2xl">{caseData.Problem_Statement}</p>
              </div>
{/* 
              <div className=" grid h-full rounded-lg p-5 overflow-hidden bg-shade_3 grid-flow-row">
                <div className="heading text-shade_1 font-semibold text-xl sm:text-2xl h-10">Problem Statement</div>
                <p className=" text-shade_5 font-medium text-xl sm:text-2xl h-full">Redesign the website, simplifying its structure and features, to enhance user satisfaction and overall efficiency</p>
              </div> */}

            </div>
          </section>

          <section className=" grid gap-5 ">
            <div className=" flex flex-col gap-5 ">
              <div className="grid gap-3 h-full md:h-[30%] rounded-lg p-5 overflow-hidden bg-shade_3">
                <div className="heading text-shade_1 font-semibold text-xl sm:text-2xl">Role</div>
                <p className=" text-shade_5 font-medium text-xl sm:text-2xl">UI/UX Designer</p>
              </div>

              <div className="grid h-full md:h-[30%] rounded-lg p-5 gap-3 overflow-hidden bg-shade_3">
                <div className="heading text-shade_1 font-semibold text-xl sm:text-2xl">Tools</div>
                <div className=" flex flex-wrap gap-3 h-10">
                  <div className="h-10 w-10 bg-shade_7 rounded-lg ">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect rx="6" fill="#282828" />
                      <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                    </svg>
                  </div>

                  <div className="h-10 w-10 bg-shade_7 rounded-lg ">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect rx="6" fill="#282828" />
                      <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                    </svg>
                  </div>

                  <div className="h-10 w-10 bg-shade_7 rounded-lg ">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect rx="6" fill="#282828" />
                      <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                    </svg>
                  </div>

                  <div className="h-10 w-10 bg-shade_7 rounded-lg ">
                    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect rx="6" fill="#282828" />
                      <path d="M14.5 25C16.1552 25 17.5 23.656 17.5 22V19H14.5C13.7044 19 12.9413 19.3161 12.3787 19.8787C11.8161 20.4413 11.5 21.2044 11.5 22C11.5 22.7956 11.8161 23.5587 12.3787 24.1213C12.9413 24.6839 13.7044 25 14.5 25ZM11.5 16C11.5 15.2044 11.8161 14.4413 12.3787 13.8787C12.9413 13.3161 13.7044 13 14.5 13H17.5V19H14.5C13.7044 19 12.9413 18.6839 12.3787 18.1213C11.8161 17.5587 11.5 16.7956 11.5 16ZM11.5 10C11.5 9.20435 11.8161 8.44129 12.3787 7.87868C12.9413 7.31607 13.7044 7 14.5 7H17.5V13H14.5C13.7044 13 12.9413 12.6839 12.3787 12.1213C11.8161 11.5587 11.5 10.7956 11.5 10ZM17.5 7H20.5C22.1552 7 23.5 8.344 23.5 10C23.5 11.656 22.1552 13 20.5 13H17.5V7ZM23.5 16C23.5 16.5933 23.3241 17.1734 22.9944 17.6667C22.6648 18.1601 22.1962 18.5446 21.648 18.7716C21.0999 18.9987 20.4967 19.0581 19.9147 18.9424C19.3328 18.8266 18.7982 18.5409 18.3787 18.1213C17.9591 17.7018 17.6734 17.1672 17.5576 16.5853C17.4419 16.0033 17.5013 15.4001 17.7284 14.8519C17.9554 14.3038 18.3399 13.8352 18.8333 13.5056C19.3266 13.1759 19.9067 13 20.5 13C22.1552 13 23.5 14.344 23.5 16Z" fill="#CCCCCC" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid h-full items-center rounded-lg bg-shade_3">
                <img src={caseData.mockup} className="" alt="" />
              </div>
            </div>
          </section>

          <section className=" grid gap-5 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 ">

              <div className="grid gap-5 h-full xl:basis-1/3 rounded-lg p-5 overflow-hidden bg-shade_3">
                <div className="heading text-shade_1 font-semibold text-xl sm:text-2xl">Typography</div>
                <svg className="h-28" viewBox="0 0 226 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.14551 1.01562H7.26465C8.65267 1.01562 9.82487 1.22721 10.7812 1.65039C11.7461 2.07357 12.4782 2.69987 12.9775 3.5293C13.4854 4.35026 13.7393 5.36165 13.7393 6.56348C13.7393 7.40983 13.5658 8.18424 13.2188 8.88672C12.8802 9.58073 12.3893 10.1732 11.7461 10.6641C11.1113 11.1465 10.3496 11.5062 9.46094 11.7432L8.77539 12.0098H3.02441L2.99902 10.0166H7.34082C8.22103 10.0166 8.95312 9.86426 9.53711 9.55957C10.1211 9.24642 10.5612 8.82747 10.8574 8.30273C11.1536 7.77799 11.3018 7.19824 11.3018 6.56348C11.3018 5.85254 11.1621 5.23047 10.8828 4.69727C10.6035 4.16406 10.1634 3.75358 9.5625 3.46582C8.97005 3.1696 8.2041 3.02148 7.26465 3.02148H3.5957V19.5H1.14551V1.01562ZM11.9492 19.5L7.45508 11.1211L10.0068 11.1084L14.5645 19.3477V19.5H11.9492ZM16.1895 12.7842V12.4922C16.1895 11.502 16.3333 10.5837 16.6211 9.7373C16.9089 8.88249 17.3236 8.14193 17.8652 7.51562C18.4069 6.88086 19.0628 6.38997 19.833 6.04297C20.6032 5.6875 21.4665 5.50977 22.4229 5.50977C23.3877 5.50977 24.2552 5.6875 25.0254 6.04297C25.804 6.38997 26.4642 6.88086 27.0059 7.51562C27.556 8.14193 27.9749 8.88249 28.2627 9.7373C28.5505 10.5837 28.6943 11.502 28.6943 12.4922V12.7842C28.6943 13.7744 28.5505 14.6927 28.2627 15.5391C27.9749 16.3854 27.556 17.126 27.0059 17.7607C26.4642 18.387 25.8083 18.8779 25.0381 19.2334C24.2764 19.5804 23.4131 19.7539 22.4482 19.7539C21.4834 19.7539 20.6159 19.5804 19.8457 19.2334C19.0755 18.8779 18.4154 18.387 17.8652 17.7607C17.3236 17.126 16.9089 16.3854 16.6211 15.5391C16.3333 14.6927 16.1895 13.7744 16.1895 12.7842ZM18.5381 12.4922V12.7842C18.5381 13.4697 18.6185 14.1172 18.7793 14.7266C18.9401 15.3275 19.1813 15.8607 19.5029 16.3262C19.833 16.7917 20.2435 17.1598 20.7344 17.4307C21.2253 17.693 21.7965 17.8242 22.4482 17.8242C23.0915 17.8242 23.6543 17.693 24.1367 17.4307C24.6276 17.1598 25.0339 16.7917 25.3555 16.3262C25.6771 15.8607 25.9183 15.3275 26.0791 14.7266C26.2484 14.1172 26.333 13.4697 26.333 12.7842V12.4922C26.333 11.8151 26.2484 11.1761 26.0791 10.5752C25.9183 9.96582 25.6729 9.42839 25.3428 8.96289C25.0212 8.48893 24.6149 8.11654 24.124 7.8457C23.6416 7.57487 23.0745 7.43945 22.4229 7.43945C21.7796 7.43945 21.2126 7.57487 20.7217 7.8457C20.2393 8.11654 19.833 8.48893 19.5029 8.96289C19.1813 9.42839 18.9401 9.96582 18.7793 10.5752C18.6185 11.1761 18.5381 11.8151 18.5381 12.4922ZM31.627 0H33.9883V16.834L33.7852 19.5H31.627V0ZM43.2686 12.5176V12.7842C43.2686 13.7829 43.1501 14.7096 42.9131 15.5645C42.6761 16.4108 42.3291 17.1471 41.8721 17.7734C41.415 18.3997 40.8564 18.8864 40.1963 19.2334C39.5361 19.5804 38.7786 19.7539 37.9238 19.7539C37.0521 19.7539 36.2861 19.6058 35.626 19.3096C34.9743 19.0049 34.4242 18.569 33.9756 18.002C33.527 17.4349 33.1673 16.7493 32.8965 15.9453C32.6341 15.1413 32.4521 14.2357 32.3506 13.2285V12.0605C32.4521 11.0449 32.6341 10.1351 32.8965 9.33105C33.1673 8.52702 33.527 7.84147 33.9756 7.27441C34.4242 6.69889 34.9743 6.26302 35.626 5.9668C36.2777 5.66211 37.0352 5.50977 37.8984 5.50977C38.7617 5.50977 39.5277 5.67904 40.1963 6.01758C40.8649 6.34766 41.4235 6.82161 41.8721 7.43945C42.3291 8.05729 42.6761 8.79785 42.9131 9.66113C43.1501 10.516 43.2686 11.4681 43.2686 12.5176ZM40.9072 12.7842V12.5176C40.9072 11.832 40.8438 11.1888 40.7168 10.5879C40.5898 9.97852 40.3867 9.44531 40.1074 8.98828C39.8281 8.52279 39.46 8.15885 39.0029 7.89648C38.5459 7.62565 37.9831 7.49023 37.3145 7.49023C36.722 7.49023 36.2057 7.5918 35.7656 7.79492C35.334 7.99805 34.9658 8.27311 34.6611 8.62012C34.3564 8.95866 34.1068 9.34798 33.9121 9.78809C33.7259 10.2197 33.5863 10.6683 33.4932 11.1338V14.1934C33.6286 14.7858 33.8486 15.3571 34.1533 15.9072C34.4665 16.4489 34.8812 16.8932 35.3975 17.2402C35.9222 17.5872 36.5697 17.7607 37.3398 17.7607C37.9746 17.7607 38.5163 17.6338 38.9648 17.3799C39.4219 17.1175 39.79 16.7578 40.0693 16.3008C40.3571 15.8438 40.5687 15.3148 40.7041 14.7139C40.8395 14.113 40.9072 13.4697 40.9072 12.7842ZM45.6172 12.7842V12.4922C45.6172 11.502 45.7611 10.5837 46.0488 9.7373C46.3366 8.88249 46.7513 8.14193 47.293 7.51562C47.8346 6.88086 48.4906 6.38997 49.2607 6.04297C50.0309 5.6875 50.8942 5.50977 51.8506 5.50977C52.8154 5.50977 53.6829 5.6875 54.4531 6.04297C55.2318 6.38997 55.8919 6.88086 56.4336 7.51562C56.9837 8.14193 57.4027 8.88249 57.6904 9.7373C57.9782 10.5837 58.1221 11.502 58.1221 12.4922V12.7842C58.1221 13.7744 57.9782 14.6927 57.6904 15.5391C57.4027 16.3854 56.9837 17.126 56.4336 17.7607C55.8919 18.387 55.236 18.8779 54.4658 19.2334C53.7041 19.5804 52.8408 19.7539 51.876 19.7539C50.9111 19.7539 50.0436 19.5804 49.2734 19.2334C48.5033 18.8779 47.8431 18.387 47.293 17.7607C46.7513 17.126 46.3366 16.3854 46.0488 15.5391C45.7611 14.6927 45.6172 13.7744 45.6172 12.7842ZM47.9658 12.4922V12.7842C47.9658 13.4697 48.0462 14.1172 48.207 14.7266C48.3678 15.3275 48.609 15.8607 48.9307 16.3262C49.2607 16.7917 49.6712 17.1598 50.1621 17.4307C50.653 17.693 51.2243 17.8242 51.876 17.8242C52.5192 17.8242 53.082 17.693 53.5645 17.4307C54.0553 17.1598 54.4616 16.7917 54.7832 16.3262C55.1048 15.8607 55.346 15.3275 55.5068 14.7266C55.6761 14.1172 55.7607 13.4697 55.7607 12.7842V12.4922C55.7607 11.8151 55.6761 11.1761 55.5068 10.5752C55.346 9.96582 55.1006 9.42839 54.7705 8.96289C54.4489 8.48893 54.0426 8.11654 53.5518 7.8457C53.0693 7.57487 52.5023 7.43945 51.8506 7.43945C51.2074 7.43945 50.6403 7.57487 50.1494 7.8457C49.667 8.11654 49.2607 8.48893 48.9307 8.96289C48.609 9.42839 48.3678 9.96582 48.207 10.5752C48.0462 11.1761 47.9658 11.8151 47.9658 12.4922ZM66.8184 5.76367V7.56641H59.3916V5.76367H66.8184ZM61.9053 2.4248H64.2539V16.0977C64.2539 16.5632 64.3258 16.9144 64.4697 17.1514C64.6136 17.3883 64.7998 17.5449 65.0283 17.6211C65.2568 17.6973 65.5023 17.7354 65.7646 17.7354C65.9593 17.7354 66.1624 17.7184 66.374 17.6846C66.5941 17.6423 66.7591 17.6084 66.8691 17.583L66.8818 19.5C66.6956 19.5592 66.4502 19.6143 66.1455 19.665C65.8493 19.7243 65.4896 19.7539 65.0664 19.7539C64.4909 19.7539 63.9619 19.6396 63.4795 19.4111C62.9971 19.1826 62.612 18.8018 62.3242 18.2686C62.0449 17.7269 61.9053 16.999 61.9053 16.085V2.4248ZM68.6973 12.7842V12.4922C68.6973 11.502 68.8411 10.5837 69.1289 9.7373C69.4167 8.88249 69.8314 8.14193 70.373 7.51562C70.9147 6.88086 71.5706 6.38997 72.3408 6.04297C73.111 5.6875 73.9743 5.50977 74.9307 5.50977C75.8955 5.50977 76.763 5.6875 77.5332 6.04297C78.3118 6.38997 78.972 6.88086 79.5137 7.51562C80.0638 8.14193 80.4827 8.88249 80.7705 9.7373C81.0583 10.5837 81.2021 11.502 81.2021 12.4922V12.7842C81.2021 13.7744 81.0583 14.6927 80.7705 15.5391C80.4827 16.3854 80.0638 17.126 79.5137 17.7607C78.972 18.387 78.3161 18.8779 77.5459 19.2334C76.7842 19.5804 75.9209 19.7539 74.9561 19.7539C73.9912 19.7539 73.1237 19.5804 72.3535 19.2334C71.5833 18.8779 70.9232 18.387 70.373 17.7607C69.8314 17.126 69.4167 16.3854 69.1289 15.5391C68.8411 14.6927 68.6973 13.7744 68.6973 12.7842ZM71.0459 12.4922V12.7842C71.0459 13.4697 71.1263 14.1172 71.2871 14.7266C71.4479 15.3275 71.6891 15.8607 72.0107 16.3262C72.3408 16.7917 72.7513 17.1598 73.2422 17.4307C73.7331 17.693 74.3044 17.8242 74.9561 17.8242C75.5993 17.8242 76.1621 17.693 76.6445 17.4307C77.1354 17.1598 77.5417 16.7917 77.8633 16.3262C78.1849 15.8607 78.4261 15.3275 78.5869 14.7266C78.7562 14.1172 78.8408 13.4697 78.8408 12.7842V12.4922C78.8408 11.8151 78.7562 11.1761 78.5869 10.5752C78.4261 9.96582 78.1807 9.42839 77.8506 8.96289C77.529 8.48893 77.1227 8.11654 76.6318 7.8457C76.1494 7.57487 75.5824 7.43945 74.9307 7.43945C74.2874 7.43945 73.7204 7.57487 73.2295 7.8457C72.7471 8.11654 72.3408 8.48893 72.0107 8.96289C71.6891 9.42839 71.4479 9.96582 71.2871 10.5752C71.1263 11.1761 71.0459 11.8151 71.0459 12.4922Z" fill="white" />
                  <path d="M0.637695 59.5V42.1582H13.168V45.7954H5.39844V49.0454H10.3877V52.689H5.39844V59.5H0.637695ZM12.5903 59.5V47.2046H16.6211V49.7246C17.8314 47.9557 19.3569 47.0713 21.1978 47.0713V51.0767C20.453 50.7974 19.7949 50.6577 19.2236 50.6577C17.9583 50.6577 17.0908 51.1274 16.6211 52.0669V59.5H12.5903ZM33.7153 50.918V57.0308C33.7153 57.5851 33.7301 58.0083 33.7598 58.3003C33.7894 58.5881 33.8783 58.988 34.0264 59.5H29.9956C29.9237 59.1064 29.8729 58.6727 29.8433 58.1987C28.5483 59.2397 27.2471 59.7603 25.9395 59.7603C24.8773 59.7603 24.0098 59.4471 23.3369 58.8208C22.6641 58.1945 22.3276 57.3905 22.3276 56.4087C22.3276 54.9276 22.9666 53.7998 24.2446 53.0254C25.5269 52.2467 27.3931 51.8574 29.8433 51.8574V50.918C29.8433 50.4355 29.6951 50.061 29.3989 49.7944C29.1027 49.5236 28.6859 49.3882 28.1484 49.3882C27.6152 49.3882 27.2048 49.5109 26.917 49.7563C26.6292 50.0018 26.4346 50.389 26.333 50.918L22.8989 50.0864C23.0936 49.4263 23.4385 48.8592 23.9336 48.3853C24.4329 47.9113 25.0635 47.5537 25.8252 47.3125C26.5869 47.0671 27.4565 46.9443 28.4341 46.9443C30.2368 46.9443 31.5677 47.2554 32.4268 47.8774C33.2858 48.4995 33.7153 49.513 33.7153 50.918ZM29.8433 53.7808H29.5259C28.6245 53.7808 27.8755 53.9818 27.2788 54.3838C26.6821 54.7816 26.3838 55.283 26.3838 55.8882C26.3838 56.3156 26.5213 56.6774 26.7964 56.9736C27.0715 57.2699 27.41 57.418 27.812 57.418C28.396 57.418 29.0731 57.1493 29.8433 56.6118V53.7808ZM36.5591 59.5V47.2046H40.5898V49.2041C41.8678 47.6976 43.203 46.9443 44.5952 46.9443C45.158 46.9443 45.6785 47.0607 46.1567 47.2935C46.6349 47.5262 47.0158 47.8521 47.2993 48.271C47.5151 48.5715 47.659 48.891 47.731 49.2295C47.8071 49.568 47.8452 50.0801 47.8452 50.7656V59.5H43.8145V52.0923C43.8145 51.3813 43.77 50.8778 43.6812 50.5815C43.495 50.061 43.1395 49.8008 42.6147 49.8008C41.8361 49.8008 41.1611 50.243 40.5898 51.1274V59.5H36.5591ZM50.6255 59.5V42.082H54.6562V52.2954L58.9727 47.2046H62.6099L59.3091 50.9434L63.2637 59.5H58.5791L56.3701 54.0918L54.6562 56.0151V59.5H50.6255ZM64.6157 59.5V42.082H68.6465V59.5H64.6157ZM71.4204 59.5V47.2046H75.4512V59.5H71.4204ZM71.4204 45.7192V42.082H75.4512V45.7192H71.4204ZM78.2251 59.5V47.2046H82.2559V49.2041C83.5339 47.6976 84.869 46.9443 86.2612 46.9443C86.8241 46.9443 87.3446 47.0607 87.8228 47.2935C88.3009 47.5262 88.6818 47.8521 88.9653 48.271C89.1812 48.5715 89.325 48.891 89.397 49.2295C89.4731 49.568 89.5112 50.0801 89.5112 50.7656V59.5H85.4805V52.0923C85.4805 51.3813 85.436 50.8778 85.3472 50.5815C85.161 50.061 84.8055 49.8008 84.2808 49.8008C83.5021 49.8008 82.8271 50.243 82.2559 51.1274V59.5H78.2251ZM107.45 53.7808V51.0005H114.521V59.5H113.112L111.918 57.6021C111.224 58.3807 110.49 58.9435 109.716 59.2905C108.941 59.6375 108.055 59.811 107.056 59.811C105.715 59.811 104.462 59.4831 103.298 58.8271C102.135 58.1712 101.195 57.1746 100.48 55.8374C99.769 54.4959 99.4136 52.8561 99.4136 50.918C99.4136 49.0052 99.7563 47.3675 100.442 46.0049C101.132 44.638 102.082 43.6076 103.292 42.9136C104.502 42.2196 105.869 41.8726 107.393 41.8726C109.568 41.8726 111.227 42.4629 112.369 43.6436C113.516 44.8242 114.233 46.1488 114.521 47.6172L110.071 48.3218C109.762 46.3286 108.878 45.332 107.418 45.332C105.408 45.332 104.403 47.1686 104.403 50.8418C104.403 52.1367 104.502 53.1883 104.701 53.9966C104.9 54.8049 105.213 55.3994 105.641 55.7803C106.068 56.1611 106.627 56.3516 107.316 56.3516C108.061 56.3516 108.63 56.2013 109.024 55.9009C109.422 55.5962 109.68 55.2703 109.798 54.9233C109.921 54.5721 110.012 54.1912 110.071 53.7808H107.45ZM122.532 46.9443C123.721 46.9443 124.775 47.2131 125.693 47.7505C126.611 48.2837 127.322 49.0348 127.826 50.0039C128.333 50.973 128.587 52.0838 128.587 53.3364C128.587 54.2801 128.441 55.1476 128.149 55.939C127.862 56.7303 127.449 57.4116 126.912 57.9829C126.378 58.55 125.737 58.988 124.988 59.2969C124.239 59.6058 123.42 59.7603 122.532 59.7603C121.351 59.7603 120.302 59.4915 119.383 58.9541C118.469 58.4167 117.758 57.6592 117.25 56.6816C116.747 55.7041 116.495 54.589 116.495 53.3364C116.495 52.0965 116.747 50.9899 117.25 50.0166C117.758 49.0391 118.471 48.2837 119.39 47.7505C120.308 47.2131 121.355 46.9443 122.532 46.9443ZM122.557 49.5659C121.343 49.5659 120.735 50.8672 120.735 53.4697C120.735 55.8945 121.351 57.1069 122.583 57.1069C123.742 57.1069 124.322 55.8162 124.322 53.2349C124.322 50.7889 123.734 49.5659 122.557 49.5659ZM131.749 56.2754V50.0103L129.565 50.0356V47.1729L131.825 47.2554L132.193 43.0151H135.83V47.2554L138.433 47.1729V50.0356L135.805 50.0103V54.6123C135.805 55.2174 135.839 55.6639 135.906 55.9517C135.978 56.2394 136.147 56.4574 136.414 56.6055C136.685 56.7493 137.114 56.8213 137.703 56.8213C138.016 56.8213 138.285 56.8044 138.509 56.7705V59.5C137.844 59.6396 137.1 59.7095 136.274 59.7095C135.043 59.7095 134.104 59.5952 133.456 59.3667C132.809 59.1382 132.362 58.7806 132.117 58.2939C131.871 57.8031 131.749 57.1302 131.749 56.2754ZM140.635 59.5V42.082H144.666V49.3882C145.906 47.759 147.258 46.9443 148.722 46.9443C149.247 46.9443 149.738 47.0586 150.195 47.2871C150.656 47.5156 151.024 47.833 151.299 48.2393C151.731 48.874 151.947 49.7246 151.947 50.791V59.5H147.916V51.8828C147.916 50.5117 147.482 49.8262 146.615 49.8262C145.87 49.8262 145.22 50.2684 144.666 51.1528V59.5H140.635ZM154.702 59.5V47.2046H158.732V59.5H154.702ZM154.702 45.7192V42.082H158.732V45.7192H154.702ZM169.435 55.1328L172.139 55.6533C171.665 57.054 170.994 58.0887 170.126 58.7573C169.263 59.4259 168.167 59.7603 166.838 59.7603C165.666 59.7603 164.619 59.5 163.696 58.9795C162.778 58.459 162.065 57.7248 161.557 56.7769C161.054 55.8289 160.802 54.752 160.802 53.5459C160.802 52.2848 161.062 51.1507 161.583 50.1436C162.107 49.1364 162.835 48.3514 163.766 47.7886C164.697 47.2257 165.747 46.9443 166.915 46.9443C167.833 46.9443 168.658 47.1157 169.39 47.4585C170.122 47.8013 170.721 48.2985 171.187 48.9502C171.656 49.5977 171.974 50.3678 172.139 51.2607L168.476 51.4131C168.451 50.1986 167.956 49.5913 166.991 49.5913C165.692 49.5913 165.042 50.8566 165.042 53.3872C165.042 55.884 165.787 57.1323 167.276 57.1323C168.351 57.1323 169.071 56.4658 169.435 55.1328Z" fill="white" />
                  <path d="M3.3418 103.5H1.1709V86.1709H11.7842V88.0752H3.3418V93.5469H10.3369V95.2988H3.3418V103.5ZM15.3008 103.5H13.3076V90.6777H15.0596V93.6738C15.6774 92.2604 16.2952 91.3464 16.9131 90.9316C17.5394 90.5085 18.1784 90.2969 18.8301 90.2969C19.0332 90.2969 19.2956 90.3138 19.6172 90.3477V92.252H19.2109C18.1107 92.252 17.1966 92.6624 16.4688 93.4834C15.7409 94.3044 15.3516 95.3835 15.3008 96.7207V103.5ZM31.9316 103.5H29.9512C29.875 103.094 29.7988 102.324 29.7227 101.189C28.8424 102.958 27.3444 103.843 25.2285 103.843C23.7897 103.843 22.6852 103.462 21.915 102.7C21.1449 101.938 20.7598 101.024 20.7598 99.958C20.7598 98.6631 21.3099 97.6009 22.4102 96.7715C23.5104 95.9336 25.3809 95.5146 28.0215 95.5146C28.377 95.5146 28.944 95.5316 29.7227 95.5654C29.7227 94.5498 29.6423 93.8177 29.4814 93.3691C29.3291 92.9121 28.999 92.5482 28.4912 92.2773C27.9834 92.0065 27.3148 91.8711 26.4854 91.8711C24.4626 91.8711 23.2861 92.6413 22.9561 94.1816L21.1152 93.8643C21.5638 91.5029 23.4512 90.3223 26.7773 90.3223C28.5462 90.3223 29.7988 90.7158 30.5352 91.5029C31.2799 92.2816 31.6523 93.6357 31.6523 95.5654V101.012C31.6523 101.917 31.7454 102.747 31.9316 103.5ZM29.7227 97.0889C28.9102 97.0381 28.2923 97.0127 27.8691 97.0127C26.2949 97.0127 25.0719 97.2708 24.2002 97.7871C23.3285 98.3034 22.8926 99.0566 22.8926 100.047C22.8926 100.673 23.1253 101.206 23.5908 101.646C24.0648 102.087 24.7461 102.307 25.6348 102.307C26.8366 102.307 27.8226 101.871 28.5928 100.999C29.3714 100.127 29.7607 99.1032 29.7607 97.9268C29.7607 97.6898 29.748 97.4105 29.7227 97.0889ZM45.7568 103.5H43.8906V95.2607C43.8906 94.0758 43.6325 93.2422 43.1162 92.7598C42.5999 92.2773 41.9736 92.0361 41.2373 92.0361C40.2217 92.0361 39.3669 92.4424 38.6729 93.2549C37.9873 94.0674 37.6445 95.138 37.6445 96.4668V103.5H35.6514V90.6777H37.5049V93.0391C38.5459 91.2279 39.8958 90.3223 41.5547 90.3223C42.5111 90.3223 43.3236 90.5719 43.9922 91.0713C44.6693 91.5622 45.1305 92.1165 45.376 92.7344C45.6299 93.3522 45.7568 94.4694 45.7568 96.0859V103.5ZM60.3311 103.5H58.2617L54.5166 96.3398L51.7363 99.5391V103.5H49.7432V86.1709H51.7363V97.2666L57.6904 90.6777H59.8232L55.8115 95.1846L60.3311 103.5ZM64.7617 103.5H62.7686V86.1709H64.7617V103.5ZM70.8174 86.1709V88.3799H68.6719V86.1709H70.8174ZM70.7539 90.6777V103.5H68.7607V90.6777H70.7539ZM84.833 103.5H82.9668V95.2607C82.9668 94.0758 82.7087 93.2422 82.1924 92.7598C81.6761 92.2773 81.0498 92.0361 80.3135 92.0361C79.2979 92.0361 78.443 92.4424 77.749 93.2549C77.0635 94.0674 76.7207 95.138 76.7207 96.4668V103.5H74.7275V90.6777H76.5811V93.0391C77.6221 91.2279 78.972 90.3223 80.6309 90.3223C81.5872 90.3223 82.3997 90.5719 83.0684 91.0713C83.7454 91.5622 84.2067 92.1165 84.4521 92.7344C84.7061 93.3522 84.833 94.4694 84.833 96.0859V103.5ZM108.332 94.7656V103.729H106.999L106.402 101.558C105.336 103.081 103.749 103.843 101.642 103.843C99.3564 103.843 97.5791 102.984 96.3096 101.266C95.04 99.5475 94.4053 97.4613 94.4053 95.0068C94.4053 92.3831 95.0781 90.1953 96.4238 88.4434C97.7695 86.6914 99.5977 85.8154 101.908 85.8154C105.099 85.8154 107.181 87.4912 108.154 90.8428L106.098 91.3379C105.801 90.0514 105.247 89.1162 104.435 88.5322C103.622 87.9482 102.733 87.6562 101.769 87.6562C100.059 87.6562 98.7979 88.346 97.9854 89.7256C97.1729 91.1051 96.7666 92.8359 96.7666 94.918C96.7666 97.1608 97.2194 98.917 98.125 100.187C99.0391 101.448 100.279 102.078 101.845 102.078C103.063 102.078 104.079 101.676 104.892 100.872C105.713 100.06 106.123 98.9424 106.123 97.5205C106.123 97.2581 106.115 96.945 106.098 96.5811H101.807V94.7656H108.332ZM116.749 103.843C114.989 103.843 113.613 103.191 112.623 101.888C111.641 100.584 111.15 98.9678 111.15 97.0381C111.15 94.9984 111.705 93.3691 112.813 92.1504C113.922 90.9316 115.302 90.3223 116.952 90.3223C118.721 90.3223 120.113 90.9655 121.129 92.252C122.153 93.5299 122.665 95.1296 122.665 97.0508C122.665 99.0482 122.115 100.682 121.015 101.951C119.914 103.212 118.493 103.843 116.749 103.843ZM116.901 102.205C117.917 102.205 118.768 101.786 119.453 100.948C120.139 100.11 120.481 98.807 120.481 97.0381C120.481 95.2607 120.122 93.9743 119.402 93.1787C118.683 92.3747 117.841 91.9727 116.876 91.9727C115.886 91.9727 115.048 92.3789 114.362 93.1914C113.677 93.9954 113.334 95.2734 113.334 97.0254C113.334 98.8789 113.677 100.208 114.362 101.012C115.048 101.807 115.894 102.205 116.901 102.205ZM131.272 102.129V103.703C130.57 103.796 129.961 103.843 129.444 103.843C126.965 103.843 125.725 102.548 125.725 99.958V92.2393H123.452V90.6777H125.725L125.813 87.4531L127.667 87.2754V90.6777H130.536V92.2393H127.667V100.288C127.667 101.608 128.353 102.269 129.724 102.269C130.181 102.269 130.697 102.222 131.272 102.129ZM143.511 103.5H141.518V95.7178C141.518 94.8037 141.458 94.1182 141.34 93.6611C141.23 93.2041 140.959 92.8105 140.527 92.4805C140.104 92.1419 139.613 91.9727 139.055 91.9727C138.031 91.9727 137.172 92.3916 136.478 93.2295C135.792 94.0674 135.449 95.1888 135.449 96.5938V103.5H133.456V86.1709H135.449V93.0391C136.355 91.2279 137.65 90.3223 139.334 90.3223C140.087 90.3223 140.756 90.4704 141.34 90.7666C141.932 91.0628 142.385 91.4521 142.698 91.9346C143.011 92.417 143.223 92.8952 143.333 93.3691C143.451 93.8346 143.511 94.6175 143.511 95.7178V103.5ZM149.554 86.1709V88.3799H147.408V86.1709H149.554ZM149.49 90.6777V103.5H147.497V90.6777H149.49ZM161.043 99.0059L162.846 99.3232C162.592 100.737 162.029 101.845 161.157 102.649C160.285 103.445 159.198 103.843 157.895 103.843C156.126 103.843 154.776 103.191 153.845 101.888C152.922 100.584 152.461 98.9932 152.461 97.1143C152.461 95.1676 152.948 93.5511 153.921 92.2646C154.903 90.9697 156.236 90.3223 157.92 90.3223C159.316 90.3223 160.434 90.7412 161.271 91.5791C162.118 92.4085 162.643 93.4834 162.846 94.8037L161.043 95.1465C160.704 93.0306 159.68 91.9727 157.971 91.9727C156.87 91.9727 156.024 92.4424 155.432 93.3818C154.839 94.3128 154.543 95.5231 154.543 97.0127C154.543 98.6546 154.835 99.9326 155.419 100.847C156.011 101.752 156.841 102.205 157.907 102.205C159.558 102.205 160.603 101.139 161.043 99.0059ZM172.253 103.5V86.1709H179.108C180.835 86.1709 182.113 86.5941 182.942 87.4404C183.78 88.2868 184.199 89.2686 184.199 90.3857C184.199 92.3493 183.175 93.6527 181.127 94.2959C182.346 94.609 183.251 95.1676 183.844 95.9717C184.436 96.7757 184.732 97.6855 184.732 98.7012C184.732 100.064 184.271 101.206 183.349 102.129C182.435 103.043 181.021 103.5 179.108 103.5H172.253ZM174.348 93.5977H178.118C179.684 93.5977 180.729 93.3014 181.254 92.709C181.779 92.1081 182.041 91.4056 182.041 90.6016C182.041 89.806 181.757 89.1628 181.19 88.6719C180.632 88.181 179.794 87.9355 178.677 87.9355H174.348V93.5977ZM174.348 101.596H178.994C180.128 101.596 181.004 101.321 181.622 100.771C182.24 100.22 182.549 99.5052 182.549 98.625C182.549 98.0072 182.409 97.4359 182.13 96.9111C181.851 96.3779 181.457 95.9674 180.949 95.6797C180.441 95.3919 179.684 95.248 178.677 95.248H174.348V101.596ZM192.388 103.843C190.627 103.843 189.252 103.191 188.262 101.888C187.28 100.584 186.789 98.9678 186.789 97.0381C186.789 94.9984 187.343 93.3691 188.452 92.1504C189.561 90.9316 190.94 90.3223 192.591 90.3223C194.36 90.3223 195.752 90.9655 196.768 92.252C197.792 93.5299 198.304 95.1296 198.304 97.0508C198.304 99.0482 197.754 100.682 196.653 101.951C195.553 103.212 194.131 103.843 192.388 103.843ZM192.54 102.205C193.556 102.205 194.406 101.786 195.092 100.948C195.777 100.11 196.12 98.807 196.12 97.0381C196.12 95.2607 195.76 93.9743 195.041 93.1787C194.322 92.3747 193.479 91.9727 192.515 91.9727C191.524 91.9727 190.687 92.3789 190.001 93.1914C189.315 93.9954 188.973 95.2734 188.973 97.0254C188.973 98.8789 189.315 100.208 190.001 101.012C190.687 101.807 191.533 102.205 192.54 102.205ZM205.896 103.843C204.135 103.843 202.76 103.191 201.77 101.888C200.788 100.584 200.297 98.9678 200.297 97.0381C200.297 94.9984 200.851 93.3691 201.96 92.1504C203.069 90.9316 204.448 90.3223 206.099 90.3223C207.868 90.3223 209.26 90.9655 210.275 92.252C211.299 93.5299 211.812 95.1296 211.812 97.0508C211.812 99.0482 211.261 100.682 210.161 101.951C209.061 103.212 207.639 103.843 205.896 103.843ZM206.048 102.205C207.063 102.205 207.914 101.786 208.6 100.948C209.285 100.11 209.628 98.807 209.628 97.0381C209.628 95.2607 209.268 93.9743 208.549 93.1787C207.829 92.3747 206.987 91.9727 206.022 91.9727C205.032 91.9727 204.194 92.3789 203.509 93.1914C202.823 93.9954 202.48 95.2734 202.48 97.0254C202.48 98.8789 202.823 100.208 203.509 101.012C204.194 101.807 205.041 102.205 206.048 102.205ZM225.396 103.5H223.326L219.581 96.3398L216.801 99.5391V103.5H214.808V86.1709H216.801V97.2666L222.755 90.6777H224.888L220.876 95.1846L225.396 103.5Z" fill="white" />
                </svg>
              </div>

              <div className="grid rounded-lg p-5 gap-3 overflow-hidden bg-shade_3">
                <div className="heading text-shade_1 font-semibold text-xl sm:text-2xl">Colors</div>
                <div className=" flex ">
                  <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%] shadow-md shadow-black rounded-full bg-[#F75274]"></div>
                  <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%]  -ml-3 md:-ml-5 shadow-md shadow-black rounded-full bg-[#4B4B4B]"></div>
                  <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%]  -ml-3 md:-ml-5 shadow-md shadow-black rounded-full bg-[#D9D9D9]"></div>
                  <div className=" h-10 xl:h-12 w-[30%] sm:w-[34%] md:w-[29%] xl:w-[25%]  -ml-3 md:-ml-5 shadow-md shadow-black rounded-full bg-[#FFFFFF]"></div>
                </div>

              </div>

              <div className="grid xl:basis-1/2 items-center rounded-lg overflow-hidden bg-shade_3">
                {/* <video src={video} className="" type="video/mp4" autoPlay muted> */}
                <img src={caseData.mockup} alt="" />
                {/* </video> */}
              </div>
            </div>
          </section>
        </div>
    
      </section>
    </>
  );
}

export default Casestudy;