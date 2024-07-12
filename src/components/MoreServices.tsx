import React from "react";
import { TiTick } from "react-icons/ti";
import Heading from "./Heading";

const MoreServices = () => {
  const purpleBoxes = [
    "Authenticating documents with precision",
    "Verifying the genuineness of signatures",
    "Ensuring signers willingly participate without coercion",
  ];
  const items = [
    "General Mobile Notary Services",
    "Swearing In",
    "Consent Forms",
    "Trust/Wills",
    "I-9 Verification",
    "Apostille",
    "Minors Traveling",
    "Vehicle Authorization",
    "Weddings",
    "Home Closings/Refinances",
  ];
  return (
    <section className=" text-gray-800 py-12">
      <div className="container mx-auto md:text-center">
        <Heading title="Mobile Notary Services in Broward & Palm Beach County" />

        <p className="text-purple-700 font-semibold my-4">
          At Broward & Palm Beach County Mobile Notary, we vouch to provide
          affordable notary services right to your door.
          <span className="hidden md:inline">Trusted by over 5000+ clients, we are committed to excellence and reliability. We are dedicated to offer 24/7 notary services that are both convenient and flexible, allowing you to prioritize what matters most in your life.</span>
        </p>

        <p className="">
          Our team of notaries, appointed by the Secretary of State, is devoted
          to combating fraud and upholding integrity. Our commitments to the
          community and the state include:
        </p>
        <div className="bg-white text-gray-800 py-6">
          <div className="container px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {purpleBoxes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" p-4 bg-purple-600 text-white rounded-lg shadow flex items-center "
                  >
                    <h3 className="text-lg md:text-sm font-semibold text-center">
                      {item}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <p className=" text-purple-700 font-semibold my-4">
          Our extensive array of services ensures that all your notary needs are
          met conveniently and efficiently. No need to search
          elsewhere—everything you require is right here.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-lg md:text-base gap-4 md:gap-6">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <TiTick
                  size={25}
                  className="text-purple-600"
                />

                <h3 className="font-semibold">{item}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoreServices;
