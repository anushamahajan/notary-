'use client'
import React from "react";
import { Button } from "./ui/button";
import RequestDialog from "./requestCallDialog";

const RequestCallback = () => {
  
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto md:text-center">
        
        <h2 className="md:text-4xl text-2xl font-bold text-whit mb-4">
  Trusted Notary Services, Delivered to You
</h2>
<p className=" mb-4 text-sky-700 font-bold">
  Let Broward Express Notary take the hassle out of notarizations—wherever and whenever you need them.
</p>
<p className="mb-6 max-w-3xl mx-auto text-gray-700">
  From legal documents to real estate closings, we bring precision, reliability, and convenience right to your doorstep. Get in touch today and experience stress-free notary solutions.
</p>

          <a href="#contactus"><Button  className="font-semibold bg-navy text-white">
            Request a Callback
          </Button></a>
        </div>
      
    </section>
  );
};

export default RequestCallback;
