import React from "react";
import Header from "../component/layouts/Header";
import Hero from "../component/layouts/Hero";
import Counter from "../component/layouts/Counter";
import CardWallet from "../component/layouts/CardWallet";
import Technology from "../component/layouts/Technology";
import Ecosystem from "../component/layouts/Ecosystem";
import Innovators from "../component/layouts/Innovators";
import Transactions from "../component/layouts/Transactions";
import Footer from "../component/layouts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Counter/>
      <CardWallet/>
      <Technology/>
      <Ecosystem/>
      <Innovators/>
      <Transactions/>
      <Footer/>
    </>
  );
};

export default Home;
