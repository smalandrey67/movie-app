import { Mystery } from "./components/mystery/mystery";
import { More } from "./components/more/more";
import { Animation } from "./components/animation/animation";
import { Movies } from "./components/movies/movies";
import { TvSeries } from "./components/tv-series/tv-series";

import styles from "./navigation.module.scss";

export function Navigation() {
  return (
    <div className={styles.nav}>
      <Movies />
      <TvSeries />
      <Animation />
      <Mystery />
      <More />
    </div>
  );
}
