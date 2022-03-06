import Head from 'next/head'
import { useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        // Dev for testing service workers
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Micro Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/blogging180.png"/>
      </Head>

      <main className={styles.main}>
        <Header />

      </main>
    </div>
  );
}
