import React from "react";

function About() {
  return (
    <div className=" bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_3 rounded-xl h-full flex flex-col gap-2 p-4">
      <div className="flex items-center w-fit bg-[#141414] border-[#1e1e1e] rounded-2xl gap-1 py-[2px] px-2 pr-3 border-[1px] ">
        <span className=" bg-[#ffffff1c] p-1 rounded-full">
          <div className="bg-[#916ce7] w-3 h-3 rounded-full"></div>
        </span>
        <p className="text-shade_1 font-medium text-lg">About</p>
      </div>
      <div className="">
        <div className="text-shade_5  text-sm md:text-lg font-light">
          I'm <strong className=" font-bold">Siddhant Bilange</strong>. I'm a <strong className=" font-bold">UX Designer</strong> with <strong className=" font-bold">1 Year</strong> of experience in
          creating intuitive and visually appealing digital experiences.
          <br /><br />
          I'm skilled in conducting <strong className=" font-bold">user research</strong>, creating <strong className=" font-bold">wireframes</strong>, <strong className=" font-bold">prototypes</strong>, and designing <strong className=" font-bold">user interface</strong>. I'm passionate about
          understanding user needs and behaviors to create functional and
          enjoyable designs.
          <br /><br />
          I'm proficient in <strong className=" font-bold bg-gradient-to-r from-red-400 to-emerald-400 text-transparent bg-clip-text">Figma</strong> and have experience working
          with <strong className=" font-bold">design system</strong>. I'm committed to delivering user-centered designs
          that enhance user satisfaction and drive business outcomes.
        </div>
      </div>
    </div>
  );
}

export default About;
