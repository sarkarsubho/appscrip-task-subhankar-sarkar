import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.spinner}>
      <div>
        <div className={styles.loader}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    </div>
  );
}
