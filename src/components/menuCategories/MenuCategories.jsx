import Link from 'next/link'
import React from 'react'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" 
          className={`${styles.categoryItem} 
          ${styles.theory}`}>
          Theory
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.categoryItem} 
          ${styles.politicalEconomy}`}>
          Political Economy
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.categoryItem} 
          ${styles.revolutionaryMovements}`}>
          Revolutionary Movements
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.categoryItem} 
          ${styles.organization}`}>
          Organization
        </Link>

        <Link href="/blog?cat=style" 
          className={`${styles.categoryItem} 
          ${styles.news}`}>
          News & Commentary
        </Link>
      </div>
  )
}

export default MenuCategories