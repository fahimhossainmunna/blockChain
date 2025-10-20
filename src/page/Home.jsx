import React from "react";
import Header from "../component/layouts/Header";
import Hero from "../component/layouts/Hero";
import Counter from "../component/layouts/Counter";
import CardWallet from "../component/layouts/CardWallet";
import Technology from "../component/layouts/Technology";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Counter/>
      <CardWallet/>
      <Technology/>
    </>
  );
};

export default Home;
