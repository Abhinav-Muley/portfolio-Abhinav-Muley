import React from "react";

function Counter() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-wrap gap-4 w-full">
          <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px]  bg-[#101010] grow shrink basis-[100px] justify-center items-center">
            <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
              04
              <span className=" text-shade_1 text-4xl">+</span>
            </p>
            <p className="text-[#cccccc] flex items-center  gap-1 w-full  justify-center rounded-xl">
              <span>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 16C10.6217 16 12.6566 15.1571 14.1569 13.6569C15.6571 12.1566 16.5 10.1217 16.5 8C16.5 5.87827 15.6571 3.84344 14.1569 2.34315C12.6566 0.842855 10.6217 0 8.5 0C6.37827 0 4.34344 0.842855 2.84315 2.34315C1.34285 3.84344 0.5 5.87827 0.5 8C0.5 10.1217 1.34285 12.1566 2.84315 13.6569C4.34344 15.1571 6.37827 16 8.5 16ZM5.617 10.8427C5.66393 10.7793 5.72289 10.7257 5.79052 10.6851C5.85815 10.6445 5.93312 10.6177 6.01114 10.6061C6.08917 10.5945 6.16871 10.5984 6.24522 10.6176C6.32173 10.6368 6.39371 10.6708 6.45704 10.7179C7.03882 11.1499 7.74349 11.3995 8.49904 11.3995C9.25651 11.3995 9.95926 11.1499 10.542 10.7179C10.6699 10.6232 10.8303 10.5831 10.9877 10.6066C11.1452 10.6301 11.2868 10.7152 11.3816 10.8432C11.4763 10.9711 11.5163 11.1314 11.4928 11.2889C11.4693 11.4463 11.3842 11.588 11.2563 11.6827C10.4786 12.2587 9.5282 12.6005 8.49904 12.6005C7.50498 12.5993 6.53789 12.2771 5.74181 11.6817C5.61403 11.587 5.52911 11.4454 5.5057 11.288C5.4823 11.1307 5.52233 10.9705 5.617 10.8427ZM11.6998 6.79995C11.6998 7.46238 11.3417 8 10.8991 8C10.4575 8 10.0994 7.46238 10.0994 6.79995C10.0994 6.13753 10.4575 5.5999 10.8991 5.5999C11.3408 5.5999 11.6998 6.13753 11.6998 6.79995ZM6.09894 8C6.54056 8 6.89962 7.46238 6.89962 6.79995C6.89962 6.13753 6.54152 5.5999 6.09894 5.5999C5.65733 5.5999 5.29923 6.13753 5.29923 6.79995C5.29923 7.46238 5.65733 8 6.09894 8Z" fill="#916CE7" />
                </svg>

              </span>
              Projects
            </p>
          </div>
          <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
            <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
              03
              <span className=" text-shade_1 text-4xl">+</span>
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
          <div className="hidden md:flex  flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
            <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal ">
              01
              <span className=" text-shade_1 text-4xl">+</span>
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
        <div className="md:hidden flex  flex-col gap-2 h-28 rounded-xl p-2 border-[#1e1e1e] border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
          <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal ">
            01
            <span className=" text-shade_1 text-4xl">+</span>
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

    </>
  );
}

export default Counter;
