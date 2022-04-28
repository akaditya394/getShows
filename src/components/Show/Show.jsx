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
        <div className={styles.name}>
          <h1>{props.name}</h1>
        </div>
        <div className={styles.status}>{props.status}</div>
        <div className={styles.genre}>{props.genre}</div>
        <div className={styles.footer}>
          <div>{props.language}</div>
          <div>Rating : {props.rating ? props.rating : <p>N/A</p>}</div>
          <div>{props.network}</div>
          <div>
            <Button>Open</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
