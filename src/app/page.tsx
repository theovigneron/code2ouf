"use client";

import styles from "./page.module.css";

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}

export default function Home() {
  const code = "HS-10YXD21PT";

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src="/title.png" alt="Logo Code2Ouf" />
        <h1 className={styles.title}>
          Découvrez HelloFresh avec -90€ sur la première commande&nbsp;!
        </h1>
        <p className={styles.description}>
          Profitez de repas équilibrés, faciles à préparer, et livrés chez vous. Utilisez le code ci-dessous pour bénéficier de l&apos;offre exclusive&nbsp;:
        </p>
        <div className={styles.codeBox}>
          <span className={styles.codeLabel}>CODE :</span>
          <span className={styles.code}>{code}</span>
        </div>
        <button
          className={styles.button}
          onClick={() => {
              window.location.href = "https://www.hellofresh.fr/pages/value-messaging-raf?c=HS-10YXD21PT";
          }}
        >
          Utiliser l&apos;offre
        </button>
      </div>
    </div>
  );
}
