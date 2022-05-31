import Head from 'next/head'
import Image from 'next/image'
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
        
      </footer>
    </div>
  )
}

export default Home;