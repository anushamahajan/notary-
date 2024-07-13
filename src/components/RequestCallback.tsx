'use client'
import React from "react";
import { Button } from "./ui/button";
import RequestDialog from "./requestCallDialog";

const RequestCallback = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <section className="bg-gradient-to-r from-purple-900 to-fuchsia-900 py-12">
      <div className="container mx-auto md:text-center">
        <div className="text-cente">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let the Experts Handle Your Notary Needs
          </h2>
          <p className="text-white mb-4">
            Ready to elevate your notary experience? Contact us with your
            requirements, and we will handle the rest.
          </p>
          <p className="text-white mb-6">
            Focus on your important tasks while our team ensures your notary
            needs are met with precision and efficiency.
          </p>
          <Button variant={'secondary'} size={'lg'} className="font-semibold" onClick={()=>setOpen(true)}>
            Request a Callback
          </Button>
        </div>
      </div>

      <RequestDialog open={open} setOpen={setOpen} />
    </section>
  );
};

export default RequestCallback;
