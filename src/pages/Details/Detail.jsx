import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { list } from "../../pages/Home/Home";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import styles from "./Detail.module.css";

function Detail() {
  const { position } = useParams();

  return (
    <>
      <Header />
      <div className={styles.main}>
        <ShowDetails
          name={list[position].show.name}
          imgUrl={list[position].show.image.medium}
          language={list[position].show.language}
          premiered={list[position].show.premiered}
          runtime={list[position].show.runtime}
          type={list[position].show.type}
          summary={list[position].show.summary}
        />
        <p>{list[position].show.name}</p>
      </div>
    </>
  );
}

export default Detail;
