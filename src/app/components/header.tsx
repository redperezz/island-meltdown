'use client';
import { useCallback, useEffect, useState } from 'react';
import NavMenu from './navmenu';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import logo from '../public/images/IM-logo-modified.png';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        scrollY > 0
          ? classNames(styles.headerContainer, styles.headerContainerScrolled)
          : styles.headerContainer
      }
    >
      <nav className={styles.navBar}>
        <Link
          href='../'
          className={
            scrollY > 0
              ? classNames(styles.header, styles.headerScrolled)
              : styles.header
          }
        >
          <Image
            src={logo}
            alt='The Island Meltdown logo.'
            className={styles.logo}
          ></Image>
        </Link>
        <NavMenu />
      </nav>
    </header>
  );
}
