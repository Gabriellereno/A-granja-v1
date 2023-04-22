import Head from 'next/head';
import Slide from '@/components/Slide';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>A Granja</title>
        <meta name="description" content="A marca preferida do seu pet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className={styles.main}>
        <Slide />
      </main>
    </>
  );
}
