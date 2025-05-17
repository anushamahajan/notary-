import React from "react";
import { FaHandshake, FaHeart, FaHome, FaLaptop, FaStamp } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { MdGavel } from "react-icons/md";
import Heading from "./Heading";

const Services = () => {
  const items = [
    {
      title: "Acknowledgments",
      description:
        "We verify and witness signatures on important documents, confirming the identity of the signer and their willingness to sign without duress.",
      icon: <FaStamp />,
    },
    {
      title: "Signature Witnessing",
      description:
        "We serve as official witnesses to signatures on legal documents, verifying the identity of all signing parties.",
      icon: <FaHandshake />,
    },
    {
      title: "Certified Copies",
      description:
        "Where permitted by law, we provide certified true copies of original documents, confirming authenticity without altering content.",
      icon: <FaStamp />,
    },
    {
      title: "Power of Attorney",
      description:
        "We notarize POA documents that grant someone else authority to act on your behalf in legal, medical, or financial matters.",
      icon: <MdGavel />,
    },
    {
      title: "Wills, Trusts & Estate",
      description:
        "We notarize last wills, living trusts, and estate documents with discretion and accuracy, ensuring clarity in critical decisions.",
      icon: <FaHome />,
    },
    {
      title: "Weekend Availability",
      description:
        "We’re available on weekends to accommodate your urgent or off-hour notarization needs. Just give us a call.",
      icon: <FaLaptop />,
    },

    {
      title: "Parental Consent & School Forms",
      description:
        "We notarize school-related and travel consent forms for minors to ensure safety and compliance with legal guidelines.",
      icon: <FaLaptop />,
    },


    {
      title: "Medical & Healthcare Forms",
      description:
        "From advance directives to healthcare proxies, we ensure your medical documents are properly notarized and legally valid.",
      icon: <FaHeart />,
    },

    {
      title: "Jurats (Oaths & Affirmations)",
      description:
        "We administer oaths or affirmations and witness the signing of sworn statements like affidavits, ensuring full legal compliance.",
      icon: <MdGavel />,
    },
    {
      title: "Business Contracts & Agreements",
      description:
        "For freelancers, entrepreneurs, and corporations — we witness and notarize contracts to ensure mutual accountability.",
      icon: <FaHandshake />,
    },
    {
      title: "Loan & Real Estate Closings",
      description:
        "Our mobile notaries handle closings for mortgages, refinances, and deeds — at your location and on your schedule.",
      icon: <FaHome />,
    },
    {
      title: "Mobile Notary – We Come to You",
      description:
        "Whether it's your home, office, or hospital room — we travel to you to notarize documents with ease and flexibility.",
      icon: <ImMobile />,
    },

  ];

  return (
    <section
      className="md:px-32 px-6 py-10 bg-cover bg-center bg-no-repeat relative bg-image"
      id="services"
    >

      <div className="py-6 md:py-10 " >
        <Heading title="OUR SERVICES"  className="text-white  md:text-4xl"/>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => {
          return (
            <div key={index} className="bg-navy shadow-lg shadow-black bg-opacity-90 p-8 justify-center items-center md:grid md:text-normal rounded-xl text-sm text-white">
              <div className="flex items-center mb-2 ">
                <div className="*:w-8 *:h-8 mr-2 text-white">
                  {item.icon}
                </div>
                <h2 className="md:text-2xl text-2xl font-bold text-white">
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
