import styles from "./layout.module.scss";

export function Layout({ Header, Trailer, Banner, LastWatching, Popular }) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {Header}
        <main>
          <div className={styles.wrapper}>
            {Trailer}
            {Banner}
            {LastWatching}
            {Popular}
          </div>
        </main>
      </div>
    </div>
  );
}
