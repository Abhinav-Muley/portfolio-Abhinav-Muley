import React from "react";
import { Skills } from "../data/Skills";
function Skill() {
  return (
    <div className="bg-[#101010] rounded-xl p-4  border-[#1e1e1e] border-[1px] flex flex-col gap-4 w-full">
      <div className="flex justify-center">
        <p className="text-[#999999] flex items-center gap-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#916ce1]"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.894 15.553a1 1 0 0 1-.447 1.341l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 .894-1.788L12 18.88l7.554-3.775a1 1 0 0 1 1.341.447m0-4a1 1 0 0 1-.447 1.341l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 .894-1.788L12 14.88l7.554-3.775a1 1 0 0 1 1.341.447M12.008 3q.056 0 .111.007l.111.02l.086.024l.012.006l.012.002l.029.014l.05.019l.016.009l.012.005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788l8-4l.011-.005l.018-.01l.078-.032l.011-.002l.013-.006l.086-.024l.11-.02l.056-.005z"
            ></path>
          </svg>
          My Stacks
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2  ">
        {Skills.map((item, index) => (
          <p key={index} className="bg-[#191919]  w-full text-[#cccccc] px-2 py-2 flex items-center gap-2 rounded-md font-normal text-sm">
            
            <span className="bg-[#282828] rounded-md p-[2px]  ">
              {item.icon}
            </span>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Skill;
