import React, { useEffect } from "react";
import PersonalInfo from '../components/PersonalInfo'
import About from '../components/About'
import Counter from '../components/Counter'
import Experience from '../components/Experience'
import Skill from '../components/Skill'
import { BorderBeam} from "../components/ui/border-beam";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <>
    {/* <FlickeringGridRoundedDemo/> */}
    
    <div className='flex gap-3 md:gap-4 flex-wrap justify-center'>
      <div className="flex w-full grow shrink basis-[400px] flex-col gap-3 md:gap-4 max-w-[1000px]">
        <PersonalInfo />
        <About />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 grow shrink basis-[400px] w-full max-w-[1000px]">
        <Counter />
        <Experience />
        <Skill />
      </div>
    </div>

    {/* <AnimatedBeam/> */}
    
    </>
  )
}

export default Home