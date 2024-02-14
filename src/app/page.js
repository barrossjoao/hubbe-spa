import React from 'react';

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Olá, Seja Bem Vindo</h1>
      <p>Para acessar a página segura, por favor</p>
      <Link href={"/pagina"} className={styles.link}>
        Clique Aqui
      </Link>
    </div>
  );
}
