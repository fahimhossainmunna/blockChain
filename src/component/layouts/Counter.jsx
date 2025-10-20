import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { FaArrowRightLong } from "react-icons/fa6";

const Counter = () => {
  const [uptime, setUptime] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // ✅ Scroll detection — visible হলে animation শুরু হবে
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          setStarted(true);
          controls.start({ opacity: 1, y: 0, x: 0 });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [started, controls]);

  // ✅ Counter animation (500+)
  useEffect(() => {
    if (started) {
      let uptimeTarget = 500;
      let uptimeInterval = setInterval(() => {
        setUptime((prev) => {
          if (prev < uptimeTarget) return prev + 5;
          clearInterval(uptimeInterval);
          return uptimeTarget;
        });
      }, 30);

      return () => clearInterval(uptimeInterval);
    }
  }, [started]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#1e1e1e] py-[100px] overflow-hidden relative"
    >
      <Container>
        <Flex className="justify-between items-center flex-col md:flex-row gap-y-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-start md:items-center justify-between gap-x-20 md:gap-x-32"
          >
            <div>
              <li className="text-white/60 text-[16px] font-pop leading-[30px] list-none">
                <h2>Uptime Reliability</h2>
              </li>
              <h3 className="text-white text-[42px] font-light mt-[12px] font-pop leading-[30px]">
                {uptime}+
              </h3>
            </div>

            <div>
              <li className="text-white/60 text-[16px] font-pop leading-[30px] list-none">
                <h2>Lower Transaction</h2>
              </li>
              <h3 className="text-white text-[42px] font-light mt-[12px] font-pop leading-[30px]">
                99%
              </h3>
            </div>
          </motion.div>

          {/* Right Side Button */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow:
                  "0px 0px 25px rgba(255,255,255,0.2), 0px 0px 50px rgba(255,255,255,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative text-[20px] md:text-[22px] text-white font-pop font-light py-[24px] px-[36px] rounded-2xl bg-gradient-to-br from-[#2b2b2b] via-[#222222] to-[#1a1a1a] border border-white/10 shadow-[0_0_60px_5px_rgba(255,255,255,0.04)] leading-[36px] w-[320px] md:w-[360px] flex items-center justify-between overflow-hidden"
            >
              {/* Shimmer line overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 animate-[shimmer_2s_linear_infinite]"></span>

              {/* Button Text */}
              <span className="relative z-10 bg-gradient-to-r from-[#fff] via-[#d1d1d1] to-[#fff] bg-clip-text text-transparent group-hover:animate-[shine_1.8s_linear_infinite]">
                Smart Contract <br /> Creation
              </span>
              <FaArrowRightLong className="ml-3 text-[20px] relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.button>
          </motion.div>
        </Flex>
      </Container>

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes shine {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Counter;
