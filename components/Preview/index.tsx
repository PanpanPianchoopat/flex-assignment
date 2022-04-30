import React from 'react'
import style from './Preview.module.css'
import Image from 'next/image'

const Preview = () => {
  return (
    <div id='flex-4' data-testid="flex-4" className={style.previewContainer}>
      <div className={style.sides}>
        <Image src='/assets/preview/spray.png' alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={style.sides}>
        <Image src='/assets/preview/man.png' alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={style.center}>
        <Image src='/assets/preview/center.png' alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={style.sides}>
        <Image src='/assets/preview/blue.png' alt='' layout='fill' objectFit='cover' />
      </div>
      <div className={style.sides}>
        <Image src='/assets/preview/skate.png' alt='' layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default Preview