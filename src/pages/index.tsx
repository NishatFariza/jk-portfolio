import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Blog from "./Blog";
import Footer from "../components/Footer";
import MyHobby from "../components/MyHobby";

export default function Home() {
  return (
    <div className="bg-[#111A28] text-white">
      <div className="px-28">
        <Header />
        <Hero />
        <About />
        <Skill />
        <MyHobby />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
