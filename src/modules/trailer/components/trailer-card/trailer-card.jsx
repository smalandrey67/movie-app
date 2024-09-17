import { Button } from "@ui/Button/Button";

import { FaPlay } from "react-icons/fa";

import styles from "./trailer-card.module.scss";

export function TrailerCard({ trailer }) {
  return (
    <div className={styles.trailerCard}>
      <div className={styles.trailerCardImgWrapper}>
        <img className={styles.trailerCardImg} src={trailer.img} alt="#" />
      </div>
      <div className={styles.trailerCardInfo}>
        <h4 className={styles.trailerCardTitle}>{trailer.title}</h4>
        <Button variation="playback" className={styles.trailerCardPlay}>
          <FaPlay size={8} />
        </Button>
      </div>
    </div>
  );
}
