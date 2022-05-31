import React from 'react';
import styles from './styles/Home.module.css';

const Home = () => {
  const random = 'radom';
  return (
    <div className={styles.showcase}>
      <h3>Welcome to our page!</h3>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo, quidem? Doloribus doloremque id, magni unde quibusdam
        omnis provident debitis. Incidunt deserunt consequatur, numquam
        placeat asperiores id
        {' '}
        {random}
        {' '}
        ipsum? Labore atque velit error distinctio
        nam iusto voluptatem! At, hic. Temporibus consectetur, debitis eum
        vero, reiciendis corporis, sapiente iusto magnam ullam voluptates ea!
        ipsum? Labore atque velit error distinctio
        nam iusto voluptatem! At, hic. Temporibus consectetur, debitis eum
        vero, reiciendis corporis, sapiente iusto magnam ullam voluptates ea!
      </p>
      <span className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus vero recusandae ratione magni corporis odio
        consequatur eos. Illum, ut perferendis.
        ipsum? Labore atque velit error distinctio
        nam iusto voluptatem! At, hic. Temporibus consectetur, debitis eum
        vero, reiciendis corporis, sapiente iusto magnam ullam voluptates ea!
      </span>
    </div>
  );
};

export default Home;
