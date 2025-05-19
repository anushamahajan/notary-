'use client'

import Image from 'next/image'
import {PhoneIcon, MailIcon} from "lucide-react";

export default function Dolly() {
    return (
        <section className="bg-navy text-white md:py-16 md:px-32 px-4 py-5 flex justify-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-x-20">
                    {/* Left side - Text content */}
                    <div className="">
                        <h2 className="md:text-6xl text-4xl font-bold my-2">Dolly Garg</h2>
                        <h3 className="md:text-2xl text-2xl font-bold uppercase tracking-wider text-sky-300 text-white my-4">
                            Certified Notary Public
                        </h3>
                        <p className="my-4 ">
                            At <span className="font-semibold">Broward Express Notary</span>, Dolly Garg brings professionalism and peace of mind to every document she signs. As a <span className="font-semibold">Certified Notary Public</span>, she is committed to ensuring each notarization is handled with precision, confidentiality, and care.
                        </p>
                        <p className="my-4">
                            Whether it’s an urgent signature, a personal legal form, or business paperwork, Dolly believes in making the process <span className="font-semibold">simple, clear, and convenient</span> for every client. Her mobile notary service is designed around your schedule — bringing reliability straight to your doorstep.
                        </p>
                        <p className="my-4">
                            Through <span className="font-semibold">Broward Express Notary</span>, Dolly stands for more than just stamps and signatures — she offers a sense of ease in moments that matter. Because sometimes, all it takes is a <span className="font-bold">RELIABLE PRESENCE TO MAKE THINGS OFFICIAL.</span>
                        </p>
                        
                        <div className='my-2 font-bold md:text-xl text-sm '>
                            <PhoneIcon className=" inline mr-4" />
                            +1 (954)-319-5224</div>
                        <div className='md:text-xl text-sm font-bold '>
                            <MailIcon className="inline mr-3" />
                            browardexpressnotary@gmail.com</div>

                            <a href="#contactus"><button className='md:py-2 md:px-5 py-2 px-3 bg-white rounded-xl my-5 text-black font-bold  md:text-x'>Contact us</button> </a>

                    </div>

                    {/* Right side - Image */}
                    <div className="flex items-end justify-end my-10">
                        <div className="relative w-full md:w-[400px] h-[500px]">
                            <Image
                                src="/cb.jpg"
                                alt="Dolly Garg"
                                fill
                                className="object-cover rounded-full aspect-square object-top border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
