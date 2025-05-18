import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-8 pb-3 ">
      <div className="container mx-auto md:flex ">
        {/* <div className="text-center md:text-right text-sm flex justify-center montserrat">
          <p>We are not a law firm. We do not make any legal advice.</p>
        </div> */}
        <Link href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiR0FSRydTIFBST0ZFU1NJT05BTCBTRVJWSUNFUyBMTEMiLCJhY3Rpb24iOiJwYXltZW50IiwidG9rZW4iOiJicm93YXJkZXhwcmVzc25vdGFyeUBnbWFpbC5jb20ifQ==">
        <img src="./QR.png" className="h-50 w-40 mx-auto py-4 "/>
        </Link>

        <div className="md:grid md:grid-cols-8 text-left md:gap-10 space-y-7 md:space-y-0 justify-center container mb-10 md:mb-0">
          
          {/* <div className="md:col-span-3 space-y-2">
            <div className="text-lg font-bold md:text-center">Certificates</div>
            <div className="grid-cols-3 grid gap-3 md:px-7">
              <a href="/cert1.png">
                <img src="cert1.png" alt="Certificate 1" className="" />
              </a>
              <a href="/cert2.png">
                <img src="cert2.png" alt="Certificate 2" className="" />
              </a>
              <a href="/cert3.png">
                <img src="cert3.png" alt="Certificate 3" className="" />
              </a>
            </div>
          </div> */}
          <div className="col-span-2 flex items-center">
            <img src="/cards.jpg" alt="" />
          </div>
          <div className="md:col-span-1 space-y-2">
            <h2 className="text-lg font-bold  ">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-2">
            <h2 className="text-lg font-bold ">Get in Touch</h2>
            <ul className="text-sm space-y-1">
              <li>
                <span className="font-semibold">Phone :</span> (954) 319-5224
              </li>
              <li>
                <span className="font-semibold">Zelle Email :</span>{" "}
                browardexpressnotary@gmail.com
              </li>
              <li>
                <span className="font-semibold">Address :</span> 7531 NW 47th Ave Coconut Creek Florida
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-300 pt-6 text-center mb-10 px-3 md:mb-0">We are not a law firm. We do not make any legal advice. Please book an appointment via call before visiting.</p>
    </footer>
  );
};

export default Footer;
