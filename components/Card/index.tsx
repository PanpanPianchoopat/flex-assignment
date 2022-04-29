import React from 'react'
import style from './Card.module.css'
import Image from 'next/image'

interface CardProps {
  image: string,
  name: string,
  price: number
}

const Card = ({image, name, price}: CardProps) => {
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <Image src={image} alt='' width={200} height={200} />
      </div>
      <div className={style.cardText}>
        <div className={style.productName}>{name}</div>
        <div>$ {price}</div>
      </div>
    </div>
  )
}

export default Card