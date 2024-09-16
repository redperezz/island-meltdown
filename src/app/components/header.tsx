import NavBar from './navbar';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <h1 className={styles.header}>Island Meltdown</h1>
        <NavBar />
      </nav>
    </header>
  );
}
