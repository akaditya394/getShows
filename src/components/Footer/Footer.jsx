import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}><h1>getShows</h1></div>
      <div className={styles.contact}>
        <div>Instagram</div>
        <div>Twitter</div>
        <div>Facebook</div>
      </div>

      <div>© getShows 2022</div>
    </div>
  );
}

export default Footer;
