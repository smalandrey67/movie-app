import { forwardRef } from "react";

import { RxMagnifyingGlass } from "react-icons/rx";

import styles from "./Input.module.scss";

export const Input = forwardRef(({ value, placeholder, ...props }, ref) => {
  return (
    <div className={styles.inputWrapper}>
      <RxMagnifyingGlass className={styles.inputLoupe} />
      <input className={styles.input} ref={ref} value={value} placeholder={placeholder} {...props} />
    </div>
  );
});

Input.displayName = "Input";
