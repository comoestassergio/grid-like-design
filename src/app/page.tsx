import Image from 'next/image'
import styles from './Page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.link__one}>Courses</p>
      <p className={styles.link__two}>About</p>
      <p className={styles.link__three}>Contact</p>
      <p className={styles.link__four}>More</p>
      <h1 className={styles.logo}>Kunst.</h1>
      <div className={styles.title}>
        <p className={styles.title__secondary}>Discover your passion for creating content with the best teachers from all over the world</p>
        <p className={styles.title__main}>Level up your design</p>
      </div>
    </main>
  )
}
