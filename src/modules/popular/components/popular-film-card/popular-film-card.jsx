import { Button } from "@ui/Button/Button";
import { ButtonMore } from "@ui/button-more/button-more";

import { FaPlay } from "react-icons/fa6";

import styles from "./popular-film-card.module.scss";

export function PopularFilmCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardMore}>
        <ButtonMore />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardGenre}>Action</p>
        <h2 className={styles.cardTitle}>The Man from U.N.C.L.E.</h2>
        <div className={styles.cardWrapper}>
          <p className={styles.cardDescription}>
            Napoleon Solo is a CIA agent with a huge number of successful operations to his credit.
          </p>
          <Button variation="playback" className={styles.cardPlayBack}>
            <FaPlay />
          </Button>
        </div>
      </div>
    </div>
  );
}
