"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import { Montserrat } from "next/font/google";
const mont = Montserrat({ subsets: ["latin"] });

const Sliderss = () => {
  return (
    <>
      <h2
        className={`md:text-4xl text-4xl font-bold text-[#001f3f] mb-8 text-center ${mont.className}`}
      >
        Industry Resources
      </h2>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
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
              className="bg-red-200 w-full object-cover h-48"
              src={`https://picsum.photos/200/300?random=${index}`}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Sliderss;
