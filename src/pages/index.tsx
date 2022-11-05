import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#111A28] text-white">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}
