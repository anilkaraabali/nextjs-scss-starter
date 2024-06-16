import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Footer = () => (
  <footer className={styles['footer']} data-testid='footer'>
    <div className={styles['footer__content']}>
      <Link className={styles['footer__logo']} href='/'>
        <Image alt='Nextjs Logo' height={18} src='/logo.svg' width={90} />
      </Link>
    </div>
  </footer>
);
