import React from "react";

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
    <section className="py-24 px-4 bg-gray-800 text-white">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl md:text-5xl font-extrabold md:mb-8 pb-10">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 *:bg-opacity-80">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${item.color}`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
