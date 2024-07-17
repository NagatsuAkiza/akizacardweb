"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linked } from "@/libs/data"; // Adjust the import path based on your folder structure

const Page = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        {Object.keys(Linked.sites).map((key, index) => (
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
            <Link href={Linked.sites[key].path}>
              <p className="w-48 h-12 flex items-center justify-center group-hover:scale-105 bg-sky-600 border-black/[0.1] rounded-xl px-6 py-3 transition-transform">
                {Linked.sites[key].name}
              </p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Page;
