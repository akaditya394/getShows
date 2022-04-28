import React from "react";
import styles from "./Button.module.css";


function Button(props) {
  return (
    <div className={styles.main}>
      <button className={styles.btn}>{props.children}</button>
    </div>
  );
}

export default Button;
