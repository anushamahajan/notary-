import React from "react";
import Heading from "./Heading";
import { TiTick } from "react-icons/ti";

const ProcessServer = () => {
  //     General Civil Litigation
  // Summons & Complaints
  // Restraining orders
  // Government
  // Local & Federal government
  // courts
  // City municipalities
  // Government agencies
  // Police departments
  // Jails & detention facilities
  // Real Estate
  // Foreclosure documents
  // Eviction Notices / 30 Day Notice to
  // Correct or Vacate
  // Landlord & Tenant documents
  // Bank levies
  // Wage garnishments
  // Family Law
  // Divorce papers
  // Paternity determination
  // Child support
  // Custody
  // Visitation papers

  const items = [
    "General Civil Litigation",
    "Summons & Complaints",
    "Restraining orders",
    "Government",
    "Local & Federal government",
    "Courts",
    "City municipalities",
    "Government agencies",
    "Police departments",
    "Jails & detention facilities",
    "Real Estate",
    "Foreclosure documents",
    "Landlord & Tenant documents",
    "Bank levies",
    "Wage garnishments",
    "Family Law",
    "Divorce papers",
    "Paternity determination",
    "Child support",
    "Custody",
    "Visitation papers",
    "Eviction Notices",
  ];
  return (
    <div className="py-14 grid md:grid-cols-4 items-center gap-5 px-5 md:px-0">
        <div className=" w-[90vw] mx-auto md:w-full h-96">
        <img src="/img1.jpg" alt="process server image" className="h-full object-cover w-full" />
        </div>
      <div className="col-span-2">
        <Heading title="Process Server Services" />
        <div className="grid md:grid-cols-3  gap-x-4">
          {items.map((item, index) => (
            <div key={index} className="p-2 flex items-center gap-2 ">
              <TiTick className="!text-green-400 !h-5 !w-5" />
              <h3 className="text-sm font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-[90vw] relative mx-auto md:w-full h-96">
        <div className="bg-navy text-white absolute top-1/2 -translate-y-1/2 p-5 mx-4 font-semibold text-center">
 We do CT Corp runs on a daily basis at very low charges.

        </div>
        <img src="/img2.jpg" alt="process server image" className="h-full object-cover w-full" />
        </div>

    </div>
  );
};

export default ProcessServer;
