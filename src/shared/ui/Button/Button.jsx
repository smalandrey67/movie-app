import { clsx } from "clsx";

import styles from "./Button.module.scss";

export const Button = ({ children, variation = "action", className, ...props }) => {
  return (
    <button
      className={clsx(className, styles.button, {
        [styles.buttonPlayback]: variation === "playback",
        [styles.buttonAction]: variation === "action"
      })}
      {...props}
    >
      {children}
    </button>
  );
};
