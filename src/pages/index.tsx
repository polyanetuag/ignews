import Head from 'next/head'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title>ig.News</title>
        </Head>

      <h1 className={styles.title}>
        Hello world
      </h1>
    </>
  )
}
