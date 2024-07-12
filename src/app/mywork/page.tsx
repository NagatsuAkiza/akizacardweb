"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linked } from "@/libs/data";

const Page1 = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Sesuaikan durasi dengan preferensi Anda
        delay: 0.2 * index,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}>
      <ul className="text-white flex flex-col justify-center gap-10 items-center text-lg">
        {Linked.map((link, index) => (
          <motion.li
            key={index}
            custom={index}
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimation}
            viewport={{
              once: true
            }}
            className="group">
            <Link href={link.url}>
              <p className="w-40 h-12 flex items-center justify-center group-hover:scale-105 bg-sky-600 border-black/[0.1] rounded-xl px-5 py-3 transition-transform">
                {link.name}
              </p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Page1;
