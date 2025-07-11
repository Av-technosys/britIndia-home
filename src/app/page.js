// app/landing/page.tsx (or pages/landing.tsx in older Next.js)
"use client"; // Only needed if using app router and want animations to work with framer-motion

import { motion } from "motion/react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white px-4">
      <section className="text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Experience the Fusion of Cultures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          BritIndia blends British elegance with Indian heritage — discover
          food, fashion, and culture like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link href="https://thebritindia.co.uk/" target="_blank">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-full font-medium">
              Visit BritIndia
            </button>
          </Link>

          <Link href="/food" target="_blank">
            <button className="px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition rounded-full font-medium">
              Explore Our Food World
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
