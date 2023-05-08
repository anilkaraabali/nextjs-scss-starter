import { ErrorProps } from 'next/error';

export interface ErrorViewPropsInterface extends ErrorProps {
  detail?: string;
}
