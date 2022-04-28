import React from "react";
import { Link } from "react-router-dom";
import styles from "./Show.module.css";

import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
        <div className={styles.status}>
          <b>Currently :</b> {props.status}
        </div>
        <div className={styles.genre}>
          {props.genre.map((item) => {
            return <span> {item}</span>;
          })}
        </div>
        <div className={styles.footer}>
          <div>{props.language}</div>
          <div>Rating : {props.rating ? props.rating : <p>N/A</p>}</div>
          <div>{props.network}</div>
          <div>
            <Link to={`/details/${props.index}`}>
              <Button>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
