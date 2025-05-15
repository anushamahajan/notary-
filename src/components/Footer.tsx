import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-8 pb-3 ">
      <div className="container mx-auto">
        {/* <div className="text-center md:text-right text-sm flex justify-center montserrat">
          <p>We are not a law firm. We do not make any legal advice.</p>
        </div> */}

        <div className="md:grid md:grid-cols-8 text-left md:gap-10 space-y-7 md:space-y-0 justify-center container mb-10 md:mb-0">
          <div className="md:col-span-2 space-y-2 md:hidden">
            <h2 className="text-lg font-bold  ">About Us</h2>
            <p>
              Broward & Palm Beach County aims to bring affordable notary
              services just a phone call away and is backed by 5000+ happy
              clients that believe in us.
            </p>
          </div>
          <div className="md:col-span-3 space-y-2">
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
          </div>
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
                <span className="font-semibold">Phone :</span> (954) 448-8542
              </li>
              <li>
                <span className="font-semibold">Email :</span>{" "}
                notaryquote@gmail.com
              </li>
              <li>
                <span className="font-semibold">Address :</span> 502 NE 44th St. Oakland Park FL 33334
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
