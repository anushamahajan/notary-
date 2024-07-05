'use client'
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      title: "About us",
      link: "#about",
    },
    {
      title: "Our Promise",
      link: "#promise",
    },
    {
      title: "Why Us?",
      link: "#whyus",
    },
    {
      title: "Guidelines",
      link: "#guidelines",
    },
    {
      title: "Documents",
      link: "#documents",
    },
    {
      title: "Customers",
      link: "#",
    },
  ];

  return (
    <nav className="absolute bg-white z-20 border-b border-gray-600 px-5 text-xl py-4 flex items-center justify-between w-full">
      <div>ASAP Mob Notary</div>
      <div className="hidden md:flex h-full justify-end items-center gap-6 text-lg">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="font-medium">
            {item.title}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col p-4 mt-8 space-y-4">
          {items.map((item, index) => (
            <a key={index} href={item.link} onClick={toggleSidebar}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
