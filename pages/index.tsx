import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Preview from '../components/Preview'
import Card from '../components/Card'
import BestSeller from '../components/BestSeller'
import Footer from '../components/Footer';

const PRODUCTS = [
  {
    image: '/assets/card/SuperStarBlue.png',
    name: 'SUPERSTAR',
    price: 109.09
  },
  {
    image: '/assets/card/StanSmith.png',
    name: 'STAN SMITH',
    price: 120.89
  },
  {
    image: '/assets/card/SL20-3M.png',
    name: 'SL20.3 M',
    price: 140.00
  },
  {
    image: '/assets/card/SuperStarWhite.png',
    name: 'SUPERSTAR',
    price: 109.09
  },
  {
    image: '/assets/card/NMD-R1.png',
    name: 'NMD_R1 PRIMEBLUE',
    price: 120.89
  },
  {
    image: '/assets/card/Supercourt.png',
    name: 'SUPERCOURT',
    price: 120.89
  },
  {
    image: '/assets/card/Ultraboost22.png',
    name: 'ULTRABOOST 22',
    price: 120.89
  },
  {
    image: '/assets/card/4D-Futurecraft.png',
    name: '4D FUTURECRAFT',
    price: 120.89
  },
  {
    image: '/assets/card/Ultra4D.png',
    name: 'ULTRA 4D',
    price: 120.89
  },
  {
    image: '/assets/card/4D-FWD-Pulse.png',
    name: '4D FWD_Pulse',
    price: 120.89
  },
  
]

const Home: NextPage = () => {
  return (
    <div id='flex-1' className={styles.container}>
      <Navbar />
      <div className={styles.cover}>
        <Image src='/assets/cover.png' alt='' layout='fill' objectFit='cover' />
      </div>
      <Preview />
      <h1>Products</h1>
      <div id='flex-5' className={styles.productContainer}>
        {PRODUCTS.map(({ image, name, price }, index) => <Card key={index} image={image} name={name} price={price} />)}
      </div>
      <BestSeller />
      <Footer />
    </div>
  )
}

export default Home
