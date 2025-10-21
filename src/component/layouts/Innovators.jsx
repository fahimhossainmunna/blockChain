import React from "react";
import Flex from "../common/Flex";
import Container from "../common/Container";
import Image from "../common/Image";
import iconpro from "/src/assets/iconpro.png";

const Innovators = () => {
  return (
    <div className="bg-[#1e1e1e] py-[70px] overflow-hidden"> {/* overflow-hidden added */}
      <Container>
        <Flex className="flex flex-col lg:flex-row items-start justify-between gap-10">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-white text-[40px] sm:text-[50px] lg:text-[60px] font-light font-pop leading-[60px] sm:leading-[75px] lg:leading-[99px] w-full md:w-[775px]">
              Trusted by Innovators. Proven by Results.
            </h3>

            <p className="text-white/60 text-[15px] sm:text-[16px] font-pop w-full md:w-[692px] py-[40px] sm:py-[60px] md:py-[45px]">
              we power the visions of forward-thinking businesses and creators
              around the world. From seamless digital transactions to scalable
              blockchain solutions, our technology drives real impact.
            </p>

            {/* button */}
            <div className="flex flex-wrap items-center gap-6 mt-8 mb-[40px] md:mb-[60px]">
              <button className="bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] text-white px-6 py-2 rounded-md border border-[#333] hover:border-[#00bfff] transition">
                Learn More
              </button>
              <button className="text-gray-300 hover:text-white transition">
                Contact Us
              </button>
            </div>

            {/* Large Left Box */}
            <div
              className="py-[40px] sm:py-[55px] px-[25px] sm:px-[50px] w-full lg:w-[790px] border-2 border-[#696969] bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] rounded-2xl mt-5 
              flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 
              transition-all duration-500 hover:border-[#00bfff] hover:scale-[1.03] 
              hover:shadow-[rgba(6,24,44,0.4)_0px_0px_0px_2px,rgba(6,24,44,0.65)_0px_4px_6px_-1px,rgba(255,255,255,0.08)_0px_1px_0px_inset,rgba(0,191,255,0.4)_0px_0px_20px_2px]"
            >
              <div>
                <p className="text-[15px] sm:text-[16px] text-white/60 font-pop leading-[28px] sm:leading-[30px] w-full sm:w-[512px]">
                  Hyper completely transformed how we handle high-volume
                  transactions. Their speed, security, and scalability
                </p>
                <h3 className="text-white text-[20px] sm:text-[24px] font-medium font-pop py-[15px] sm:py-[20px]">
                  Daniel R{" "}
                  <span className="text-white/60 text-[15px] sm:text-[16px] font-medium font-pop">
                    / CTO at FinTechCore
                  </span>
                </h3>
              </div>
              <Image imgSrc={iconpro} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[580px] flex flex-col mt-[50px] lg:mt-0">
            {[
              {
                text: "We needed a blockchain solution that could keep up with our global growth.",
                name: "Sophia L",
                role: "Founder of NovaChain",
              },
              {
                text: "Hyper is everything we were looking for in a decentralized platform.",
                name: "Mark T",
                role: "CEO of BlockWorks Studio",
              },
              {
                text: "Thanks to Hyper, we launched our NFT marketplace with zero downtime.",
                name: "Emily S",
                role: "Product Lead at Artify Labs",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`py-[30px] sm:py-[40px] px-[25px] sm:px-[35px] border-2 border-[#696969] bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] rounded-2xl 
                flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 
                transition-all duration-500 hover:border-[#00bfff] hover:scale-[1.03] 
                hover:shadow-[rgba(6,24,44,0.4)_0px_0px_0px_2px,rgba(6,24,44,0.65)_0px_4px_6px_-1px,rgba(255,255,255,0.08)_0px_1px_0px_inset,rgba(0,191,255,0.4)_0px_0px_20px_2px]
                ${index === 1 ? "my-[30px] sm:my-[60px]" : ""}`}
              >
                <div>
                  <p className="text-white/60 text-[15px] sm:text-[16px] font-pop w-full sm:w-[366px]">
                    {item.text}
                  </p>
                  <h3 className="text-white text-[20px] sm:text-[24px] font-medium font-pop py-[15px] sm:py-[20px]">
                    {item.name}{" "}
                    <span className="text-white/60 text-[15px] sm:text-[16px] font-medium font-pop">
                      / {item.role}
                    </span>
                  </h3>
                </div>
                <Image imgSrc={iconpro} />
              </div>
            ))}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Innovators;
