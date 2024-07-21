"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sosmed } from "@/libs/data";
import { Card } from "antd";
import { AiFillFacebook } from "react-icons/ai";

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
      <Card className="flex flex-wrap justify-center items-center py-6 bg-white/60 sm:max-w-[500px] sm:max-h-[400px] max-w-[320px]">
        <ul className="flex flex-wrap justify-center sm:gap-10 gap-8 items-center">
          {Object.keys(Sosmed.sites).map((key, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="initial"
              whileInView="animate"
              variants={fadeInAnimation}
              viewport={{ once: true }}
              className="group">
              <Link href={Sosmed.sites[key].url}>
                <Card
                  style={{
                    width: 200,
                    height: 80,
                    backgroundColor: "#1e3a8a"
                  }}
                  className="flex items-center justify-center font-semibold text-sm group-hover:scale-105 border-black/40 rounded-xl transition-transform">
                  <p className="text-white hover:text-gray-400/80 transition-all">
                    {Sosmed.sites[key].name}
                  </p>
                </Card>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};

export default Page;
