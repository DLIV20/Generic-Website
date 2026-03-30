import '../styles/globals.css';
import { useEffect } from 'react';
import config from '../data/config.json';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Set CSS variables from config
    document.documentElement.style.setProperty('--color-primary', config.primaryColor);
    document.documentElement.style.setProperty('--color-secondary', config.secondaryColor);
  }, []);

  return <Component {...pageProps} />;
}
