import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Image from "../common/Image";
import iconO from "/src/assets/IconOne.png";
import iconOi from "/src/assets/Icont.png";
import iconOii from "/src/assets/Iconth.png";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const CardWallet = () => {
  return (
    <div className="bg-[#1e1e1e] py-[100px] overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1420px] mx-auto"
        >
          {/* 1st Card */}
          {[ 
            { img: iconO, title: "Crypto Wallet", text: "Seamless, secure crypto wallet solutions for storing, sending, and managing digital assets." },
            { img: iconOi, title: "Decentralized App", text: "From concept to deployment, we create high-performance dApps tailored for finance and gaming." },
            { img: iconOii, title: "NFT Marketplace", text: "Launch your own next-gen marketplace for NFTs with end-to-end support, from minting to trading." },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="relative group py-[40px] px-[60px] text-center rounded-[20px] 
                bg-gradient-to-b from-[#282828] to-[#202020] border border-[#3a3a3a]
                transition-all duration-500 ease-in-out 
                hover:border-[#666] hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
                hover:-translate-y-2 hover:scale-[1.02] will-change-transform"
            >
              {/* Icon */}
              <div className="relative inline-block mb-[30px]">
                <div className="absolute inset-0 rounded-full blur-[25px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/10"></div>
                <Image imgSrc={card.img} className="w-[82px] relative z-[1]" />
              </div>

              <h3 className="text-[28px] text-white font-light font-pop leading-[36px] mb-[20px]">
                {card.title}
              </h3>
              <p className="text-[16px] text-white/60 font-pop leading-[30px] max-w-[328px] mx-auto mb-[30px]">
                {card.text}
              </p>
              <motion.h3
                whileHover={{
                  background:
                    "linear-gradient(90deg, #00e0ff, #4b9fff, #7e5cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-[16px] text-white font-pop leading-[30px] cursor-pointer transition-all duration-300"
              >
                Learn More
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default CardWallet;
