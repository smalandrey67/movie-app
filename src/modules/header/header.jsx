import { Search } from "./components/search/search";
import { Profile } from "./components/profile/profile";
import { Navigation } from "./components/navigation/navigation";
import { NavigationOption } from "./components/navigation-option/navigation-option";

import { NAVBAR_OPTIONS } from "./header.configuration";

import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Search />
      <Navigation options={NAVBAR_OPTIONS} onOptionRender={(option) => <NavigationOption key={option.href} option={option} />} />
      <Profile />
    </header>
  );
}
