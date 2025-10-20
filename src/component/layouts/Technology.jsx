import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import techI from "/src/assets/technology.jpg"; // তোমার দেওয়া image

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const Technology = () => {
  return (
    <div className="bg-[#1e1e1e] py-[100px] overflow-hidden">
      <Container>
        {/* Top Section */}
        <Flex className="justify-between flex-col md:flex-row items-start gap-y-10">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-[42px] md:text-[64px] font-light font-pop leading-[60px] md:leading-[90px] w-full md:w-[600px]"
          >
            Where Technology <br /> Meets Trust
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/60 text-[16px] font-pop leading-[30px] w-full md:w-[360px]"
          >
            We believe true innovation is built on trust. By combining
            cutting-edge blockchain technology with uncompromising security.
          </motion.p>
        </Flex>

        {/* Bottom Section */}
        <Flex className="justify-between items-start flex-col md:flex-row mt-[80px] gap-y-10">
          {/* Left Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/70 font-pop w-full md:w-[340px]"
          >
            <p className="text-[16px] leading-[30px] w-[307px] my-5">
              01. Every transaction, every contract, and every interaction on our
              network is verified and transparent.
            </p>

            {/* Market Analysis Box */}
            <div className="mt-[80px] bg-gradient-to-b from-[#262626] to-[#1b1b1b] rounded-[14px] border border-[#333] p-[24px] w-[300px] shadow-[0_0_40px_rgba(255,255,255,0.03)]">
              <h4 className="text-white text-[16px] mb-4 font-medium">
                Market Analysis
              </h4>
              <div className="space-y-4">
                <ProgressBar label="77%" width="77%" />
                <ProgressBar label="45%" width="45%" />
                <ProgressBar label="69%" width="69%" />
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white font-pop text-center md:text-left w-full md:w-[240px]"
          >
            <h3 className="text-[20px] md:text-[22px] font-medium text-white/90 mb-4">
              Enterprise Blockchain <br /> Solutions
            </h3>
            <ul className="space-y-6 mt-16">
              <li>
                <p className="text-white/60 text-[14px]">Smart Contracts</p>
                <h4 className="text-[28px] text-white font-light mt-1">2M+</h4>
              </li>
              <li>
                <p className="text-white/60 text-[14px] mt-15">Neutral Operations</p>
                <h4 className="text-[28px] text-white font-light mt-1">99%</h4>
              </li>
            </ul>
          </motion.div>

          {/* Right Side Image (✨ shadow added) */}
          <motion.div
  variants={imageVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="relative rounded-[14px] overflow-hidden
             shadow-[0_0_60px_10px_rgba(0,255,255,0.25)]
             hover:shadow-[0_0_90px_20px_rgba(0,255,255,0.35)]
             transition-all duration-700 ease-in-out"
>
  <Image
    imgSrc={techI}
    className="w-[360px] md:w-[420px] h-[450px] rounded-[14px] object-cover"
  />
</motion.div>
        </Flex>
      </Container>
    </div>
  );
};

// ✅ Animated ProgressBar Component
const ProgressBar = ({ label, width }) => (
  <div className="flex items-center justify-between text-white/60 text-[13px]">
    <div className="relative w-[180px] h-[6px] bg-[#2a2a2a] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full bg-white rounded-full"
      />
    </div>
    <span>{label}</span>
  </div>
);

export default Technology;
