import React from 'react'
import Case1 from '../components/Case1'
import Case2 from '../components/Case2'
import Case3 from '../components/Case3'

function Casestudy() {
  return (
    <>
    <section className=' flex flex-col gap-5 xl:gap-20'>
    <div className='grid gap-5 '>
        <Case1 />
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <Case2 />
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <Case3 />
    </div>
    </section>
    {/* <section className="sm:grid lg:hidden gap-5">
        <div className=" grid grid-cols-1 gap-5 ">

          <div className="grid rounded-lg p-5 overflow-hidden bg-shade_3">
            <div className="heading text-shade_1 font-semibold text-2xl">Problem Statement</div>
            <p className=" text-shade_5 font-medium text-3xl">Redesign the website, simplifying its structure and features, to enhance user satisfaction and overall efficiency</p>
          </div>

          <div className="grid rounded-lg p-5 overflow-hidden bg-shade_3">
            <div className="heading text-shade_1 font-semibold text-2xl">Problem Statement</div>
          </div>

          <div className="grid rounded-lg p-5 overflow-hidden bg-shade_3">
            <div className="heading text-shade_1 font-semibold text-2xl">Problem Statement</div>
            <p className=" text-shade_5 font-medium text-3xl">Redesign the website, simplifying its structure and features, to enhance user satisfaction and overall efficiency</p>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Casestudy