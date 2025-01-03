'use client';
import Image from 'next/image';
import stars from './public/images/starss.png';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={stars}
          alt='A volcano spewing lava.'
          className={styles.backgroundImage}
        ></Image>
        <div className={styles.buttonContainer}>
          <button
            className={styles.menuButton}
            onClick={() => console.log('here')}
          >
            View Menu
          </button>
        </div>
      </main>
    </div>
  );
}
