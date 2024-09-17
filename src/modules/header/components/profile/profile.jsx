import { MdFace3 } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./profile.module.scss";

export function Profile() {
  return (
    <div className={styles.profile}>
      <MdFace3 />
      <div className={styles.profileInfo}>
        <p className={styles.profileInfoName}>Anna Petrova</p>
        <p className={styles.profileInfoEmail}>anna@gmail.com</p>
      </div>
      <IoIosArrowDown />
    </div>
  );
}
