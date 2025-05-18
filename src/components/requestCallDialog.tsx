"use client";
import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const RequestDialog = ({ open, setOpen }: Props) => {

  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  useEffect(() => emailjs.init("l6TrX5WwhRPAKoCMV"), []);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await emailjs
      .send("service_0yf8rp9", "template_mczi8id", {
        name: name,
        mobile: mobile,
        from : "Broward Express Notary",
        email: email,
      })
      .then(
        () => {
          alert("We will get back to you soon!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {" "}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="bg-navy text-white w-5/6 rounded-md"
        >
          <DialogHeader>
            <DialogTitle>Request a callback!</DialogTitle>
            <DialogDescription className="text-gray-200">
              Need help? Request a callback and we will get back to you as soon
              as possible.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={sendEmail}
            className="space-y-4 flex flex-col text-black"
          >
            <Input placeholder="Name" name="from_name" value={name} onChange={(e)=>setName(e.target.value)} />
            <Input placeholder="Phone Number" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            <Input placeholder="Message" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Button className="w-min" variant={"secondary"} type="submit">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestDialog;
