'use client'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Montserrat } from 'next/font/google';
import emailjs from "@emailjs/browser";

const mont = Montserrat({ subsets: ["latin"] });

const ContactUs = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  useEffect(() => emailjs.init("n98FMVTpQ5jgJ6ya6"), []);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await emailjs
      .send("service_13xmfel", "template_efxkuwo", {
        name: name,
        mobile: phone,
        message : message,
      })
      .then(
        () => {
          alert("We have recieved your message. We will get back to you soon!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id='contactus' className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-9 my-6 md:my-0">
        <div className="md:w-1/2 w-5/6 max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className={`text-3xl font-bold mb-6 ${mont.className}`}>Contact Us</h2>
          <form  onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-xl font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                name="phone"
                placeholder="Enter your Mobile Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500
                         focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                rows={4}
                placeholder="Type your message here..."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="text-right">
              <Button>Submit</Button>
            </div>
          </form>
        </div>

          <iframe
            className='md:w-1/2 w-5/6' height="480"

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.467398351112!2d-80.1405795!3d26.181469699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9022ebf431137%3A0x30d38058dc849403!2sNE%2044th%20St%2C%20Oakland%20Park%2C%20FL%2033334%2C%20USA!5e0!3m2!1sen!2sin!4v1721138092360!5m2!1sen!2sin"
          >
          </iframe>

      </div>
  )
}

export default ContactUs