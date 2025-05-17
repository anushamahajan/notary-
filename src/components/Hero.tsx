"use client";

import { Montserrat } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
const mont = Montserrat({ subsets: ["latin"] });

const Hero = () => {
    const items = [
      {
        img: "https://images.pexels.com/photos/7876053/pexels-photo-7876053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "TRUSTED NOTARY SOLUTIONS ",
        desc: "At Broward Express Notary, we bring care, clarity, and confidence to your legal paperwork—led by Dolly Garg, a certified notary and passionate advocate for precision and professionalism.",
      },
      {
        img: "https://www.proplogix.com/wp-content/uploads/2021/12/ProperSign-Blog-Featured-Image-A-Short-History-of-Notary-Public-Laws.png",
        title: "WOMAN-LED. COMMUNITY-DRIVEN.",
        desc: "Founded by Dolly Garg, we proudly serve South Florida with mobile notary services that are prompt, discreet, and handled with heart. Legal documents deserve attention—and so do you.",
      },
      {
        img: "https://images.pexels.com/photos/7841454/pexels-photo-7841454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "ON-TIME. ON-SITE. ON YOUR TERMS.",
        desc: "Whether it’s real estate closings, healthcare directives, or school forms—our notary solutions meet you where you are. Weekends, evenings, and emergency slots available.",
      },
    ];
    
  return (
    <>
    <div className="">
      <Swiper slidesPerView={1} spaceBetween={0} loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Parallax, Autoplay]}
    //   speed={300}
      parallax={true}>
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="bg-cover bg-bottom bg-no-repeat relative  md:pt-20 h-screen  flex items-center md:justify-center"
                style={{ backgroundImage: `url(${item.img})` }}
                
              >
                <div className="absolute h-full w-full bg-black/60"></div>
                <div className="text-white md:text-center z-10 md:max-w-screen-xl space-y-4 p-5 absolute top-1/2 -translate-y-1/3">
                <div className="md:text-center md:text-3xl text-xl text-blue-300 font-semibold">BROWARD EXPRESS NOTARY</div>
                  <h1 className={`text-3xl md:text-6xl font-bold ${mont.className}`} data-swiper-parallax="-500">
                    {item.title}
                  </h1>
                  <p className="text-sm md:text-xl md:px-10" data-swiper-parallax="-400">{item.desc}</p>
                  <Link href="#contactus" data-swiper-parallax="-400">
                    <Button variant={'secondary'} className="my-8 md:py-7 md:px-12 rounded-lg text-lg font-bold bg-sky-900  text-white" data-swiper-parallax="-400">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </>
  );
};

export default Hero;
