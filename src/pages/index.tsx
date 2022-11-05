import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}
