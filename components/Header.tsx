import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/components/Header.module.scss';

const Header = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const copyEmail = () => {
    navigator.clipboard.writeText('omaowed1@gmail.com').then(() => {
      setCopied(true);
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={`${styles.navlink} ${router.pathname === '/' ? styles.active : ''}`}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={`${styles.navlink} ${router.pathname === '/about' ? styles.active : ''}`}>
            About
          </a>
        </Link>
        <Link href="/experience">
          <a
            className={`${styles.navlink} ${
              router.pathname === '/experience' ? styles.active : ''
            }`}>
            Experience
          </a>
        </Link>
        <Link href="/skills">
          <a className={`${styles.navlink} ${router.pathname === '/skills' ? styles.active : ''}`}>
            Skills
          </a>
        </Link>
      </nav>
      <div className={styles.container}>
        <button
          type="button"
          className={`${styles.link} ${styles.email}`}
          onClick={() => copyEmail()}>
          {copied ? (
            'Copied to Clipboard'
          ) : (
            <>
              <i className="fas fa-fw fa-envelope" />
              <span>Email</span>
              <i className={`fas fa-fw fa-copy ${styles.copy}`} />
            </>
          )}
        </button>
        <a
          className={styles.link}
          href="https://drive.google.com/open?id=1pvT4qTGDJDJboUDofdFPO-7-w8e5tc8A"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fas fa-fw fa-file-pdf" />
          <span>Résumé</span>
        </a>
        <a
          className={styles.link}
          href="https://github.com/100BC"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-fw fa-github" />
          <span>GitHub</span>
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/omaowed/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-fw fa-linkedin" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
