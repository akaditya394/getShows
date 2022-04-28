import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { list } from "../../pages/Home/Home";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import styles from "./Detail.module.css";

function Detail() {
  //   const [list, setList] = useState([]);

  //   const fetchShows = useCallback(async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.tvmaze.com/search/shows?q=all#"
  //       );
  //       const data = await response.json();
  //       setList(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     fetchShows();
  //   }, [fetchShows]);

  const { position } = useParams();
  let x = list[position].show.summary;

  return (
    <>
      <Header />
      <div className={styles.main}>
        <ShowDetails
          name={list[position].show.name}
          imgUrl={list[position].show.image.original}
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
