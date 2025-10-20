import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "../common/Container";
import Image from "../common/Image";
import blockchainn from "/src/assets/Blockchain.png";
import logoOne from "/src/assets/blockchaintechnology.jpg";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div
      ref={ref}
      className="bg-[#1e1e1e] py-[100px] h-auto md:h-screen relative overflow-hidden"
    >
      <Container>
        <Image
          imgSrc={blockchainn}
          className="py-[100px] relative w-full h-auto object-cover"
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-7 absolute top-10 md:top-32 left-1/2 -translate-x-1/2 w-full max-w-[1420px] px-6">
          
          {/* Left Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="text-[28px] md:text-[40px] text-white w-full md:w-[480px] font-light font-pop leading-[40px] md:leading-[60px] mt-10 md:mt-40 text-center md:text-start"
          >
            <h2>Secure. Scalable. Limitless.</h2>
          </motion.div>

          {/* Center Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative flex justify-center items-center w-full md:w-auto mb-1 md:-mb-10"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_0_80px_10px_rgba(255,255,255,0.08)]">
              <Image
                imgSrc={logoOne}
                className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[750px] h-[500px] object-cover transition-all duration-500 opacity-95"
              />
            </div>
          </motion.div>

          {/* Right Text + Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-center md:text-left mt-10 md:mt-80"
          >
            <p className="text-[14px] md:text-[16px] text-white/60 font-pop leading-[26px] md:leading-[30px] w-full md:w-[340px]">
              we push the boundaries of what's possible with blockchain
              technology. Designed for maximum security.
            </p>
            <button className="text-[14px] md:text-[16px] text-white font-pop py-[10px] md:py-[12px] px-[18px] md:px-[22px] rounded-2xl bg-gradient-to-r from-[#302f2f] to-[#222222] mt-6 md:mt-12 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
