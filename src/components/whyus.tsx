import { Montserrat } from "next/font/google";
import React from "react";
import Heading from "./Heading";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const mont = Montserrat({ subsets: ["latin"] });

const WhyUs = () => {
  const items = [
    {
      title: "Reliable & Punctual",
      color: "bg-blue-400",
      desc: "Count on us for on-time arrivals and dependable notary service every single time.",
    },
    {
      title: "Confidential & Professional",
      color: "bg-cyan-400",
      desc: "We handle every document with complete privacy, discretion, and professionalism.",
    },
    {
      title: "Affordable, Transparent Pricing",
      color: "bg-sky-400",
      desc: "No hidden fees—just fair, upfront pricing for quality mobile notary services.",
    },
    {
      title: "Same-Day Appointments",
      color: "bg-indigo-400",
      desc: "Need it now? We offer flexible, same-day scheduling for your urgent needs.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-navy text-white" id="whyus">
      <div className="md:container px-2 mx-auto text-center ">
        <Heading title="Why Choose Us?" className="text-white"  body="mx-auto"/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg bg-white text-navy "}`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <Link href={"https://wa.me/+19544488542"} className="w-[320px] bg-navy flex justify-center font-medium gap-3 items-center rounded-full py-4 my-10 mx-auto text-xl border-white border-4 border-dotted">
          <FaWhatsapp className="text-green-500 stroke-[10px]" size={35}/> Message us on whatsapp
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
