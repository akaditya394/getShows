import React, { useEffect } from "react";
import styles from "./ShowDetails.module.css";
import { list } from "../../pages/Home/Home";
import { useParams } from "react-router-dom";

function ShowDetails(props) {
  const { position } = useParams();

  useEffect(() => {
    document.getElementsByClassName(styles.summary)[0].innerHTML =
      list[position].show.summary;
  }, [position]);

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img className={styles.img} src={props.imgUrl} alt="" />
      </div>
      <div className={styles.name}>
        <h1>{props.name}</h1>
      </div>
      <div className={styles.details}>
        <div>
          <b>Language : </b>
          {props.language}
        </div>
        <div>
          <b>Premiered : </b>
          {props.premiered}
        </div>
        <div>
          <b>Runtime : </b>
          {props.runtime}mins
        </div>
        <div>
          <b>Type : </b>
          {props.type}
        </div>
      </div>
      <div id="summary" className={styles.summary}></div>
    </div>
  );
}

export default ShowDetails;
