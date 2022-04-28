import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.logo}>getShows</h1>
      </div>

      <div className={styles.navlink}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.navlink}>About</div>
      <div className={styles.navlink}>Contact Us</div>
    </div>
  );
}

export default Header;
