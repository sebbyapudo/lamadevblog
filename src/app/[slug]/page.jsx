import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Kamau Omondi</span>
              <span className={styles.date}>07.01.2026</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad, eaque facere id ducimus sapiente, impedit quia, suscipit unde aliquam expedita eveniet praesentium corrupti! Repellat.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque quaerat maiores laudantium possimus totam praesentium corrupti ab dolore minima dolorum dolor esse explicabo architecto magnam earum vitae laborum quia numquam incidunt sint, doloremque nesciunt?
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque quaerat maiores laudantium possimus totam praesentium corrupti ab dolore minima dolorum dolor esse explicabo architecto magnam earum vitae laborum quia numquam incidunt sint, doloremque nesciunt?
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque quaerat maiores laudantium possimus totam praesentium corrupti ab dolore minima dolorum dolor esse explicabo architecto magnam earum vitae laborum quia numquam incidunt sint, doloremque nesciunt?
            </p>

          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default singlePage