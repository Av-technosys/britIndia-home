// app/food/page.tsx or pages/food.tsx
"use client"; // Required if using app router
import { motion } from "framer-motion";
import Link from "next/link";

export default function FoodLandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white px-4">
      <section className="text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          A Journey Through Flavour
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 mb-8"
        >
          Discover unique food concepts crafted with passion and culture. Choose
          where your appetite takes you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link href="https://your-first-food-website.com" target="_blank">
            <button className="px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition rounded-full font-medium">
              Visit SpiceCrate
            </button>
          </Link>

          <Link href="https://your-second-food-website.com" target="_blank">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-full font-medium">
              Explore SavorHouse
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
