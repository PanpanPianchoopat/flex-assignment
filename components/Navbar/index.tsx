import React from 'react'
import style from './Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div id='flex-2' data-testid="flex-2" className={style.nav}>
      <div id='flex-3' data-testid="flex-3" className={style.navItem}>
        <Image src='/assets/icon/logo.png' alt='' width={48} height={48} />
        <div className={style.navMenu}>All</div>
        <div className={style.navMenu}>Originals</div>
        <div className={style.navMenu}>Sports</div>
        <div className={style.hamburger}>
          <Image src='/assets/icon/hamburger.svg' alt='' width={32} height={32} />
        </div>
      </div>

      <div className={style.searchBar}>
        <Image src='/assets/icon/search.svg' alt='' width={24} height={24} />
        <input className={style.input} type='text' />
      </div>
      
      <div className={style.userMenu}>
        <div style={{marginRight: '16px'}}>
          <Image src='/assets/icon/bag.svg' alt='' width={32} height={32} />
        </div>
        <Image src='/assets/icon/user.svg' alt='' width={32} height={32} />
      </div>
    </div>
  )
}
export default Navbar