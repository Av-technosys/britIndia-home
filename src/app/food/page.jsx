"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FoodLandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#E8CC8D] text-[#3D2B1F] px-4">
      <section className="text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight drop-shadow"
        >
          A Journey Through Flavour
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#5C3D25] text-lg sm:text-xl mb-10 leading-relaxed"
        >
          Discover unique food concepts crafted with passion and culture. Choose
          where your appetite takes you.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="https://your-first-food-website.com"
            className="bg-[#6B4226] text-white hover:bg-[#4A2E1A] transition rounded-full font-medium shadow-md p-4"
            target="_blank"
          >
            <div className=" flex gap-4 items-center">
              <Image
                src="/bollywooodbites.png"
                width={100}
                height={100}
                alt="SpiceCrate"
                className=" size-16"
              />
              <button className="px-6 py-3 text-2xl  ">Visit SpiceCrate</button>
            </div>
          </Link>

          <Link href="https://your-second-food-website.com" target="_blank">
            <button className="px-6 py-3 bg-white text-[#6B4226] hover:bg-[#FDF3E7] border border-[#6B4226] transition rounded-full font-medium shadow-md  ">
              Explore SavorHouse
            </button>
          </Link>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-6 justify-center"
        >
          <Link
            href="https://bollywoodbites.co.uk/"
            className="bg-[#6B4226] text-white hover:bg-[#4A2E1A] transition rounded-full font-medium shadow-md p-4"
            target="_blank"
          >
            <div className="flex gap-4 items-center justify-center">
              <Image
                src="/bollywooodbites.png"
                width={100}
                height={100}
                alt="SpiceCrate"
                className=" size-8 lg:size-16"
              />
              <span className="text-xl capitalize">Bollywood Bites</span>
            </div>
          </Link>

          <Link
            href="https://velentinogelato.co.uk/"
            className="bg-white text-[#6B4226] hover:bg-[#FDF3E7] border border-[#6B4226] transition rounded-full font-medium shadow-md p-4"
            target="_blank"
          >
            <div className="flex gap-4 items-center justify-center">
              <Image
                src="/velentino_logo.png"
                width={100}
                height={100}
                alt="SavorHouse"
                className=" h-8 w-auto lg:h-16"
              />
              <span className="text-xl text-left">VELENTINO GELATO</span>
            </div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
