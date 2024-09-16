import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <ul className={styles.navItems}>
      <Link href='../' className={styles.navItem}>
        <li>Home</li>
      </Link>
      <Link href='../menu' className={styles.navItem}>
        <li>Menu</li>
      </Link>
      <Link href='../calendar' className={styles.navItem}>
        <li>Calendar</li>
      </Link>
      <Link href='../about' className={styles.navItem}>
        <li>About</li>
      </Link>
      <Link href='' className={styles.navItem}>
        <li>Contact</li>
      </Link>
    </ul>
  );
}
