import React from 'react'

function Experience() {
  return (
    <div className='bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_3 rounded-xl p-4 h-full w-full flex flex-col gap-5'>
      <div className="flex justify-center">
        <p className='text-shade_1 flex items-center gap-2 font-medium text-xl '>
          <svg className='w-5' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.14559 2.50585V3.80751L2.59276 3.93401C2.05929 3.97695 1.55561 4.19751 1.16227 4.56044C0.768931 4.92337 0.508637 5.40771 0.423007 5.93601C0.385118 6.17251 0.350285 6.40932 0.318508 6.64643C0.311375 6.7038 0.322505 6.76196 0.350315 6.81264C0.378126 6.86333 0.421202 6.90396 0.473424 6.92876L0.544008 6.96176C5.52059 9.31759 11.4798 9.31759 16.4555 6.96176L16.5261 6.92876C16.5781 6.90382 16.621 6.86313 16.6487 6.81245C16.6763 6.76178 16.6873 6.7037 16.6801 6.64643C16.649 6.40913 16.6145 6.1723 16.5765 5.93601C16.4909 5.40771 16.2306 4.92337 15.8372 4.56044C15.4439 4.19751 14.9402 3.97695 14.4068 3.93401L12.8539 3.80843V2.50676C12.854 2.12254 12.7162 1.75105 12.4655 1.45985C12.2149 1.16866 11.868 0.977096 11.4881 0.920012L10.3698 0.752262C9.12998 0.566954 7.86954 0.566954 6.62976 0.752262L5.51142 0.920012C5.13163 0.977073 4.7849 1.1685 4.53427 1.45951C4.28363 1.75051 4.14572 2.12178 4.14559 2.50585ZM10.1653 2.11168C9.06108 1.94674 7.93844 1.94674 6.83417 2.11168L5.71584 2.27943C5.66158 2.28755 5.61204 2.31486 5.57621 2.35641C5.54038 2.39796 5.52065 2.45098 5.52059 2.50585V3.71126C7.50509 3.59793 9.49443 3.59793 11.4789 3.71126V2.50585C11.4789 2.45098 11.4591 2.39796 11.4233 2.35641C11.3875 2.31486 11.3379 2.28755 11.2837 2.27943L10.1653 2.11168Z" fill="#916CE7" />
            <path d="M16.8583 8.5642C16.8565 8.53456 16.8475 8.50581 16.8321 8.48041C16.8167 8.45502 16.7954 8.43374 16.77 8.41841C16.7446 8.40308 16.7158 8.39416 16.6861 8.39241C16.6565 8.39066 16.6269 8.39613 16.5998 8.40836C11.4931 10.6698 5.50723 10.6698 0.400484 8.40836C0.373427 8.39613 0.343805 8.39066 0.314164 8.39241C0.284523 8.39416 0.255751 8.40308 0.230322 8.41841C0.204893 8.43374 0.183567 8.45502 0.16818 8.48041C0.152792 8.50581 0.143802 8.53456 0.141984 8.5642C0.0491417 10.3191 0.143479 12.079 0.423401 13.8139C0.508844 14.3424 0.769056 14.827 1.16241 15.1901C1.55577 15.5532 2.05955 15.7739 2.59315 15.8169L4.30915 15.9544C7.09857 16.1799 9.90082 16.1799 12.6912 15.9544L14.4072 15.8169C14.9408 15.7739 15.4445 15.5532 15.8379 15.1901C16.2312 14.827 16.4915 14.3424 16.5769 13.8139C16.8574 12.0769 16.9527 10.3159 16.8583 8.5642Z" fill="#916CE7" />
          </svg>
          Experience
        </p>
      </div>
      <div className=" main flex flex-col gap-5 text-lg">
        <div className=" ">
          <div className="flex items-center w-fit gap-2 py-[2px] px-2 pr-3 ">
            {/* <span className="p-1 rounded-full bg-shade_4">
              <div className="bg-shade_1 w-3 h-3 rounded-full"></div>
            </span> */}
            <p className="text-shade_1 font-semibold ">xScientist Tech LLP</p>
          </div>
          <ul className='text-shade_5 m-0 list-disc mx-6  font-light text-sm md:text-lg'>
            <li>
              Created wireframes, user flows, prototypes and mockups to visualize design concept.
            </li>
            <li>
              Redesigned and implemented complete web applications to meet web and industry standards.
            </li>
            <li>
              Collaborated with developers to ensure the successful implementation of design concepts.
            </li>
          </ul>
        </div>
        <div className="">
          <div className="flex items-center w-fit gap-2 py-[2px] px-2 pr-3 ">
            {/* <span className="p-1 rounded-full bg-shade_4">
              <div className="bg-shade_1 w-3 h-3 rounded-full"></div>
            </span> */}
            <p className="text-shade_1 font-semibold">Oasis Infobyte</p>
          </div>
          <ul className=' text-shade_5 m-0 list-disc mx-6 font-light  text-sm md:text-lg'>
            <li>
              Developed user interfaces for web applications using HTML, CSS and JavaScript.
            </li>
            <li>
              Implemented responsive design techniques to ensure websites are optimized for mobile devices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience