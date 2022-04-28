import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import Show from "../../components/Show/Show";

import styles from "./Home.module.css";

var list = [];

function Home() {
  const [shows, setShows] = useState([]);

  const fetchShows = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=all#"
      );
      const data = await response.json();
      setShows(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  list = shows;
  console.log(list);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.showList}>
        {shows.map((item, index) => {
          return (
            <Show
              key={index}
              index={index}
              imgUrl={item.show.image.medium}
              name={item.show.name}
              genre={item.show.genres}
              rating={item.show.rating.average}
              runtime={item.show.runtime}
              status={item.show.status}
              network={item.show.premiered}
              language={item.show.language}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
export {list};
