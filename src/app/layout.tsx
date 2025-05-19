import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Broward Mobile Notary",
  description: "Best notary services in Broward and Palm Beach County",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} app-scrollbar`}>{children}
      <Link  href={'tel:+1 (954)319-5224'} className="fixed text-sm md:text-base md:bottom-6 bottom-0 md:right-10 z-10 text-white py-3 w-full px-2 bg-gold flex items-center justify-center gap-1 md:animate-bounce font-semibold md:w-fit md:rounded-xl md:px-4">
          <IoIosCall className="inline text-white" />
CALL +1 (954)319-5224 FOR AVAILABILITY


      </Link>
      </body>
    </html>
  );
}
