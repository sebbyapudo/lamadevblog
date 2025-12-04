import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular categories</h1>
      <div className={styles.categories}>
          {/* category one */}
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.theory}`}>
            <Image 
              src='/style.png' 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image}
              
            />
            Theory & Ideology
          </Link>
                    
          {/* category two */}
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.politicalEconomy}`}>
            <Image 
              src='/food.png' 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image}
              
            />
            Political Economy
          </Link>

          {/* category three */}
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.revolutionaryMovements}`}>
            <Image 
              src='/travel.png' 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image}
              
            />
            Revolutionary Movements
          </Link>

          {/* category four */}
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.organization}`}>
            <Image 
              src='/culture.png' 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image}
              
            />
            Organization
          </Link>

          {/* category five */}
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.news}`}>
            <Image 
              src='/coding.png' 
              alt='' 
              width={32} 
              height={32} 
              className={styles.image}
              
            />
            News & Commentary
          </Link>
        </div>
      </div>
  )
}

export default CategoryList