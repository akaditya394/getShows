import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.logo}>getShows</h1>
      </div>
      <div className={styles.navlink}>Discover</div>
      <div className={styles.navlink}>About</div>
      <div className={styles.navlink}>Contact Us</div>
    </div>
  );
}

export default Header;
