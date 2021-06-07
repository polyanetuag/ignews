import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
          <title>Início | ig.News</title>
        </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Olá, seja bem-vindo(a)</span>
          <h1>Saiba novidades sobre o mundo do <span>React</span></h1>
          <p>Tenha acesso a todo conteúdo das publicações <br />
          <span>por apenas R$ 9,90/mês</span> 
          </p>

        </section>

        <img src="/images/avatar.svg" alt="Mulher programando" />
      </main>
    </>
  )
}
