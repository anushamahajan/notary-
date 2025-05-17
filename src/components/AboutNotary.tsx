'use client'

import Image from 'next/image'

export default function AboutUsSection() {
  return (
    <section className="container mx-auto md:py-16 md:px-40 py-10 px-10">
      <div className="flex flex-col md:flex-row md:gap-28 items-center">
        {/* Left side: Image with gold rectangle */}
        <div className="relative w-full md:w-1/2">
          
          <div className="relative z-10 md:border-40 border-20 border-navy">
            <Image
              src="/aboutnotary.png" // update this to your real image
              alt="Notary at work"
              width={600}
              height={400}
              className="object-cover border md:border-10 border-navy"
            />
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg uppercase tracking-wider text-gold mb-2">
            ABOUT US
          </h3>
          <h2 className="text-4xl font-bold mb-6">
            Notarizing Life’s Most Important Moments
          </h2>
          <p className="mb-4">
            At Broward Express Notary, we bring professionalism and a personal touch to every signature. Founded by <span className="font-semibold">Dolly Garg</span>, a Certified Notary Public, our service is built on trust, mobility, and a deep commitment to making notarization easy for everyone.
          </p>
          <p className="mb-8 text-gold font-semibold text-lg">
            Whether it’s a healthcare form, real estate closing, or legal affidavit — we come to you, on your time, with complete confidentiality.
          </p>
          <a 
            href="#services" 
            className="inline-block uppercase tracking-wider border-2 border-[#a08852] text-[#a08852] py-2 px-4 font-medium hover:bg-[#a08852] hover:text-white transition-colors"
          >
            DISCOVER OUR SERVICES
          </a>
        </div>
      </div>
    </section>
  )
}
