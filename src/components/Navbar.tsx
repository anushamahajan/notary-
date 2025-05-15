"use client";
import { HomeIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "Services", link: "#services" },
    { title: "Why Us?", link: "#whyus" },
    { title: "Testimonials", link: "#testimonials" },
    {
      title: "Reach Out Now",
      link: "#contactus",
      className: "bg-sky-700 text-white rounded-2xl px-6 py-4",
    },
  ];


  return (
    <nav className="absolute bg-white z-20 border-b border-gray-600  text-xl w-full">
      <div className="bg-navy font-semibold py-2.5 w-full px-5 text-xs text-white text-center md:text-left">
        <PhoneIcon
          className="inline mr-1 text-white stroke-[2px]"
          size={15}
        />{" "}
        <Link href={"tel:+1 (954) 448-8542"} className=" text-white">
          +1 (954) 448-8542
        </Link>
        {""}{" "}
        <HomeIcon
          className="inline ml-3 mr-1 text-white stroke-[2px]"
          size={15}
        />{" "}
        502 NE 44th St. Oakland Park FL 33334{" "}
      </div>
      <div className="flex items-center justify-between py-1 px-8">
        <div>
          <img src="./logo4.jpg" alt="" className="md:h-24 h-16" />
        </div>
        <div className="hidden md:flex h-full justify-end items-center gap-10 text-xl uppercase">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`font-semibold ${item.className ?? ""}`}
            >
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
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-30`}
        >
          <button className="absolute top-4 right-4" onClick={toggleSidebar}>
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
  {navItems.map((item, index) => (
    <a
      key={index}
      href={item.link}
      onClick={toggleSidebar}
      className={`text-lg font-medium ${item.className ?? ""}`}
    >
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
      </div>
    </nav>
  );
};

export default Navbar;
