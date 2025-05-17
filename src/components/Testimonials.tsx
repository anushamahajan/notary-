"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper as SwiperType } from "swiper/types";
import Heading from "./Heading";
type Props = {};

const Testimonials = (props: Props) => {
  const items = [
    {
      text: "Dolly was amazing—she came right to my door late in the evening and handled everything with total professionalism. Highly recommended!",
      name: "Renee Patterson",
      rating: 5,
    },
    {
      text: "Needed a notary urgently and Dolly delivered! She arrived quickly, explained everything clearly, and made the process smooth and stress-free.",
      name: "Carlos Vega",
      rating: 5,
    },
    {
      text: "Prompt, polite, and efficient. Dolly made it so easy to get my real estate documents notarized from the comfort of home.",
      name: "Lamar Jenkins",
      rating: 5,
    },
    {
      text: "I appreciate Dolly's professionalism and flexibility. She accommodated my tight schedule without hesitation. Great service!",
      name: "Anita Desai",
      rating: 5,
    },
    {
      text: "Highly recommend Broward Express Notary! Dolly was courteous, detail-oriented, and right on time. I’ll be using her again.",
      name: "George Martin",
      rating: 5,
    },
    {
      text: "Excellent mobile notary service. Dolly arrived within 20 minutes, was well-prepared, and very respectful. 10/10 experience.",
      name: "Maya Robinson",
      rating: 5,
    },
  ];
  

  const swiperRef = useRef<SwiperType>();
  return (
    <div className="relative py-20 bg-navy container px-11 md:px-20 md:max-w-none" id="testimonials">
        <Heading title="What Our Clients Say" className="text-white"/>
      <Swiper
      
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={
            {
                640: {
                slidesPerView: 2,
                },
            }
        }
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        className="py-5"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-white text-black rounded-lg p-6 !h-auto !flex flex-col !justify-center space-y-2"
            >
          
                  <p className=" italic">{item.text}</p>
                
              <div className="flex items-center">
                <cite className="">
                  <span className="block font-semibold">
                    {item.name}
                  </span>
                  <span>⭐⭐⭐⭐⭐</span>
                </cite>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="prev absolute top-1/2 md:left-6 left-2 z-10 cursor-pointer text-white"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        <FaChevronLeft size={30} />
      </div>
      <div
        className="next absolute top-1/2 right-2 md:right-6 z-10 cursor-pointer text-white"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        <FaChevronRight size={30} />
      </div>




    </div>
  );
};

export default Testimonials;
