import { IoIosMore } from "react-icons/io";

import styles from "./button-more.module.scss";

export function ButtonMore({ ...props }) {
  return (
    <button className={styles.buttonMore} {...props}>
      <IoIosMore color="#ffffff" size={20} />
    </button>
  );
}
