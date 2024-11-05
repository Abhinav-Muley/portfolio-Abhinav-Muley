import React from "react";

function Counter() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-wrap gap-4 w-full">
          <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-shade_3 border-[1px]  bg-[#101010] grow shrink basis-[100px] justify-center items-center">
            <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
              04
              <span className=" text-shade_1 text-4xl">+</span>
            </p>
            <p className="text-[#cccccc] flex items-center  gap-1 w-full  justify-center rounded-xl">
              <span>
                <svg className='w-5' viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.0227 1.77347C8.94303 1.00608 10.0886 0.546875 11.4994 0.546875C12.9114 0.546875 14.0569 1.00608 15.9772 1.7747L19.0149 2.99025C19.9922 3.37947 20.783 3.69625 21.3257 3.98111C21.6007 4.12476 21.8671 4.28806 22.0722 4.48451C22.2834 4.68833 22.4995 4.99406 22.4995 5.40784C22.4995 5.82039 22.2834 6.12735 22.0722 6.32871C21.8481 6.5309 21.5968 6.70075 21.3257 6.83335C20.783 7.1182 19.9922 7.43498 19.0149 7.82543L15.9772 9.04098C14.0569 9.8096 12.9114 10.2676 11.4994 10.2676C10.0886 10.2676 8.94303 9.8096 7.0227 9.03975L3.98383 7.82543C3.00771 7.43498 2.21576 7.1182 1.67306 6.83335C1.40272 6.70053 1.15193 6.53113 0.927772 6.32994C0.716586 6.12735 0.500488 5.82039 0.500488 5.40784C0.500488 4.99406 0.716586 4.68833 0.927772 4.48574C1.13282 4.28929 1.39926 4.12476 1.67306 3.98111C2.21699 3.69625 3.00771 3.37947 3.98383 2.98902L7.0227 1.77347Z" fill="#916CE7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.78001 8.92905L1.77879 8.92782L1.78247 8.93028C1.78738 8.93396 1.79475 8.94256 1.80703 8.95115L1.92735 9.04815C2.03909 9.1341 2.21221 9.26056 2.44795 9.41404C2.91821 9.71854 3.63649 10.1262 4.60033 10.5117L7.47345 11.661C9.54602 12.4897 10.4153 12.8249 11.5007 12.8249C12.5849 12.8249 13.453 12.4897 15.5255 11.661L18.3986 10.5117C19.3637 10.1262 20.0808 9.71854 20.5523 9.41404C20.7824 9.26461 21.0046 9.10313 21.2177 8.93028L21.2202 8.92905V8.92659C21.3719 8.7908 21.5714 8.72085 21.7747 8.73214C21.9781 8.74342 22.1686 8.83501 22.3044 8.98676C22.4402 9.13851 22.5101 9.33798 22.4988 9.5413C22.4875 9.74463 22.3959 9.93514 22.2442 10.0709L22.243 10.0722L22.2405 10.0746L22.2368 10.0783L22.2221 10.0906C22.1536 10.1502 22.0832 10.2075 22.0109 10.2625C21.8685 10.373 21.6598 10.524 21.3872 10.7008C20.842 11.0544 20.0366 11.5099 18.9684 11.9372L16.0952 13.0865L15.9774 13.1331C14.0571 13.9017 12.9115 14.361 11.4995 14.361C10.0887 14.361 8.94315 13.9017 7.02283 13.1331L6.90496 13.0865L4.03185 11.9372C3.1875 11.6043 2.37743 11.1902 1.61303 10.7008C1.3401 10.5244 1.07657 10.3338 0.823537 10.1299C0.808301 10.1169 0.793157 10.1038 0.778107 10.0906L0.763373 10.0783L0.758462 10.0746L0.757234 10.0722H0.756006C0.604258 9.93653 0.512603 9.74617 0.501205 9.54297C0.489807 9.33976 0.5596 9.14035 0.695229 8.9886C0.830858 8.83685 1.02121 8.7452 1.22442 8.7338C1.42763 8.7224 1.62704 8.79219 1.77879 8.92782M1.77879 13.0202C1.62721 12.885 1.42825 12.8155 1.2255 12.8268C1.02274 12.838 0.832725 12.9292 0.69707 13.0803L1.77756 13.0189L1.77879 13.0202ZM1.77879 13.0202L1.78247 13.0226C1.82904 13.064 1.87738 13.1033 1.92735 13.1405C2.03909 13.2264 2.21221 13.3541 2.44795 13.5064C2.91821 13.8109 3.63649 14.2185 4.60033 14.6041L7.47345 15.7533C9.54602 16.5821 10.4153 16.9185 11.5007 16.9185C12.5849 16.9185 13.453 16.5821 15.5255 15.7533L18.3986 14.6041C19.3637 14.2185 20.0808 13.8109 20.5523 13.5064C20.7825 13.357 21.0046 13.1956 21.2177 13.0226L21.2202 13.0214V13.0202C21.2953 12.9529 21.383 12.9012 21.4781 12.8678C21.5733 12.8344 21.6741 12.8201 21.7747 12.8257C21.8754 12.8313 21.974 12.8567 22.0649 12.9003C22.1557 12.944 22.2371 13.0052 22.3044 13.0803C22.3716 13.1555 22.4234 13.2431 22.4567 13.3383C22.4901 13.4334 22.5044 13.5342 22.4988 13.6349C22.4932 13.7356 22.4679 13.8341 22.4242 13.925C22.3805 14.0159 22.3193 14.0973 22.2442 14.1645L22.2405 14.167L22.2368 14.1706L22.2221 14.1829C22.1543 14.2433 22.0838 14.3006 22.0109 14.3548C21.8685 14.4653 21.6598 14.6163 21.3872 14.7944C20.842 15.148 20.0366 15.6023 18.9684 16.0296L16.0952 17.1788L15.9774 17.2267C14.0571 17.9941 12.9115 18.4533 11.4995 18.4533C10.0887 18.4533 8.94315 17.9941 7.02283 17.2255L6.90496 17.1788L4.03185 16.0296C3.18756 15.697 2.3775 15.2833 1.61303 14.7944C1.34007 14.6176 1.07654 14.4266 0.823537 14.2222C0.80827 14.2093 0.793126 14.1962 0.778107 14.1829L0.763373 14.1706L0.758462 14.167L0.757234 14.1657L0.756006 14.1645C0.680907 14.0972 0.619805 14.0158 0.576195 13.9249C0.532585 13.8339 0.507322 13.7353 0.501848 13.6346C0.496375 13.5339 0.510799 13.4332 0.544297 13.3381C0.577794 13.2429 0.629708 13.1554 0.69707 13.0803" fill="#916CE7" />
                </svg>
              </span>
              Projects
            </p>
          </div>
          <div className="flex flex-col gap-2 h-28 rounded-xl p-2 border-shade_3 border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
            <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
              03
              <span className=" text-shade_1 text-4xl">+</span>
            </p>
            <p className="text-[#cccccc] flex items-center text-sm md:text-base gap-1 w-full  justify-center rounded-xl">
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
          <div className="hidden md:flex  flex-col gap-2 h-28 rounded-xl p-2 border-shade_3 border-[1px] bg-[#101010] grow shrink basis-[100px] justify-center items-center">
            <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal ">
              01
              <span className=" text-shade_1 text-4xl">+</span>
            </p>
            <p className="text-[#cccccc] flex items-center text-sm md:text-base gap-1 w-full justify-center rounded-xl">
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

        <div className="md:hidden flex flex-col gap-2 h-28 rounded-xl p-2 border-shade_3 border-[1px]  bg-[#101010] grow shrink basis-[100px] justify-center items-center">
          <p className="bg-gradient-to-t from-black to-white text-transparent bg-clip-text text-5xl flex items-center font-normal">
            01
            <span className=" text-shade_1 text-4xl">+</span>
          </p>
          <p className="text-[#cccccc] flex items-center  text-sm md:text-base gap-1 w-full justify-center rounded-xl">
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
