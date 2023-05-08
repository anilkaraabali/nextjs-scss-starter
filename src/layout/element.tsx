import clsx from 'clsx';
import { Inter } from 'next/font/google';

import { Footer } from '@/library/footer/element';
import { Header } from '@/library/header/element';

import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div id='root' className={clsx(inter.className, styles.root)}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};
