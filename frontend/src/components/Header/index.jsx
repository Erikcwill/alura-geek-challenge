import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import SearchBar from "../SearchBar";
import ResponsiveButton from "../ResponsiveButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo da AluraGeek" className={styles.logo} />
      </Link>
      <SearchBar />
      <div className={styles.containerButton}>
        <ResponsiveButton type="whiteButton" className={styles.headerButton}>Login</ResponsiveButton>
      </div>
    </header>
  );
}
