import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'

const Menu = () => {
  return (
    <div className={styles.container}>


      {/* Most Popular */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* Menu Categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.itemss}>
        <Link href="/blog?cat=style" 
          className={`${styles.category} 
          ${styles.theory}`}>
          Theory
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.category} 
          ${styles.politicalEconomy}`}>
          Political Economy
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.category} 
          ${styles.revolutionaryMovements}`}>
          Revolutionary Movements
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.category} 
          ${styles.organization}`}>
          Organization
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.category} 
          ${styles.news}`}>
          News & Commentary
        </Link>
      </div>

      {/* Editor's Pick */}
      <h2 className={styles.subtitle}>{"Chosen by the Editor"}</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true} />

    </div>
  )
}

export default Menu