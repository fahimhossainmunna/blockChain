import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // make sure installed: npm install lucide-react
import Image from "../common/Image";
import linee from "/src/assets/hyperchine.png";

const Ecosystem = () => {
  return (
    <div className="bg-[#1e1e1e] py-[70px]">
      <Container>
        <Flex className="justify-between items-center flex-wrap gap-6">
          {/* Left Side Text */}
          <div className="text-white text-[60px] font-light font-pop leading-[99px] w-full md:w-[775px]">
            <h3>The Ultimate Blockchain Ecosystem</h3>
          </div>

          {/* Right Side Animated Buttons */}
          <div className="flex items-center gap-4">
            {/* Left Button */}
            <motion.button
              whileHover={{
                rotate: -15,
                scale: 1.15,
                boxShadow: "0 0 15px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:border-white text-white"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Right Button */}
            <motion.button
              whileHover={{
                rotate: 15,
                scale: 1.15,
                boxShadow: "0 0 15px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:border-white text-white"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </Flex>

        {/* Main Content Section */}
        <Flex className="flex-col lg:flex-row justify-between items-center gap-10 mt-16">
          {/* Left Image */}
          <div className="w-full lg:w-[60%]">
            <Image imgSrc={linee} className="rounded-[20px]" />
          </div>

          {/* Right Side Content */}
          <div className="text-white w-full lg:w-[40%] space-y-4">
            <p className="text-gray-400 text-[14px] mb-5">March 3, 2025</p>

            <h3 className="text-[28px] md:text-[32px] mb-5 font-semibold leading-[40px]">
              How Hyper is Shaping a Trustless Economy
            </h3>

            <p className="text-[15px] md:text-[16px] mb-5 text-gray-400 leading-[26px]">
              Blockchain is no longer just a buzzword. It’s the backbone of a new
              era of digital innovation that empowers individuals and removes the
              need for intermediaries...
            </p>

            <button className="text-white text-[14px] mb-5 underline underline-offset-4 hover:text-gray-300 transition">
              Learn More
            </button>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-3 mt-10">
              {["Smart", "Contract", "Creation"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-[4px] border border-gray-500 rounded-full text-[14px] hover:border-white transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ecosystem;
