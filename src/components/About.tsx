import { Montserrat } from "next/font/google";
import React from "react";
const mont = Montserrat({ subsets: ["latin"] });

const About = () => {
  const about = [
    {
      color: "bg-blue-100",
      title: "Certified Professionals",
      content:
        "We are certified by the National Notary Association, the Loan Signing System, and Notary2Pro. We undergo rigorous background screening, are bonded, and carry a $100k E&O Policy.",
    },
    {
      color: "bg-green-100",
      title: "Expert Loan Signing",
      content:
        "We guide borrowers through loan documents thoroughly, efficiently, and professionally. Our knowledge ensures borrowers understand and complete the closing statement, note, deed of trust, and closing disclosures accurately. ",
    },
    {
      color: "bg-navy",
      title: "24/7 Availability",
      content:
        "We are available around the clock. Whether you need a Loan Signing, Notary, or Permit Runner Service, you can count on us anytime.",
    },
    {
      color: "bg-red-100",
      title: "Permit Running Services",
      content:
        "We handle permits for Construction, Electrical, Plumbing, Roofing, Flood/Damage Repair, and more.",
    },
    {
      color: "sdfds",
    },
    {
      color: "bg-yellow-100",
      title: "Integrity and Trust",
      content:
        "We uphold the highest standards of integrity and judgment, earning the trust and confidence of the public. We abide by the Code of Ethics of the Association and hold Active Membership in the Florida Association of Notaries.",
    },
  ];
  return (
    <section className="flex py-16 px-6 gap-4 items-center  flex-col md:flex-row">
      <section className="grid items-center justify-center pb-4">
        <div className="space-y-5 md:container px-2 mx-auto text-center font-montserrat">
          <h2 className={`md:text-5xl text-5xl font-bold text-[#001f3f] text-center ${mont.className}`}>
            About Us
          </h2>
          <div className="h-2 w-[200px] bg-navy mx-auto relative -top-2"/>
          <p className="text-lg  mb-6 pyc-4 md:text-center text-left">
            We are a team of Notary Publics appointed by the Governor of
            Florida, authorized to perform notarizing acts in accordance with
            Florida state laws. Our qualifications as Notary Publics and
            Professional Loan Signing Agents meet the highest standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 *:col-span-2 gap-8">
            {about.map((item, index) => {
              if (index == 4)
                return (
                  <div
                    key={index}
                    className="!col-span-1 hidden md:block"
                  ></div>
                );
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg text-left border-navy border-2`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${mont.className}`}>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
