import styles from "./navigation-option.module.scss";

export function NavigationOption({ option }) {
  return (
    <a className={styles.navigationOption} href={option.href}>
      {option.label}
    </a>
  );
}
