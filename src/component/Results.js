import React, { useEffect, useState } from "react";
import "./Results.css";
import { VideoCard } from "./VideoCard";
import axios from "../ApiCalls/axios";
import request from "../ApiCalls/request";

export const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      console.log(response);
    }

    fetchData();
  }, [selectedOption]);
  //   selectedOption is getting paased from different component and this whole page data depends on this

  return (
    <div className="results">
      {movies?.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
