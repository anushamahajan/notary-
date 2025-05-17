'use client';
import About from "@/components/About";
import Commonly from "@/components/Commonly";
import ContactUs from "@/components/ContactUs";
import Dolly from "@/components/Dolly";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
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
import CountUp from "react-countup";
import AboutNotary from "@/components/AboutNotary";
import Timings from "@/components/Timings";


const mont = Montserrat({ subsets: ["latin"] });


export default function Home() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Set a timer to toggle the open state to true after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="app-scrollbar">
      <Navbar />

      <Hero/>
      <Timings/>
    
      <AboutNotary/>
      <Dolly/>
      <RequestCallback/>
      <Services/>
      {/* <MoreServices/> */}
      {/* <About /> */}
      {/* <Promise /> */}
      {/* <ProcessServer/> */}
      
      {/* <ServiceGuidelines /> */}
      {/* <Commonly /> */}
      <section className="py-16 px-4">
  <div className="container mx-auto md:text-center">
    <Heading title="Why Clients Choose Us" />

    <p className=" mb-8">
      At Broward Express Notary, we’re setting new standards in convenience and reliability for Broward & Palm Beach County. Fast response, mobile service, and unmatched flexibility—right at your doorstep.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
      <div className="text-navy font-bold rounded-lg shadow-lg p-6">
        <CountUp end={100} enableScrollSpy={true} suffix="%" className="text-4xl md:text-5xl mb-2" />
        <p className="text-2xl md:text-xl">Mobile Convenience</p>
      </div>

      <div className="text-navy font-bold rounded-lg shadow-lg p-6">
        <CountUp end={24} enableScrollSpy={true} suffix="/7" className="text-4xl md:text-5xl mb-2" />
        <p className="text-2xl md:text-xl">Service Availability</p>
      </div>

      <div className="text-navy font-bold rounded-lg shadow-lg p-6">
        <CountUp end={100} enableScrollSpy={true} suffix="%" className="text-5xl md:text-6xl mb-2" />
        <p className="text-2xl md:text-xl">Transparent Pricing</p>
      </div>
    </div>
  </div>
</section>

      <WhyUs />
      <Sliderss />
      <Testimonials/>
      
     
      <RequestDialog open={open} setOpen={setOpen} />

      <ContactUs />
      <Footer/>
    </main>
  );
}
