'use client';
import About from "@/components/About";
import Commonly from "@/components/Commonly";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import MoreServices from "@/components/MoreServices";
import Navbar from "@/components/Navbar";
import ProcessServer from "@/components/ProcessServer";
import Promise from "@/components/Promise";
import RequestCallback from "@/components/RequestCallback";
import ServiceGuidelines from "@/components/ServiceGuidelines";
import Services from "@/components/Services";
import Sliderss from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import RequestDialog from "@/components/requestCallDialog";
import { Button } from "@/components/ui/button";
import WhyUs from "@/components/whyus";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";


const mont = Montserrat({ subsets: ["latin"] });


export default function Home() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Set a timer to toggle the open state to true after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="app-scrollbar">
      <Navbar />
      <div className="h-screen relative ">
        <img
          className=" opacity-100 h-full w-full object-cover"
          src="/county.jpg"
        />
        <div className="absolute top-0 h-full w-full z-10 bg-purple-900/80"/>
        <div className=" absolute flex flex-col gap-7 justify-center md:items-center z-10 text-white h-full w-full top-0 px-5 md:text-center  ">
          <h2
            className={` text-5xl md:text-8xl font-bold ${mont.className} `}
          >
            ASAP MOBILE NOTARY{" "}
          </h2>
          <div className=" poppins-medium text-3xl md:text-4xl rounded-md">
            Your Trusted Notary Public and Process Server
          </div>
          <Link href="#contactus"> 
          <Button size={"lg"} className="text-xl w-fit bg-white text-black font-semibold hover:bg-white">
            Contact ASAP
          </Button>
          </Link>
        </div>
      </div>
      <Services/>
      <MoreServices/>
      {/* <About /> */}
      {/* <Promise /> */}
      <ProcessServer/>
      <WhyUs />
      {/* <ServiceGuidelines /> */}
      {/* <Commonly /> */}
      <section className="py-16 px-4">
        <div className="container mx-auto md:text-center">
          <Heading title="Our Numbers Speak"/>

          <p className="text-lg md:text-xl mb-8">
            Serving Broward & Palm Beach County, we set the industry benchmark
            by offering affordable notary services right at your doorstep. Join
            the community of over 5000 satisfied clients who trust us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
            <div className="text-purple-700 font-bold rounded-lg shadow-lg p-6">
              <h3 className="text-4xl md:text-6xl  mb-2">2000+</h3>
              <p className="text-2xl md:text-xl">Satisfied Clients</p>
            </div>

            <div className="text-purple-700 font-bold rounded-lg shadow-lg p-6">
              <h3 className="text-4xl md:text-6xl  mb-2">95%</h3>
              <p className="text-2xl md:text-xl">Repeat Customers</p>
            </div>

            <div className="text-purple-700 rounded-lg font-bold shadow-lg p-6">
              <h3 className="text-4xl md:text-6xl  mb-2">2015</h3>
              <p className="text-2xl md:text-xl">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
      <Sliderss />
      <RequestCallback/>
      <RequestDialog open={open} setOpen={setOpen} />

      <ContactUs />
      <Footer/>
    </main>
  );
}
