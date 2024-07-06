"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import { Montserrat } from "next/font/google";
const mont = Montserrat({ subsets: ["latin"] });

const Sliderss = () => {
  return (
    <div className="py-7">
      <h2
        className={`md:text-4xl text-4xl font-bold text-[#001f3f] text-center ${mont.className}`}
      >
        Industry Resources
      </h2>
      <div className="h-2 md:w-[300px] w-[200px] bg-[#3AAFA9] mx-auto relative mb-8 mt-2 py-0"/>

      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper w-[90%]"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} className="">
            <img
              className="bg-red-200 w-full object-contain"
              src={`/slider/${index+1}.png`}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliderss;
