import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { motion } from "framer-motion";
import Image from '../common/Image';
import blox from '/src/assets/blockchainTech.jpg'
import service from '/src/assets/Service.png'
import serviceI from '/src/assets/ServiceApi.png'

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Transactions = () => {
  return (
    <div className="bg-[#1e1e1e] py-[70px]">
      <Container>
        {/* Top text section */}
        <Flex className="justify-between flex-col md:flex-row items-start gap-y-10">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-[36px] sm:text-[42px] md:text-[64px] font-light font-pop leading-[50px] sm:leading-[60px] md:leading-[90px] w-full md:w-[660px]"
          >
            Revolutionizing Digital Transactions
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/60 text-[15px] sm:text-[16px] font-pop leading-[28px] sm:leading-[30px] w-full md:w-[360px] mt-8 md:mt-20"
          >
            We believe true innovation is built on trust. By combining
            cutting-edge blockchain technology with uncompromising security.
          </motion.p>
        </Flex>

        {/* Bottom Section */}
        <Flex className="mt-[60px] md:mt-[100px] flex-col sm:flex-row flex-wrap items-center md:items-start justify-between gap-y-10 gap-x-6">
          
          {/* Left Stats */}
          <div className="text-center sm:text-left">
            <div>
              <h3 className='text-white/60 text-[15px] sm:text-[16px] font-pop leading-[30px]'>Satisfaction</h3>
              <h4 className='text-white text-[30px] sm:text-[36px] font-pop leading-[30px] mt-[20px] sm:mt-[30px]'>128K</h4>
            </div>
            <div className="my-[30px] sm:my-[50px]">
              <h3 className='text-white/60 text-[15px] sm:text-[16px] font-pop leading-[30px]'>Integrations</h3>
              <h4 className='text-white text-[30px] sm:text-[36px] font-pop leading-[30px] mt-[20px] sm:mt-[30px]'>200+</h4>
            </div>
            <div>
              <h3 className='text-white/60 text-[15px] sm:text-[16px] font-pop leading-[30px]'>Transaction</h3>
              <h4 className='text-white text-[30px] sm:text-[36px] font-pop leading-[30px] mt-[20px] sm:mt-[30px]'>80.1%</h4>
            </div>
          </div>

          {/* Middle Image */}
          <div className="order-first sm:order-none">
            <Image imgSrc={blox} className="w-[260px] sm:w-[350px] md:w-[410px] h-auto rounded-lg mx-auto sm:mx-0" />
          </div>

          {/* Service Images */}
          <div className="flex flex-col items-center sm:items-start">
            <ul className='flex items-center justify-center sm:justify-start gap-x-3 text-white/60 font-pop text-xl sm:text-2xl mb-[60px] sm:mb-[120px]'>
              <li>01</li>
              <li>02</li>
              <li>03</li>
            </ul>
            <Image imgSrc={service} className="mb-[60px] sm:mb-[120px] w-[220px] sm:w-[280px] md:w-auto" />
            <Image imgSrc={serviceI} className="w-[220px] sm:w-[280px] md:w-auto" />
          </div>

          {/* Right Box */}
          <div className="w-full sm:w-auto">
            <div className="p-[30px] sm:p-[40px] bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] rounded-2xl mx-auto sm:mx-0 w-[260px] sm:w-[300px] md:w-[340px]">
              <h3 className='text-white text-[20px] sm:text-[24px] font-pop font-light leading-[32px] sm:leading-[36px] w-full sm:w-[240px]'>
                Seamless, Secure, and Smart
              </h3>
              <p className='text-white/60 text-[14px] sm:text-[16px] font-pop leading-[26px] sm:leading-[30px] w-full sm:w-[180px] pt-[50px] sm:pt-[80px]'>
                Hyper is built to remove the friction
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Transactions
