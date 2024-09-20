'use client';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './navmenu.module.css';
import { useEffect, useState } from 'react';
import { useComponentVisible } from '../hooks/useComponentVisible';

export default function NavMenu() {
  const [isActive, setActive] = useState(false);
  const ref = useComponentVisible(() => {
    console.log('hit');
    setActive(false);
  });

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <ul
        className={classNames(
          'navMenu',
          isActive && styles.navMenuActive,
          styles.navMenu
        )}
      >
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../'
            className={classNames('navLink', styles.navLink)}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../menu'
            className={classNames('navLink', styles.navLink)}
            onClick={handleClick}
          >
            Menu
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../calendar'
            className={classNames('navLink', styles.navLink)}
            onClick={handleClick}
          >
            Calendar
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href='../about'
            className={classNames('navLink', styles.navLink)}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem)}>
          <Link
            href=''
            className={classNames('navLink', styles.navLink)}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
        <li className={classNames('navItem', styles.navItem, styles.findUs)}>
          <Link
            href=''
            className={classNames('navLink', styles.navLink)}
            onClick={handleClick}
          >
            Find Us
          </Link>
        </li>
      </ul>
      <div
        className={classNames(
          'hamburger',
          isActive && styles.hamburgerActive,
          styles.hamburger
        )}
        onClick={handleClick}
        ref={isActive ? ref : undefined}
      >
        <span className={classNames('bar', styles.bar)}></span>
        <span className={classNames('bar', styles.bar)}></span>
        <span className={classNames('bar', styles.bar)}></span>
      </div>
    </>
  );
}
