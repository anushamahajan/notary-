import React from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa";

const AppointmentNotice = () => {
  return (
    <section className="bg-navy py-10 px-6 shadow-md  mx-auto">
      <div className="text-center mb-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">By Appointment Only</h2>
        <p className="text-lg">
          Please call and schedule an appointment before visiting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-md shadow">
          <FaClock className="mx-auto text-2xl mb-2" />
          <h3 className="text-xl font-semibold mb-1">Weekdays</h3>
          <p className="text-base">4:00 AM – 7:00 PM</p>
        </div>

        <div className="bg-white  p-6 rounded-md shadow">
          <FaClock className="mx-auto text-2xl mb-2" />
          <h3 className="text-xl font-semibold mb-1">Weekends</h3>
          <p className="text-base">9:00 AM – 5:00 PM</p>
        </div>
      </div>

    </section>
  );
};

export default AppointmentNotice;
