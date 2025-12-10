import Link from "next/link"
import styles from "./card.module.css"
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12/10/2025 - </span>
          <span className={styles.category}>POLITICAL ECONOMY</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus earum voluptatem commodi asperiores cupiditate odio quasi eligendi. Provident doloremque, dolore eligendi laboriosam eos obcaecati?
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card