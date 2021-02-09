import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Otman Maowed' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Personal Website for Otman Maowed. UI and Front-End Developer based in Edmonton Alberta"
      />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
        crossOrigin="anonymous"
      />
    </Head>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
