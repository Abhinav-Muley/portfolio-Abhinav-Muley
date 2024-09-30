import React from 'react'
import PersonalInfo from '../components/PersonalInfo'
import About from '../components/About'
import Counter from '../components/Counter'

function Home() {
  return (
    <div className='bg-black px-16 py-8 flex gap-4 flex-wrap  justify-center'>
        <div className="flex w-full grow shrink basis-[400px] flex-col gap-4 max-w-[1000px]">

        <PersonalInfo />
        <About/>
        </div>
        <div className="flex flex-col grow shrink basis-[400px] w-full max-w-[1000px]">
        <Counter/>
        </div>
    </div>
  )
}

export default Home