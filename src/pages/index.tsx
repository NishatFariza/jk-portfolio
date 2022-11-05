import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from '../components/Skill'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  )
}
