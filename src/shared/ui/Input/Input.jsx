import { clsx } from "clsx";
import { forwardRef } from "react";

import styles from "./Input.module.scss";

export const Input = forwardRef(({ Icon, className, ...props }, ref) => {
  console.log(className);

  return (
    <label className={styles.inputWrapper}>
      {Icon}
      <input className={clsx(className, styles.input)} ref={ref} {...props} />
    </label>
  );
});

Input.displayName = "Input";
