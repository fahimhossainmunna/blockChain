import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { FaDribbble, FaBehance, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-[#1e1e1e] py-[70px] text-white/80">
      <Container>
        {/* Top Section */}
        <Flex className="flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
          
          {/* Newsletter */}
          <div className="w-full lg:w-[30%]">
            <h3 className="text-white font-semibold text-lg mb-5">Join a Newsletter</h3>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-[#2a2a2a] text-white placeholder-white/50 px-4 py-3 rounded-lg w-full sm:w-[220px] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#3a3a3a] to-[#1f1f1f] px-6 py-3 rounded-lg text-white font-medium hover:opacity-80 transition"
              >
                Submit
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-[#333] transition">
                <FaDribbble />
              </a>
              <a href="#" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-[#333] transition">
                <FaBehance />
              </a>
              <a href="#" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-[#333] transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-[#333] transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="w-full lg:w-[20%]">
            <h3 className="text-white font-semibold text-lg mb-5">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full lg:w-[20%]">
            <h3 className="text-white font-semibold text-lg mb-5">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Security Protocols</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Brand Info */}
          <div className="w-full lg:w-[25%]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <h3 className="text-white text-lg font-semibold">Hyper</h3>
            </div>
            <p className="text-white/60 text-sm leading-6 w-[90%]">
              Hyper is the next-generation blockchain platform built to power secure, scalable.
            </p>
            <p className="text-white/50 text-sm mt-6">Blockchain Technology Website</p>
          </div>
        </Flex>

        {/* Bottom Border */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm text-white gap-y-3">
          <p>LinkedIn</p>
          <p>Dribbble</p>
          <p>Pinterest</p>
          <p className="text-white/40">Blockchain Technology Website</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
