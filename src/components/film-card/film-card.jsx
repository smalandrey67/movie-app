import styles from "./film-card.module.scss";

export function FilmCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <p className={styles.cardGenre}>Action</p>
        <h2 className={styles.cardTitle}>The Man from U.N.C.L.E.</h2>
        <p className={styles.cardDescription}>
          Napoleon Solo is a CIA agent with a huge number of successful operations to his credit.
        </p>
      </div>
      {/* <img className={styles.cardImg} src="https://www.kinofilms.ua/images/photos/w680/363139.jpg" alt="#" /> */}
    </div>
  );
}
