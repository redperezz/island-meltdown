'use client';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './navmenu.module.css';
import { useEffect, useState } from 'react';

export default function NavMenu() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navMenu');

    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu?.classList.toggle('active');
    });

    document.querySelectorAll('.navLink').forEach((n) =>
      n.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
      })
    );
  }, []);

  return (
    <>
      <ul className={classNames('navMenu', styles.navMenu)}>
        <li className={classNames('navItem', styles.navItem)}>
          <Link href='../' className={classNames('navLink', styles.navLink)}>
            Home
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../menu'
            className={classNames('navLink', styles.navLink)}
          >
            Menu
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../calendar'
            className={classNames('navLink', styles.navLink)}
          >
            Calendar
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../about'
            className={classNames('navLink', styles.navLink)}
          >
            About
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link href='' className={classNames('navLink', styles.navLink)}>
            Contact
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem, styles.findUs)}>
          <Link href='' className={classNames('navLink', styles.navLink)}>
            Find Us
          </Link>
        </li>
      </ul>
      <div className={classNames('hamburger', styles.hamburger)}>
        <span className={classNames('bar', styles.bar)}></span>
        <span className={classNames('bar', styles.bar)}></span>
        <span className={classNames('bar', styles.bar)}></span>
      </div>
    </>
  );
}
