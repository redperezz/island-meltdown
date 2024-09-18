import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.newsletterContainer}>
        <p className={styles.newsletter}>Sign up for our Newsletter!</p>
      </div>
      <div className={styles.footerMenuContainer}>
        <ul className={styles.footerMenu}>
          <li className={styles.footerItem}>Instagram</li>
          <li className={styles.footerItem}>Facebook</li>
        </ul>
      </div>
    </footer>
  );
}
