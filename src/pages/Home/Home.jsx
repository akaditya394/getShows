import React from "react";
import Header from "../../components/Header/Header";
import Show from "../../components/Show/Show";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.showList}>
        <Show
          imgUrl=""
          name="Name"
          genre="Genre"
          rating="5.4"
          network="Channel"
          runtime="60"
        />
        <Show />
        <Show />
        <Show />
      </div>
    </div>
  );
}

export default Home;
