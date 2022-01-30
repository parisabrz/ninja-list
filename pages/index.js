import Head from "next/head";
// import Image from 'next/image'
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>lorem</p>
        <Link href="/ninjas">
          <a className={styles.btn}>see ninja listing</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
