import { GetStaticProps } from 'next';

import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
          <span>por apenas {product.amount}/mês</span> 
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Mulher programando" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1J0EFJEsIvZcVYkMw3nHkGcX')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency:'BRL',
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24hrs
  }
}
