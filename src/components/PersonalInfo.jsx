import React from "react";
import profile from "../assets/profile.png";
import { tags } from "../data/Tags";

function PersonalInfo() {
  return (
    <div className="bg-[#101010] border-[rgb(30,30,30)] border-[1px]  flex flex-col gap-5 p-5 rounded-xl ">
      <div className="flex flex-wrap gap-5 justify-center w-full">
        <div className="bg-[#916CE1] grow shrink basis-[120px] max-w-28 flex aspect-square justify-center rounded-xl overflow-hidden">
          <img className=" aspect-square" src={profile} alt="" />
        </div>
        <div className=" grow shrink basis-[300px] w-full flex-col flex gap-2">
          <div className="flex flex-wrap gap-2 justify-between ">
            <div className=" border-[1px] border-shade_4 rounded-2xl px-3 py-1 flex items-center">
              <span className=" bg-shade_4 p-1 rounded-full">
                <div className="bg-[#6DD33D] w-3 h-3 rounded-full"></div>
              </span>
              <p className="text-[#999999] text-nowrap ml-1 text-base">Available To Work</p>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <p className="text-[#999999]">Resume</p>
                <div className=" p-2 aspect-square bg-[#282828] rounded-md">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71167 0C7.55829 0 7.4112 0.0609293 7.30274 0.169384C7.19429 0.277839 7.13336 0.424935 7.13336 0.578313V9.03942L5.83794 7.52733C5.78852 7.46961 5.72822 7.42219 5.66048 7.38777C5.59274 7.35336 5.51888 7.33262 5.44313 7.32675C5.36737 7.32088 5.2912 7.32999 5.21897 7.35355C5.14673 7.37712 5.07985 7.41468 5.02213 7.4641C4.96441 7.51351 4.91699 7.57381 4.88258 7.64155C4.84816 7.70929 4.82743 7.78315 4.82155 7.85891C4.81568 7.93466 4.82479 8.01083 4.84836 8.08306C4.87192 8.1553 4.90948 8.22219 4.9589 8.2799L7.27215 10.9787C7.32644 11.0422 7.39385 11.0932 7.46972 11.1281C7.54559 11.1631 7.62813 11.1812 7.71167 11.1812C7.79521 11.1812 7.87775 11.1631 7.95362 11.1281C8.0295 11.0932 8.0969 11.0422 8.15119 10.9787L10.4644 8.2799C10.5139 8.22219 10.5514 8.1553 10.575 8.08306C10.5986 8.01083 10.6077 7.93466 10.6018 7.85891C10.5959 7.78315 10.5752 7.70929 10.5408 7.64155C10.5064 7.57381 10.4589 7.51351 10.4012 7.4641C10.3435 7.41468 10.2766 7.37712 10.2044 7.35355C10.1321 7.32999 10.056 7.32088 9.98021 7.32675C9.90446 7.33262 9.8306 7.35336 9.76286 7.38777C9.69512 7.42219 9.63482 7.46961 9.58541 7.52733L8.28998 9.03865V0.578313C8.28998 0.424935 8.22905 0.277839 8.1206 0.169384C8.01214 0.0609293 7.86505 0 7.71167 0Z" fill="#CCCCCC" />
                    <path d="M9.44578 5.97607V6.26754C9.80616 6.13945 10.1988 6.13408 10.5625 6.25229C10.9263 6.37049 11.2407 6.60563 11.457 6.9211C11.6732 7.23658 11.7791 7.61469 11.7581 7.99658C11.7372 8.37848 11.5906 8.74273 11.3411 9.03265L9.02785 11.7314C8.86498 11.9214 8.66295 12.0738 8.43562 12.1784C8.2083 12.2829 7.96105 12.337 7.71084 12.337C7.46064 12.337 7.21339 12.2829 6.98606 12.1784C6.75874 12.0738 6.55671 11.9214 6.39383 11.7314L4.08058 9.03265C3.83181 8.74257 3.68578 8.37846 3.66516 7.99687C3.64454 7.61529 3.75048 7.23757 3.96654 6.92236C4.18259 6.60716 4.49667 6.3721 4.86001 6.2537C5.22335 6.13529 5.61562 6.14016 5.9759 6.26754V5.97607H4.62651C2.44588 5.97607 1.3548 5.97607 0.677783 6.65386C-4.59602e-08 7.33087 0 8.42195 0 10.6026V11.3737C0 13.5543 -4.59602e-08 14.6454 0.677783 15.3224C1.3548 16.0002 2.44588 16.0002 4.62651 16.0002H10.7952C12.9758 16.0002 14.0669 16.0002 14.7439 15.3224C15.4217 14.6454 15.4217 13.5543 15.4217 11.3737V10.6026C15.4217 8.42195 15.4217 7.33087 14.7439 6.65386C14.0669 5.97607 12.9758 5.97607 10.7952 5.97607H9.44578Z" fill="#CCCCCC" />
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
      <div className="bg-shade_8 flex-wrap gap-2 flex rounded-md p-2">
        {tags.map((item, index) => (
          <span
            key={index}
            className="text-shade_5 text-nowrap flex items-center gap-1 bg-[#191919] p-1 pr-2 rounded-2xl "
          >
            <span className="text-[#916CE1]">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <a
          href="https://www.linkedin.com/in/siddhant-bilange"
          target="_blank"
          className="w-full grow shrink basis-[200px] "
        >
          <div className="w-full bg-shade_4 hover:bg-shade_3 transition ease-out duration-100 p-3 rounded-lg flex justify-center items-center gap-3 ">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="#916CE7" />
            </svg>
            <span className="text-shade_5">Siddhant Bilange</span>
          </div>
        </a>
        <a
          href="mailto:siddhantbilange@email.com"
          target="_blank"
          className="w-full grow shrink basis-[200px] "
        >
          <div className="w-full bg-shade_4 hover:bg-shade_3 transition ease-out duration-100 p-3 rounded-lg flex justify-center items-center gap-3 ">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#916CE7" />
            </svg>
            <span className="text-shade_5">siddhantbilange@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PersonalInfo;
