"use client";

import styles from "./page.module.css";

export default function Home() {
  const code = "HS-JBIXTK4BY";

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1>🍽️</h1>
        <h1 className={styles.title}> Découvrez HelloFresh avec -90€ sur la première commande !</h1>
        <p className={styles.description}>
          Profitez de repas équilibrés, faciles à préparer, et livrés chez vous. Utilisez le code ci-dessous pour bénéficier de l'offre exclusive :
        </p>
        <div className={styles.codeBox}>
          <span className={styles.codeLabel}>CODE :</span>
          <span className={styles.code}>{code}</span>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            window.location.href = "https://www.hellofresh.fr/pages/value-messaging-raf?c=HS-JBIXTK4BY";
          }}
        >
          Utiliser l'offre
        </button>
      </div>
    </div>
  );
}
