import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import CustomButton from "../CustomButton";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo da AluraGeek" className={styles} />
      </Link>
      <SearchBar />
      <div className={styles.containerButton}>
        <CustomButton isLogin={true}> Login </CustomButton>
      </div>
    </header>
  );
}
