import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt='lama blog' width={50} height={50}/>
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum numquam velit facilis rerum. Impedit praesentium quisquam reiciendis esse ut. Tempora quod officiis dolorum veritatis.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='FAB' width={18} height={18} />
          <Image src="/instagram.png" alt='FAB' width={18} height={18} />
          <Image src="/tiktok.png" alt='FAB' width={18} height={18} />
          <Image src="/youtube.png" alt='FAB' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Homepage</Link>
          <Link href="/">Homepage</Link>
          <Link href="/">Homepage</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Theory & Ideology</Link>
          <Link href="/">Political Economy</Link>
          <Link href="/">Revolutionary Movements</Link>
          <Link href="/">Orgnaization</Link>
          <Link href="/">News & Commentary</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer 