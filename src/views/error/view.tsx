import { NextPage } from 'next';

import styles from './styles.module.scss';
import { ErrorViewPropsInterface } from './view-props.interface';

export const ErrorView: NextPage<ErrorViewPropsInterface> = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{props.statusCode}</h1>
    <p className={styles.desc}>{props.title}</p>
  </div>
);
