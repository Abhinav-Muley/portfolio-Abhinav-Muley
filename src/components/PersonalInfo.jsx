import React from "react";
import profile from "../assets/profile.png";
import { tags } from "../data/Tags";

function PersonalInfo() {
  return (
    <div className="bg-[#101010] border-[#1e1e1e] border-[1px]  flex flex-col gap-5 p-5 rounded-xl ">
      <div className="flex flex-wrap gap-2 justify-center w-full">
        <div className="bg-[#916CE1] grow shrink basis-[120px] max-w-28 flex aspect-square justify-center rounded-xl">
          <img className=" " src={profile} alt="" />
        </div>
        <div className=" grow shrink basis-[300px]  w-full flex-col flex gap-2 ">
          <div className="flex flex-wrap gap-2 justify-between ">
            <div className="border-[#1e1e1e] border-[1px] rounded-2xl px-3 py-1 flex items-center">
              <span className=" bg-[#ffffff1c] p-1 rounded-full">
                <div className="bg-[#6DD33D] w-3 h-3 rounded-full"></div>
              </span>
              <p className="text-[#999999] text-nowrap ml-1 text-base">Available To Work</p>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <p className="text-[#999999]">Resume</p>
                <div className=" p-2 aspect-square bg-[#282828] rounded-md">
                  <svg
                    className="text-[#cccccc]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                  >
                    <path   
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 1.25a.75.75 0 0 0-.75.75v10.973l-1.68-1.961a.75.75 0 1 0-1.14.976l3 3.5a.75.75 0 0 0 1.14 0l3-3.5a.75.75 0 1 0-1.14-.976l-1.68 1.96V2a.75.75 0 0 0-.75-.75"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M14.25 9v.378a2.249 2.249 0 0 1 2.458 3.586l-3 3.5a2.25 2.25 0 0 1-3.416 0l-3-3.5A2.25 2.25 0 0 1 9.75 9.378V9H8c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.172 2 15v1c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[#e6e6e6] text-2xl font-normal ">
              Siddhant Bilange
            </p>
            <p className="text-[#999999] ">
              I'm a <span className="text-[#916CE1]">Frontend Developer</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#141414] border-[#1e1e1e] flex-wrap gap-2 flex border-[1px] rounded-md p-2">
        {tags.map((item, index) => (
          <span
            key={index}
            className="text-[#cccccc] text-nowrap flex items-center gap-1 bg-[#191919] p-1 pr-2 rounded-2xl "
          >
            <span className="text-[#916CE1]">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <a
          href="https://www.linkedin.com/in/abhinav-muley-9b7215208/"
          target="_blank"
          className="w-full grow shrink basis-[200px] "
        >
          <div className="w-full bg-[#1f1f1f] p-2 rounded-lg flex justify-center items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
              className="text-[#916CE1]"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 10a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.66c.305-.344.82-.748 1.393-.993c.333-.142.834-.2 1.182-.09a.55.55 0 0 1 .293.188c.052.07.132.226.132.555v4a1 1 0 0 0 2 0v-4c0-.67-.17-1.266-.524-1.744a2.54 2.54 0 0 0-1.301-.907c-.902-.283-1.901-.126-2.568.16a6 6 0 0 0-.623.312A1 1 0 0 0 11 9M8 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                ></path>
              </g>
            </svg>
            <span className="text-[#cccccc]"> Siddhant Bilange</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-muley-9b7215208/"
          target="_blank"
          className="w-full grow shrink basis-[200px] "
        >
          <div className="w-full bg-[#1f1f1f]  p-2 rounded-lg flex justify-center items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 24 24"
              className="text-[#916CE1]"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
              ></path>
            </svg>
            <span className="text-[#cccccc]">siddhantbilange@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PersonalInfo;
