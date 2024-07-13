import React from "react";
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

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const RequestDialog = ({ open, setOpen }: Props) => {
  return (
    <div>
      {" "}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="bg-purple-700 text-white w-5/6 rounded-md">
          <DialogHeader>
            <DialogTitle >Request a callback!</DialogTitle>
            <DialogDescription className="text-gray-200">
              Need help? Request a callback and we will get back to you as soon
              as possible.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 flex flex-col text-black">
            <Input placeholder="Name" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Email" />
            <Button className="w-min" variant={'secondary'}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RequestDialog;
