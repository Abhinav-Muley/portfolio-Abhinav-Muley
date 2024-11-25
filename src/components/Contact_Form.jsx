import { useState, useEffect } from 'react'
import React from 'react'
import emailjs from '@emailjs/browser';
import Modal from '../components/Model';


function Contact_Form() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("")
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    try {
      const templateParams = {
        email,
        Phone,
        message,
      };

      const response = await emailjs.send(
        "service_08092001",
        "template_pri7og4",
        templateParams,
        "keAW5fe8eZKnbgpAB"
      );

      console.log("Email sent successfully", response);
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();

    setEmail("");
    setPhone("");
    setMessage("");

    setIsFormVisible(false);
		setIsModalVisible(true);

    setTimeout(() => {
      setIsFormVisible(true);
      setIsModalVisible(false);
    }, 3000);


  };
  return (
    <>
      <div className="flex flex-col justify-center gap-5 rounded-xl p-5 md:p-10 bg-shade_3 bg-opacity-40 border-[0.002px] border-shade_3 ">

        <div className="flex items-center gap-3 w-full">
          <h3 className=' text-shade_1 text-2xl md:text-4xl mb-5 font-semibold w-full'>Get in Touch</h3>
        </div>

        <form className=" grid gap-5" action="#" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-shade_5 text-opacity-80 tracking-wider">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="text-base rounded-lg bg-transparent border-[1px] focus:border-[.6px] border-shade_5 border-opacity-40  text-shade_5 placeholder-shade_5 placeholder-opacity-40 focus:border-shade_5 block w-full p-3"
              required
            />
          </div>

          <div className="">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-shade_5 text-opacity-80 tracking-wider">Mobile Number</label>
            <input
              placeholder="Enter Mobile number"
              name="Phone"
              id="Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              type="Phone"
              autoComplete="off"
              className='text-base rounded-lg bg-transparent border-[1px] focus:border-[.6px] border-shade_5 border-opacity-40  text-shade_5 placeholder-shade_5 placeholder-opacity-40 focus:border-shade_5 block w-full p-3' required />

          </div>

          <div className="">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-shade_5 text-opacity-80 tracking-wider">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message here..."
              cols="30"
              rows="2"
              className="text-base rounded-lg bg-transparent border-[1px] focus:border-[.6px] border-shade_5 border-opacity-40  text-shade_5 placeholder-shade_5 placeholder-opacity-40 focus:border-shade_5 block w-full h-full p-3"
              required
              autoComplete="off"
            />
          </div>

          <div className=" mt-8 h-12">
            <button type="submit" className="relative h-full w-full font-bold text-lg rounded-lg text-slate-800 bg-shade_1  hover:bg-opacity-80 transition ease-out duration-100 p-3 flex justify-center items-center ">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Modal isVisible={isModalVisible} />
    </>
  )
}

export default Contact_Form