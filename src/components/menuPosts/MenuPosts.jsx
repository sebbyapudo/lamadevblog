import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        {/* Item 1 */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.theory}`}>
              Theory & Ideology
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Amilcar Cabral</span>
              <span className={styles.date}> - 12.12.2025</span>
            </div>
          </div>
        </Link>
        {/* Item 2 */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.politicalEconomy}`}>
              Political Economy
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Amilcar Cabral</span>
              <span className={styles.date}> - 12.12.2025</span>
            </div>
          </div>
        </Link>
        {/* Item 3 */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.revolutionaryMovements}`}>
              Revolutionary Movements
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Amilcar Cabral</span>
              <span className={styles.date}> - 12.12.2025</span>
            </div>
          </div>
        </Link>
        {/* Item 4 */}
        <Link href="/" className={styles.item}>
          { withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.organization}`}>
              Organization
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Amilcar Cabral</span>
              <span className={styles.date}> - 12.12.2025</span>
            </div>
          </div>
        </Link>
        {/* Item 5 */}
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.news}`}>
              News & Commentary
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Amilcar Cabral</span>
              <span className={styles.date}> - 12.12.2025</span>
            </div>
          </div>
        </Link>
      </div>
      
  )
}

export default MenuPosts