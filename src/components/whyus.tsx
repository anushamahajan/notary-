import { Montserrat } from "next/font/google";
import React from "react";
import Heading from "./Heading";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const mont = Montserrat({ subsets: ["latin"] });

const WhyUs = () => {
  const items = [
    {
      title: "Fast Service",
      color: "bg-blue-400",
      desc: "Same-day notary services for urgent needs like last-minute wills.",
    },
    {
      title: "Always Available",
      color: "bg-cyan-400",
      desc: "Available 24/7, including evenings, weekends, and holidays.",
    },
    {
      title: "We Come to You",
      color: "bg-sky-400",
      desc: "Save time with our mobile service, traveling to your home or office.",
    },
    {
      title: "Bonded & Insured",
      color: "bg-indigo-400",
      desc: "Professional, bonded, licensed, and insured for your protection.",
    },
  ];
  return (
    <section className="py-24 px-4 bg-[#100028] text-white" id="whyus">
      <div className="md:container px-2 mx-auto text-center ">
        <Heading title="Why Choose Us?" className="text-white"  body="mx-auto"/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 *:bg-opacity-80">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${index%2 ? "bg-orange-600":"bg-orange-300 text-black"}`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <Link href={"https://wa.me/+1954488542"} className="w-[320px] bg-orange-900 flex justify-center font-medium gap-3 items-center rounded-full py-4 my-10 mx-auto text-xl border-white border-4 border-dotted">
          <FaWhatsapp className="text-green-500 stroke-[10px]" size={35}/> Message us on whatsapp
        </Link>
      </div>
    </section>
  );
};

export default WhyUs;
