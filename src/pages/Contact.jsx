import React,{useEffect} from "react";
import Address from '../components/Address'
import Services from '../components/Services'
import Contact_Form from '../components/Contact_Form'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
      <section className=' '>
        <div className=" flex flex-wrap md:flex-nowrap ">
          <div className="left grid gap-5 w-full grid-cols-1 md:grid-cols-2 md:h-[80vh]">
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