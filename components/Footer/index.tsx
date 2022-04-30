import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div id='flex-8' data-testid="flex-8" className={style.footerContainer}>
      <div id='flex-9' data-testid="flex-9" className={style.small}>
        <div className={style.smallPic}>
          <Image src='/assets/footer/shoe.png' alt='' layout='fill' objectFit='cover' />  
        </div>
        <div className={style.smallPic}>
          <Image src='/assets/footer/boost.png' alt='' layout='fill' objectFit='cover' />  
        </div>
      </div>

      <div id='flex-10' data-testid="flex-10" className={style.large}>
        <Image src='/assets/footer/room.png' alt='' layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default Footer