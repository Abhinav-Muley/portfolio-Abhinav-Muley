import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../components/Header";

function Main() {
  return (
    <main>
      <section className='w-full max-w-[1600px] mx-auto'>
        <div className="flex flex-col gap-10 lg:gap-20 justify-between py-4">
          <Header />
          <div className='px-3 lg:px-10 mb-5'>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main