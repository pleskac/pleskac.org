import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>pleskac.org</title>
        <meta name="description" content="Randomness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Hello world</p>
      </main>

      <footer className={styles.footer}>
        <a href='https://github.com/pleskac/pleskac.org'>Code</a>
      </footer>
    </div>
  )
}

export default Home;