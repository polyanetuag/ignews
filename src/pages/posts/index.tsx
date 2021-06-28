import styles from './styles.module.scss';
import Head from 'next/head';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time> 28 de junho de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared button</p>
          </a>

          <a href="">
            <time> 28 de junho de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared button</p>
          </a>

          <a href="">
            <time> 28 de junho de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared button</p>
          </a>
        </div>
      </main>
    </>
  );
}