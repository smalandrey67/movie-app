import { Input } from "@ui/Input/Input";
import { Navigation } from "./components/navigation/navigation";
import { Profile } from "./components/profile/profile";

import { IoIosSearch } from "react-icons/io";

import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInput}>
        <Input Icon={<IoIosSearch />} />
      </div>
      <Navigation />
      <Profile />
    </header>
  );
}
