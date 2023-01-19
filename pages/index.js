import Head from 'next/head'
import { Header } from '../components/Header'
import Nosotros from '../components/cards/Nosotros'
import { Servicios } from '../components/Servicios'
import Portfolio from '../components/Portfolio'
import { Layout } from '../components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Teo-Coop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ background: 'black' }}>
        <Layout>
          <Header />
          <Portfolio />
          <div className='backgroundAmplio'>
            <Nosotros />
            <Servicios />
          </div>
        </Layout>
      </div>
    </>
  )
}
