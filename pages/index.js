import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Chart} from "src/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Georgia 2016</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          Georgia 2016 US Presidential Election Results
        </div>
        <div className={styles.subtitle}>
          Counties arranged by least number of votes to greatest number of votes
          cast
        </div>
        <Chart />
      </main>

      <footer className={styles.footer}>Made with ❤️ by Tyler Newman</footer>
    </div>
  );
}
