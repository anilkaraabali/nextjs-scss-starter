import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles['header']} data-testid='header'>
    <div className={styles['header__content']}>
      <Link href='/'>
        <Image
          alt='Nextjs Logo'
          height={25}
          src='/logo-brandmark.svg'
          width={32}
        />
      </Link>
    </div>
  </header>
);
