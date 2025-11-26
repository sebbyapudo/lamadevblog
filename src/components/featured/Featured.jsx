import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there!</b> This is a Marxist Leninist Blog!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Cupiditate dicta laborum quasi deleniti fugit expedita!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured