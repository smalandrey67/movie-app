import { Input } from "@ui/Input/Input";

import { IoIosSearch } from "react-icons/io";

import styles from "./search.module.scss";

export function Search() {
  return (
    <div className={styles.search}>
      <Input Icon={<IoIosSearch color="white" />} placeholder="search film" />
    </div>
  );
}
