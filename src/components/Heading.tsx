import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import React from "react";
const mont = Montserrat({ subsets: ["latin"] });
type Props = {
  title: string;
  className?: string;
  body ? :string
};

const Heading = (props: Props) => {
  return (
    <div className={`md:text-center`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold  text-black ${mont.className} ${props.className}`}>
          {props.title}
        </h2>
        <div className={cn("h-2 w-[200px] bg-purple-700 md:mx-auto  relative mb-8 mt-2 py-0",
            props.title.length > 30 ? "md:w-[500px]" : "md:w-[250px]",
            props.body
        )}/>
    </div>
  );
};

export default Heading;
