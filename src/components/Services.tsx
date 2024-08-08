import React from "react";
import { FaHandshake, FaHeart, FaHome, FaLaptop, FaStamp } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdGavel } from "react-icons/md";
import Heading from "./Heading";

const Services = () => {
  const items = [
    {
      title: "Power of Attorney",
      description:
        "A Power of Attorney (POA) grants authority to another person (your agent) to act on your behalf in legal matters, from writing checks to signing documents. We offer General and Special POA options, including Durable POAs for continued authority if you're unable to manage your affairs.",
      icon: <MdGavel />,
    },
    {
      title: "Home Closings",
      description:
        "Ensure smooth real estate transactions with our mobile notary services for home closings. Whether you're busy or out of the area, our team can assist in signing and submitting final contracts, ensuring a hassle-free closing process.",
      icon: <FaHome />,
    },
    {
      title: "Mobile Notary",
      description:
        "With our 24-hour mobile notary services, you can process your legal documents even at the last minute or within the same day. When you're in a rush to get your legal documents or paperwork done, you can rely on the assistance of a mobile notary from our team.",
      icon: <ImMobile />,
    },
    {
      title: "Weddings",
      description:
        "We would be honored to act as your preferred Marriage/Wedding Officiant provider for your ceremony on your big day. We also make the Apostille process for international documents more easy and convenient.",
      icon: <FaHeart />,
    },
    {
      title: "Apostille Services",
      description:
        "When a document is to be used in a foreign country, it may be necessary to have it Apostilled. An Apostille authenticates the origin of the underlying public document. We make the Apostille process for international documents easy and convenient.",
      icon: <FaStamp />,
    },
    {
      title: "Trust / Wills",
      description:
        "To ensure a deceased person's wishes are met, a validated will, trust, or deed is essential. These documents outline funeral preferences and asset division. Our mobile notaries offer validation services with the convenience of coming to your home or preferred location 24/7.",
      icon: <FaHandshake />,
    },
    {},
    {
      title: "Remote Notarization",
      description:
        "We offer remote notarization services for clients who are unable to meet in person. Our remote notaries are certified to conduct online notarizations, ensuring your documents are legally binding and secure. The services are safe and can be completed effortlessly from the comfort of your home.",
      icon: <FaLaptop  />,
    },
  ];
  return (
    <section className="container pt-10 " id="services">
      <div className="py-6 md:py-10">
        <Heading title="Mobile Notary Services in Broward & Palm Beach County" />
        <p className="text-lg ">
          Our professional mobile notaries are trained to conduct closings to
          meet each client’s specifications and requirements.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => {
            if (index === 6) return <div key={index} className="hidden md:block"></div>
          return (
            <div key={index}>
              <div className="flex items-center mb-2 ">
                <div className="*:w-8 *:h-8 mr-2 text-orange-600">
                  {item.icon}
                </div>
                <h2 className="md:text-3xl text-2xl font-bold text-orange-600 ">
                  {item.title}
                </h2>
              </div>
              <p className="">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
