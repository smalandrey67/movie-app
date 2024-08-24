import { RxMagnifyingGlass } from "react-icons/rx";

import styles from "./Input.module.scss";

export const Input = ({ value }) => {
  return (
    <div className={styles.inputWrapper}>
      <RxMagnifyingGlass className={styles.inputLoupe} />
      <input className={styles.input} value={value} placeholder="Search movies" />
    </div>
  );
};
