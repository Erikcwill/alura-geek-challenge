import styles from "./SearchBar.module.css";
import iconSearch from "./iconSearch.svg";

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="O que deseja encontrar?"
        id="searchInput"
      ></input>
      <button className={styles.searchButton}>
        <img src={iconSearch} alt="Ícone de Lupa" />
      </button>
    </div>
  );
}
