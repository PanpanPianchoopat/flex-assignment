import React from 'react'
import style from './BestSeller.module.css'
import Image from 'next/image'

const BestSeller = () => {
  return (
    <div id='flex-6' className={style.bestsellerContainer}>
      <div id='flex-7' className={style.descriptionSection}>
        <h1>Best Seller</h1>
        <div className={style.description}>Deciding what to wear to express your mood? Do you feel sporty,
          casual, chic or sophisticated? Hey, stop overthinking it. Stan
          Smith&apos;s iconic shoe solved this problem decades ago.
        </div>
        <button className={style.button}>See More</button>
      </div>
      
      <div className={style.image}>
        <Image src='/assets/best-seller.png' alt="" layout='fill' objectFit='cover'/>
      </div>
    </div>
  )
}

export default BestSeller