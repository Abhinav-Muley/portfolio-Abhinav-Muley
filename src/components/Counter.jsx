import React from "react";

function Counter() {
  return (
    <div className="flex gap-4 flex-wrap ">
      <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px]  bg-[#101010] grow shrink basis-[100px] justify-center items-center">
        <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
          04
          <svg
            className="text-[#916ce7]"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 72 72"
          >
            <path
              fill="currentColor"
              d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"
            ></path>
          </svg>
        </p>
        <p className="text-[#cccccc] flex items-center  gap-1 w-full  justify-center rounded-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              className="text-[#916ce7]"
            >
              <path
                fill="currentColor"
                d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.204.081a8 8 0 0 0 4.91.334a1.2 1.2 0 0 1 1.491 1.164v7.367c0 .644-.439 1.206-1.064 1.362l-.214.053a8.68 8.68 0 0 1-5.327-.361a8.7 8.7 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
              ></path>
            </svg>
          </span>
          Projects
        </p>
      </div>
      <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
        <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
          02
          <svg
            className="text-[#916ce7]"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 72 72"
          >
            <path
              fill="currentColor"
              d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"
            ></path>
          </svg>
        </p>
        <p className="text-[#cccccc] flex items-center  gap-1 w-full  justify-center rounded-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              className="text-[#916ce7]"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 9.5C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11S7 10.3 7 9.5m5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M15.5 11c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"
              ></path>
            </svg>
          </span>
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
        <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal ">
          01
          <svg
            className="text-[#916ce7]"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            viewBox="0 0 72 72"
          >
            <path
              fill="currentColor"
              d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={2}
              d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"
            ></path>
          </svg>
        </p>
        <p className="text-[#cccccc] flex items-center  gap-1 w-full justify-center rounded-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              className="text-[#916ce7]"
            >
              <path
                fill="currentColor"
                d="m13.036 3.652l-.573.339c-.63.373-.945.56-1.291.603c-.347.043-.687-.061-1.365-.27l-.618-.19c-2.39-.736-3.584-1.103-4.302-.446s-.484 1.904-.016 4.397l.121.645c.133.709.2 1.063.12 1.409c-.078.346-.293.645-.724 1.242l-.392.544C2.48 14.028 1.723 15.08 2.093 15.95s1.621.987 4.126 1.216l.648.06c.711.064 1.067.097 1.365.267s.504.46.917 1.038l.376.526c1.452 2.035 2.178 3.052 3.125 2.934c.946-.119 1.486-1.295 2.566-3.646l.28-.609c.156-.341.273-.596.385-.795l4.589 4.59a.75.75 0 1 0 1.06-1.061l-4.43-4.432q.182-.066.411-.146l.624-.218c2.413-.846 3.62-1.268 3.835-2.213s-.703-1.786-2.54-3.469l-.475-.435c-.522-.478-.783-.717-.919-1.036c-.135-.32-.13-.683-.118-1.41l.01-.661c.038-2.557.058-3.835-.755-4.3c-.814-.466-1.921.19-4.136 1.502"
              ></path>
            </svg>
          </span>
          Year Expertise
        </p>
      </div>
    </div>
  );
}

export default Counter;
