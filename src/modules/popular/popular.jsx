import { PopularFilmCard } from "./components/popular-film-card/popular-film-card";

import styles from "./popular.module.scss";

export function Popular() {
  return (
    <div className={styles.popular}>
      <PopularFilmCard />
      <PopularFilmCard />
      <PopularFilmCard />
    </div>
  );
}
