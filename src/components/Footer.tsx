import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white py-8 ">
      <div className="container mx-auto">
        {/* <div className="text-center md:text-right text-sm flex justify-center montserrat">
          <p>We are not a law firm. We do not make any legal advice.</p>
        </div> */}

        <div className="md:grid md:grid-cols-8 text-left md:gap-10 gap-2 justify-center container ">
        <div className="md:col-span-2 space-y-2">
            <h2 className="text-lg font-bold  ">About Us</h2>
            <p>Broward & Palm Beach County aims to bring affordable notary services just a phone call away and is backed by 5000+ happy clients that believe in us.</p>
          </div>
          <div className="md:col-span-3 space-y-2">         
                <div className="text-lg font-bold text-center">Certificates</div>
                <div className="grid-cols-3 grid gap-3 px-7">
                  <img
                    src="cert1.png"
                    alt="Certificate 1"
                    className=""
                  />
                  <img
                    src="cert2.png"
                    alt="Certificate 2"
                    className=""
                  />
                  <img
                    src="cert3.png"
                    alt="Certificate 3"
                    className=""
                  />
                </div>
              
          
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
              <li><span className="font-semibold">Phone :</span> (954) 448-8542</li>
              <li><span className="font-semibold">Email :</span> hemant.kumar@gmail.com</li>
              <li><span className="font-semibold">Address :</span> 123 Main St, City, State, 12345</li>
            </ul>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
