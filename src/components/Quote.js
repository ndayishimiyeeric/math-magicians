import React from 'react';
import { BsChatQuote } from 'react-icons/bs';
import styles from './styles/Quote.module.css';

const Quote = () => {
  const author = 'William Paul Thurson';
  return (
    <p className={styles.quote}>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it about understanding. -
      { author }
      <BsChatQuote />
    </p>
  );
};

export default Quote;
