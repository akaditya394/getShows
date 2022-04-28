import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

function Detail() {
  const [list, setList] = useState([]);

  const fetchShows = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=all#"
      );
      const data = await response.json();
      setList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  const { position } = useParams();
  console.log(position);

  return (
    <div>
      <Header />
      <p>{list[position].show.name}</p>
    </div>
  );
}

export default Detail;
