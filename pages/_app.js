import React from 'react';
import './styles/app.css';
import './styles/buttons.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}