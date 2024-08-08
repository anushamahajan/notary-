import { Montserrat } from "next/font/google";
import React from "react";
const mont = Montserrat({ subsets: ["latin"] });

const Promise = () => {
  const items = [
    "Authenticity of Documents",
    "Genuine Signatures",
    "Willing Participation",
    "Reliable Services",
    "Document Integrity",
    "Secure Services",
  ];
  return (
    <section className="flex py-16 px-4 gap-4 items-center  flex-col md:flex-row ">
      <div className="md:w-full  md:p-5 md:h-1/2">
        <img className=" rounded-xl object-cover" src="/img.png" />
      </div>

      <section className="grid items-center justify-center pb-4 ">
        <div className="space-y-5 md:container px-4 mx-auto md:text-center font-montserrat ">
          <h2 className={`text-3xl font-bold ${mont.className}`}>
            Our Promise to the Community & State
          </h2>
          <div className="h-2 md:w-[500px] w-[200px] bg-purple-700 mx-auto relative -top-2 py-0"/>

          <p className="text-lg">
            We take our role as notaries seriously and are committed to serving
            the community with integrity and professionalism. Our mission is to
            ensure that every document we notarize is handled with the utmost
            care and accuracy.
          </p>

          <div className="gap-x-4 gap-y-6 justify-center items-center text-xl grid grid-cols-1 md:grid-cols-2 ">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-gray-300 rounded-lg shadow-lg py-4 px-1 bg-white text-center"
                >
                  <h3 className="font-bold mb-2">{item}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Promise;
