import { Montserrat } from "next/font/google";
import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaFileSignature, FaIdCard } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";
import { IoDocumentAttachSharp, IoDocuments } from "react-icons/io5";
import { MdWork } from "react-icons/md";
const mont = Montserrat({ subsets: ["latin"] });

const ServiceGuidelines = () => {
  const items = [
    {
      title: "Prepare Identification",
      desc: "The signer must have valid picture ID.",
      icon: <FaIdCard />,
    },
    {
      title: "Review Documents",
      desc: "Ensure all documents are read and understood before the appointment.",
      icon: <IoDocuments />,
    },
    {
      title: "Wait to Sign",
      desc: "Do not sign documents prior to the notary’s arrival.",
      icon: <FaFileSignature />,
    },
    {
      title: "Signer's Condition",
      desc: "The signer must be alert, competent, and willing.",
      icon: <GiStrong />,
    },
    {
      title: "Witnesses",
      desc: "Arrange for any additional witnesses needed.",
      icon: <FaPeopleGroup />,
    },
    {
      title: "Documentation",
      desc: "All signings are recorded in a notary journal for reference.",
      icon: <IoDocumentAttachSharp />,
    },
    {
      title: "Extra Charges ",
      desc: "A $20 fee applies if the signer is unable or unwilling to sign.",
      icon: <AiFillDollarCircle />,
    },
    {
      title: "Legal Advice",
      desc: "For legal questions or document preparation, consult an attorney.",
      icon: <MdWork />,
    },
  ];
  return (
    <section className="py-16 px-4 ">
      <div className=" md:text-center ">
        <h2 className={`text-4xl md:text-5xl font-extrabold  text-black ${mont.className}`}>
          Notary Service Guidelines
        </h2>
        <div className="h-2 md:w-[500px] w-[200px] bg-orange-600 md:mx-auto  relative mb-8 mt-2 py-0"/>

        <p className="text-xl md:text-2xl mb-8 text-black">
          We are bonded and insured for your protection. Please follow these
          guidelines to ensure a smooth notary experience:
        </p>
        <div className="text-left  grid md:grid-cols-3 h-full items-center justify-center md:mx-10">
          {items.map((item, index) => {
            return (
              <div key={index} className="px-2 py-5 md:p-5  items-center space-y-2 ">
                <div className="flex gap-4 items-center">
                  <div className="h-full *:w-10 *:h-10 *:text-orange-600">{item.icon}</div>
                  <h3 className="text-2xl md:text-2xl font-bold text-orange-600">
                    {item.title}
                  </h3>
                </div>
                <div className="col-span-4">
                  <p className="text-lg">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGuidelines;
