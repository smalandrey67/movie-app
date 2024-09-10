import styles from "./navigation.module.scss";

export function Navigation({ options, onOptionRender }) {
  return <nav className={styles.nav}>{options.map(onOptionRender)}</nav>;
}
