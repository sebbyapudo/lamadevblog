import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className={styles.container}>


      {/* Most Popular */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {/* Item 1 */}
        <Link href="/" className={styles.item}>
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

      {/* Menu Categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.theory}`}>
          Theory
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.politicalEconomy}`}>
          Political Economy
        </Link>

        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.revolutionaryMovements}`}>
          Revolutionary Movements
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.organization}`}>
          Organization
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.news}`}>
          News & Commentary
        </Link>
      </div>

      {/* Editor's Pick */}
      <h2 className={styles.subtitle}>{"Chosen by the Editor"}</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <div className={styles.items}>
        {/* Item 1 */}
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
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
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
          </div>
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

    </div>
  )
}

export default Menu