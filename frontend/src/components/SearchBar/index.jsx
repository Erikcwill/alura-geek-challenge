import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="O que deseja encontrar?"
        id="searchInput"
      ></input>
      <button
        className={styles.iconButton}
      ></button>
    </div>
  );
}
