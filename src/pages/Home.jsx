import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import About from '../components/About'
import Counter from '../components/Counter'
import Experience from '../components/Experience'
import Skill from '../components/Skill'

function Home() {
  return (
    <div className='bg-black flex gap-4 flex-wrap  justify-center'>
        <div className="flex w-full grow shrink basis-[400px] flex-col gap-4 max-w-[1000px]">
        <PersonalInfo />
        <About/>
        </div>
        <div className="flex flex-col gap-4 grow shrink basis-[400px] w-full max-w-[1000px]">
        <Counter/>
        <Experience/>
        <Skill/>
        </div>
    </div>
  )
}

export default Home