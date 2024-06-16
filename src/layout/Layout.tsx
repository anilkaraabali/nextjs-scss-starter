import { Footer } from '@/layout/footer/Footer';
import { Header } from '@/layout/header/Header';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const Layout: React.FC<React.PropsWithChildren> = (props) => (
  <div className={clsx(inter.className, styles.root)} id='root'>
    <Header />
    <main className={styles.main}>{props.children}</main>
    <Footer />
  </div>
);
