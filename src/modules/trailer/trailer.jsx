import { TRAILERS_MOCK } from "./trailer.configuration";

import { Trailers } from "./components/trailers/trailers";
import { TrailerCard } from "./components/trailer-card/trailer-card";

import styles from "./trailer.module.scss";

export function Trailer() {
  return (
    <div className={styles.trailer}>
      <Trailers trailers={TRAILERS_MOCK} onTrailerRender={(trailer) => <TrailerCard key={trailer.title} trailer={trailer} />} />
    </div>
  );
}
