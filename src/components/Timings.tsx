import React from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa";

const AppointmentNotice = () => {
  return (
    <section className="bg-navy py-10 px-6 shadow-md  mx-auto">
      <div className="text-center mb-6 text-white">
        <h2 className="text-2xl md:text-6xl font-bold mb-2">By Appointments Only</h2>
        <p className="text-lg">
          Please call and schedule an appointment before visiting.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 text-center max-w-lg mx-auto">
        <div className="bg-white p-6 rounded-md shadow">
          <FaClock className="mx-auto text-6xl mb-2" />
          <h3 className="text-3xl font-semibold mb-1">Everyday</h3>
          <p className="text-lg">8:00 AM – 7:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentNotice;
