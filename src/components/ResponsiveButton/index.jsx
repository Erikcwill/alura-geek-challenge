import styles from "./ResponsiveButton.module.css";

export default function ResponsiveButton({ type, className, children }) {
  return (
    <button className={`${styles[type]} ${styles.resposiveButton} ${className}`}>
      {children}
    </button>
  );
}
