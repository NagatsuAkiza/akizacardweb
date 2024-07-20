"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FirstCard = () => {
  return (
    <div className="flex justify-center content-center flex-col text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.4, type: "spring", stiffness: 100 }}
        className="relative p-6 px-6 py-14 md:px-12">
        <h2 className="flex flex-col mb-6 font-sans text-4xl font-medium leading-[1.5] tracking-widest text-white antialiased">
          WELCOME
          <span>TO MY CARD</span>
        </h2>
        <h5 className="block mb-4 font-bold text-xl antialiased leading-snug tracking-normal text-gray-400">
          Nagatsu Akiza
        </h5>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: 0.8, type: "spring", stiffness: 100 }}
        className="flex justify-center items-center">
        <Link href="/mycard">
          <div className="p-5 bg-[#1e3a8a] rounded-full hover:scale-105 transition-all shadow-md">
            <h2 className="font-semibold text-slate-200">Visit My Card</h2>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default FirstCard;
