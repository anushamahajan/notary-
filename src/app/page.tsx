import About from "@/components/About";
import Commonly from "@/components/Commonly";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import Promise from "@/components/Promise";
import ServiceGuidelines from "@/components/ServiceGuidelines";
import { Button } from "@/components/ui/button";
import WhyUs from "@/components/whyus";
import Image from "next/image";

export default function Home() {
  return (
    <main className="app-scrollbar">
      <Navbar />
      <div className="h-screen relative ">
        <img
          className="brightness-[55%] opacity-100 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className=" absolute flex flex-col gap-7 justify-center items-center z-10 h-full w-full top-0 px-5 text-center  ">
          <h2 className="text-white text-5xl md:text-8xl font-bold montserrat ">
            ASAP MOBILE NOTARY{" "}
          </h2>
          <div className=" poppins-medium text-4xl text-gray-100">
            Your Trusted Notary Publics and Process Services
          </div>
          <Button size={"lg"} className="text-xl">
            Contact ASAP
          </Button>
        </div>
      </div>
      <About />
      <Promise />
      <WhyUs />
      <ServiceGuidelines />
      <Commonly />
      <section className="py-16 px-4">
        <div className="container mx-auto md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {" "}
            Notary Services in Broward & Palm Beach County
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Serving Broward & Palm Beach County, we set the industry benchmark
            by offering affordable notary services right at your doorstep. Join
            the community of over 5000 satisfied clients who trust us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
            <div className="text-sky-600 font-bold rounded-lg shadow-lg p-6">
              <h3 className="text-4xl md:text-6xl  mb-2">5000+</h3>
              <p className="text-2xl md:text-xl">Satisfied Clients</p>
            </div>

            <div className="text-sky-600 font-bold rounded-lg shadow-lg p-6">
              <h3 className="text-4xl md:text-6xl  mb-2">75%</h3>
              <p className="text-2xl md:text-xl">Repeat Customers</p>
            </div>

            <div className="text-sky-600 rounded-lg font-bold shadow-lg p-6">
              <h3 className="text-4xl md:text-6xl  mb-2">2010</h3>
              <p className="text-2xl md:text-xl">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
      <footer className="bg-black w-full ">
        <div className="container mx-auto text-center text-white py-4">
          <p className=" ">
            &copy; 2024 ASAP Mobile Notary. All Rights Reserved.
          </p>
        </div>

      </footer>
    </main>
  );
}
