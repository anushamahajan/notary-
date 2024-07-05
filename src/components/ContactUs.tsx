import React from 'react'
import { Button } from './ui/button'

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-9 mb-5 md:mb-0">
        <div className="md:w-1/2 w-5/6 max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 ">Contact Us</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label className="block text-xl font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 
                        rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500
                         focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Type the subject"
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
            className='md:w-1/2 w-5/6' height="600"

            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>

      </div>
  )
}

export default ContactUs