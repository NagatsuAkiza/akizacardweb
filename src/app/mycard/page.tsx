"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Page = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 30 }}>
      <div></div>
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="my pfp"
            height="110"
            src="https://i.postimg.cc/WzNKdr02/Untitled197-20210923214753.png"
            width="110"
            quality={90}
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nagatsu Akiza</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer & UI/UX</span>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
            Hi, I'm Akiza, a passionate Web Developer and UI/UX with over 1 years of experience in
            creating stunning visual content and web designs.
          </p>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="/socialmedia"
              className="inline-flex items-center rounded-lg bg-[#1e3a8a] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#182c6e] focus:outline-none focus:ring-4 focus:ring-[#1e3a8a] dark:bg-[#1e3a8a] dark:hover:bg-[#182c6e] dark:focus:ring-[#182c6e] transition-all">
              Social Media
            </a>
            <a
              href="/workspace"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700 transition-all">
              That I Work On
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Page;
