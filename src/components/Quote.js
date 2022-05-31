import React from 'react';
import styles from './styles/Quote.module.css';

const Quote = () => {
  const author = 'William Paul Thurson';
  return (
    <p className={styles.quote}>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it about understanding. -
      { author }
    </p>
  );
};

export default Quote;
