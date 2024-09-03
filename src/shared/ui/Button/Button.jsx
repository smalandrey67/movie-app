import { clsx } from "clsx";

import styles from "./Button.module.scss";

export const Button = ({ children, variation }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.buttonPlayback]: variation === "playback",
        [styles.buttonAction]: variation === "action"
      })}
    >
      {children}
    </button>
  );
};
