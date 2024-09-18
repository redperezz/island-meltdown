'use client';
import Image from 'next/image';
import fujiIsland from './public/images/fuji-island.jpg';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={fujiIsland}
          alt='Fuji Island desserts'
          className={styles.fujiIsland}
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
