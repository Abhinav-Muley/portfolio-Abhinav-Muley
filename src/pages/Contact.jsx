import React from 'react'
import Logo_Name from '../components/Logo_Name'
import Address from '../components/Address'
import Services from '../components/Services'
import Contact_Form from '../components/Contact_Form'

function Contact() {
  
  return (
    <>
      <section className=' '>
        <div className=" flex flex-wrap md:flex-nowrap ">
          <div className="left grid gap-5 w-full grid-cols-1 md:grid-cols-2 md:h-[80vh]">
            {/* <Logo_Name /> */}
            <div className="grid gap-5 w-full ">
            <Address />
            <Services />
            </div>
            <Contact_Form />
          </div>
          <div className="right bg-slate-600">

          </div>
        </div>
      </section>
    </>

  )
}

export default Contact