import React from 'react';
import styles from '@/styles/components/slide.module.css';

const Slide = () => {
  return (
    <section className={styles.slideBg}>
      <div className={styles.slide}>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              Frete <span>Grátis</span>
            </h1>
            <p>A partir de:</p>
            <p>
              <span>R$ 30</span> em compras. (5km de nossa loja)
            </p>

            <p>
              <span>R$ 50</span> em compras. (5km a 10km de nossa loja)
            </p>
          </div>
        </div>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              <span>Veterinário</span>
            </h1>
            <p>Melhor preço da região</p>
          </div>
        </div>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              Mais <span>vantagens?</span>
            </h1>
            <p>
              Peça pelo site e ganhe <span>5%</span> de desconto em qualquer
              compra!
            </p>
          </div>
        </div>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              <span>50</span> Anos
            </h1>
            <p>
              "Com 50 anos de dedicação e cuidado com os pets, nossa empresa tem
              a <span>experiência</span> e o <span>comprometimento</span>{' '}
              necessários para garantir a saúde e o bem-estar dos seus animais
              de estimação."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
