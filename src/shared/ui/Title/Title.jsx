import { clsx } from "clsx";

import styles from "./Title.module.scss";

export const Title = ({ children, variation }) => {
  switch (variation) {
    case "big":
      return <h1 className={clsx(styles.title, styles.titleBig)}>{children}</h1>;
    case "medium":
      return <h2 className={clsx(styles.title, styles.titleMedium)}>{children}</h2>;
    case "small":
      return <h3 className={clsx(styles.title, styles.titleSmall)}>{children}</h3>;
    default:
      return <h4>{children}</h4>;
  }
};
