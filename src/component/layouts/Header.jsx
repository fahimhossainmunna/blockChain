import React, { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Image from "../common/Image";
import logo from "/src/assets/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1e1e1e] backdrop-blur-md border-b border-white/10 py-4 z-50">
      <Container>
        <Flex className="items-center justify-between">
          {/* Left Menu */}
          <div className="hidden md:block">
            <ul className="text-white/60 flex items-center gap-x-6 relative">
              {/* Features */}
              <li
                className="flex items-center hover:text-white transition-all duration-300 cursor-pointer relative"
                onClick={() => handleDropdown("features")}
              >
                Features <MdArrowDropDown />
                <AnimatePresence>
                  {dropdown === "features" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-8 left-0 bg-[#252525]/95 backdrop-blur-md p-3 rounded-lg shadow-lg w-48 text-sm text-white/70"
                    >
                      <li className="hover:text-white py-1">Smart Contracts</li>
                      <li className="hover:text-white py-1">DeFi Dashboard</li>
                      <li className="hover:text-white py-1">Blockchain Explorer</li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Catalog */}
              <li
                className="flex items-center hover:text-white transition-all duration-300 cursor-pointer relative"
                onClick={() => handleDropdown("catalog")}
              >
                Catalog <MdArrowDropDown />
                <AnimatePresence>
                  {dropdown === "catalog" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-8 left-0 bg-[#252525]/95 backdrop-blur-md p-3 rounded-lg shadow-lg w-48 text-sm text-white/70"
                    >
                      <li className="hover:text-white py-1">Crypto Wallet</li>
                      <li className="hover:text-white py-1">Token List</li>
                      <li className="hover:text-white py-1">NFT Marketplace</li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Pages */}
              <li
                className="flex items-center hover:text-white transition-all duration-300 cursor-pointer relative"
                onClick={() => handleDropdown("pages")}
              >
                Pages <MdArrowDropDown />
                <AnimatePresence>
                  {dropdown === "pages" && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-8 left-0 bg-[#252525]/95 backdrop-blur-md p-3 rounded-lg shadow-lg w-48 text-sm text-white/70"
                    >
                      <li className="hover:text-white py-1">About Us</li>
                      <li className="hover:text-white py-1">Whitepaper</li>
                      <li className="hover:text-white py-1">Roadmap</li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-center w-full md:w-auto">
            <Image imgSrc={logo} className="w-28 md:w-32" />
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-x-8 text-white/60">
            <ul className="flex items-center gap-x-8">
              <li className="hover:text-white transition-all cursor-pointer">Blogs</li>
              <li className="hover:text-white transition-all cursor-pointer">Contact</li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="I’m looking for..."
                className="bg-transparent border border-white/40 text-white placeholder:text-white/40 rounded-2xl px-3 py-1 focus:outline-none focus:border-white transition-all"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-4 h-4 absolute right-3 top-2.5 opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.64 5.64a7.5 7.5 0 0 0 10.61 10.61Z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white/80 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </div>
        </Flex>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden mt-3 bg-[#252525]/90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
            >
              <ul className="text-white/70 flex flex-col p-4 gap-y-2">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Catalog</li>
                <li className="hover:text-white cursor-pointer">Pages</li>
                <li className="hover:text-white cursor-pointer">Blogs</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;
