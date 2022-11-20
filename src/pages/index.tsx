import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#060a0f] text-white ">
      <Header />
      <div className="mx-auto max-w-7xl px-10 lg:px-0">
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
