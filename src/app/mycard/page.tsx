"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, delay: 0.4, type: "spring", stiffness: 100 }}>
      <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="my pfp"
            height="96"
            src="https://i.postimg.cc/WzNKdr02/Untitled197-20210923214753.png"
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
            Hi, I'm Bonnie Green, a passionate visual designer with over 5 years of experience in
            creating stunning visual content and user-friendly designs. I specialize in digital
            illustrations, branding, and UI/UX design.
          </p>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Social Media
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              That I Work On
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Page;
