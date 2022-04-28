import React from "react";
import styles from "./Show.module.css";

import Button from "../Button/Button";

function Show(props) {
  return (
    <div className={styles.main}>
      <div className={styles.showImg}>
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className={styles.showGlimpse}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.genre}>{props.genre}</div>
        <div className={styles.footer}>
          <div>{props.rating}</div>
          <div>{props.network}</div>
          <div>{props.runtime}</div>
          <div>
            <Button>Open</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
