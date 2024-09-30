import React from "react";

function Counter() {
  return (
    <div className="flex gap-4 flex-wrap ">
      <div className="flex flex-col h-32 rounded-xl p-2  bg-[#101010] grow shrink basis-[100px] justify-center items-center">
        <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text">04</p>
        <p className="text-[#cccccc] flex items-center  gap-1 w-full bg-[#141414] justify-center rounded-xl"><span><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2rem"
        height="1.2rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
        ></path>
      </svg></span>Projects</p>
      </div>
      <div className="flex flex-col h-32 rounded-xl p-2 bg-[#101010] grow shrink basis-[100px] justify-center items-center">
        <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text">02</p>
        <p className="text-[#cccccc] flex items-center  gap-1 w-full bg-[#141414] justify-center rounded-xl"><span><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2rem"
        height="1.2rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
        ></path>
      </svg></span>Happy Clients</p>
      </div>
      <div className="flex flex-col h-32 rounded-xl p-2 bg-[#101010] grow shrink basis-[100px] justify-center items-center">
        <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text">01</p>
        <p className="text-[#cccccc] flex items-center  gap-1 w-full bg-[#141414] justify-center rounded-xl"><span><svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2rem"
        height="1.2rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
        ></path>
      </svg></span>Year Expertise</p>
      </div>
    </div>
  );
}

export default Counter;
