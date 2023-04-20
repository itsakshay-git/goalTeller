import React from "react";
import styles from './Search.module.scss'

const Search = ({handleChange, searchInput}) => {

  return (
    <div className={styles.search}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
    </div>
  );
};

export default Search;
