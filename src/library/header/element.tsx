import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header data-testid='header' className={styles.header}>
      <div className={styles.content}>
        <Link href='/'>
          <Image src='/logo-brandmark.svg' alt='Nextjs Logo' width={32} height={25} />
        </Link>
      </div>
    </header>
  );
};
