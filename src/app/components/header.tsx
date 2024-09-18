import NavMenu from './navmenu';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navBar}>
        <Link href='../' className={styles.header}>
          Island Meltdown
        </Link>
        <NavMenu />
      </nav>
    </header>
  );
}
