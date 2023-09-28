import ResponsiveButton from "../ResponsiveButton";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.content}>
        <h1>Dezembro Promocional</h1>
        <p>Produtos selecionados com 33% de desconto</p>
        <a>
          <ResponsiveButton className={styles.bannerButton}>
            {" "}
            Ver Consoles{" "}
          </ResponsiveButton>
        </a>
      </div>
    </div>
  );
}
