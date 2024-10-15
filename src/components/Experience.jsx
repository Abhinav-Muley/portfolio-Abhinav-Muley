import React from 'react'

function Experience() {
  return (
    <div className='bg-[#101010] rounded-xl p-4 h-full border-[#1e1e1e] border-[1px]  w-full'>
      <div className="flex justify-center">
        <p className='text-shade_5 flex items-center gap-1 font-medium text-xl '><svg xmlns="http://www.w3.org/2000/svg" className='text-shade_1' width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M7.25 5.461v1.42l-1.694.138a2.61 2.61 0 0 0-2.367 2.184q-.062.387-.114.775a.3.3 0 0 0 .169.308l.077.036c5.429 2.57 11.93 2.57 17.358 0l.077-.036a.3.3 0 0 0 .168-.308a27 27 0 0 0-.113-.775a2.61 2.61 0 0 0-2.367-2.184l-1.694-.137v-1.42a1.75 1.75 0 0 0-1.49-1.731l-1.22-.183a13.8 13.8 0 0 0-4.08 0l-1.22.183a1.75 1.75 0 0 0-1.49 1.73m6.567-.43a12.3 12.3 0 0 0-3.634 0l-1.22.183a.25.25 0 0 0-.213.247v1.315a57 57 0 0 1 6.5 0V5.461a.25.25 0 0 0-.213-.247z" clipRule="evenodd"></path><path fill="currentColor" d="M21.118 12.07a.2.2 0 0 0-.282-.17c-5.571 2.467-12.101 2.467-17.672 0a.2.2 0 0 0-.282.17a27 27 0 0 0 .307 5.727a2.61 2.61 0 0 0 2.367 2.185l1.872.15c3.043.246 6.1.246 9.144 0l1.872-.15a2.61 2.61 0 0 0 2.367-2.185c.306-1.895.41-3.815.307-5.726"></path></svg>Experience</p>
      </div>
      <div className=" main flex flex-col gap-5 text-lg">
      <div className=" ">
      <div className="flex items-center w-fit gap-2 py-[2px] px-2 pr-3 ">
        <span className="p-1 rounded-full bg-shade_4">
          <div className="bg-shade_1 w-3 h-3 rounded-full"></div>
        </span>
        <p className="text-shade_1 font-semibold ">xScientist Tech LLP</p>
      </div>
      <ul className=' text-shade_5 list-disc mx-10 font-light'>
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
      <span className="p-1 rounded-full bg-shade_4">
          <div className="bg-shade_1 w-3 h-3 rounded-full"></div>
        </span>
        <p className="text-shade_1 font-semibold">Oasis Infobyte</p>
      </div>
      <ul className=' text-shade_5 list-disc mx-9 font-light'>
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