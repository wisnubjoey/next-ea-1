import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>

    <Head>
      <title>Bjoey | Home</title>
      <meta name="description" content="Bjoey Website" />
    </Head>
    <h1 className="titlee">Hello Worldddd!</h1>  
    <Image src="/Wisnu-Hutama.png" width={960} height={1280} alt="profile" />

    </>
  )
}
