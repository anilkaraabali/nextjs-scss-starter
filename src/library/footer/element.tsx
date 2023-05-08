import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer data-testid='footer' className={styles.footer}>
      <div className={styles.content}>
        <Link href='/' className={styles.logo}>
          <Image src='/logo.svg' alt='Nextjs Logo' width={90} height={18} />
        </Link>
      </div>
    </footer>
  );
};
