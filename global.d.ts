declare module 'jest-next-dynamic';

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
