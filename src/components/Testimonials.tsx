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
      text: "Mr. Kumar was courteous and professional; and he provided excellent service as a Notary. He is willing to come to the location of your choice - which makes his service convenient as well. I highly recommend him as a Notary!",
      name: "Joan Twersky",
      rating: 5,
    },
    {
      text: "Great service… I needed documents notarized at short notice at around 10 PM, and this guy got to my house in about 10 minutes and got it all done flawlessly couldn’t have been more happy props to my Guy.",
      name: "Aiden Hart",
      rating: 5,
    },
    {
      text: "Mr Kumar offers an excellent service at a reasonable price. Great conversation, very pleasant . I will definitely use his services again , recomending to family and friends.",
      name: "Alexandra Silva",
      rating: 5,
    },
    {
      text: "Had a wonderful experience, we were able to meet within literally 15 minutes at 8 PM, he was prompt, efficient, and super affordable! The whole process was really fast! Highly recommend to future clients!",
      name: "Jessica M",
      rating: 5,
    },
    {
      text: "I was in need of a notary asap and he was very quick and on time. Thank you for your service. (10/10). Kumar was very professional and I would recommend him to anyone.",
      name: "Jasmine Gerome",
      rating: 5,
    },
    {
      text: "Great notary service! Very reliable and professional. I recommend 100%. Mr. Kumar is really good at what he does!",
      name: "Brandon Ramsamooj",
      rating: 5,
    },
  ];

  const swiperRef = useRef<SwiperType>();
  return (
    <div className="relative py-20 bg-[#100028] container px-11 md:px-20 md:max-w-none">
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
        className="prev absolute top-1/2 md:left-6 left-2 z-10 cursor-pointer text-purple-600"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        <FaChevronLeft size={30} />
      </div>
      <div
        className="next absolute top-1/2 right-2 md:right-6 z-10 cursor-pointer text-purple-600"
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
