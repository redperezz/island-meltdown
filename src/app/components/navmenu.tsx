import Link from 'next/link';
import classNames from 'classnames';
import styles from './navmenu.module.css';

export default function NavMenu() {
  return (
    <>
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <Link href='../' className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href='../menu' className={styles.navLink}>
            Menu
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href='../calendar' className={styles.navLink}>
            Calendar
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href='../about' className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href='' className={styles.navLink}>
            Contact
          </Link>
        </li>
        <li className={classNames(styles.navItem, styles.findUs)}>
          <Link href='' className={styles.navLink}>
            Find Us
          </Link>
        </li>
      </ul>
      <div></div>
    </>
  );
}
