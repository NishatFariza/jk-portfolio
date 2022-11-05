import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  )
}
