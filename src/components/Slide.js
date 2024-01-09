import React from 'react';
import styles from '@/styles/components/slide.module.css';
import Link from 'next/link';

const Slide = () => {
  return (
    <section className={styles.slideBg}>
      <div className={styles.slide}>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <Link href={'/viagem-com-meu-pet'}>
              <h1>
                <span>
                  Viagem <br />
                  com meu pet
                </span>
              </h1>
              <br />
              <p>
                "Veja o que é <span>necessário</span> para <span>viajar</span>{' '}
                com o pet."
                <br />
                <br />
                Leia aqui.
              </p>
            </Link>
          </div>
        </div>

        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              <span>Desde</span> 1979
            </h1>
            <p>
              "Com anos de dedicação e cuidado com os pets, nossa empresa tem a{' '}
              <span>experiência</span> e o <span>comprometimento</span>{' '}
              necessários para garantir a saúde e o bem-estar dos seus animais
              de estimação."
            </p>
          </div>
        </div>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              Frete <span>Grátis</span>
            </h1>
            <p>A partir de:</p>
            <div>
              <p>
                <span>R$ 30</span> em compras. (Até 5km)
              </p>
              <p>
                <span>R$ 50</span> em compras. (Até 10km)
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slideItem}>
          <div className={styles.slideContent}>
            <h1>
              <span>Veterinário</span>
            </h1>
            <p>
              Consulte com nossos veterinários! Agende pelo WhatsApp. Temos o{' '}
              <span>melhor preço</span> da região.
            </p>
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
              <br />
              Coloque os produtos no carrinho e envie o pedido, finalizaremos
              seu atendimento pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
