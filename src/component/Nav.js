import React from "react";
import request from "../ApiCalls/request";
import "./Nav.css";
export const Nav = ({ setselectedOption }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setselectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setselectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchActionMovie)}>
        Action
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchComedyMovie)}>
        Comedy
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchHorrorMovie)}>
        Horror
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchRomanticMovie)}>
        Romance
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchMystryMovie)}>
        Mystery
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchScifiMovie)}>Sci-fi</h2>
      <h2 onClick={() => setselectedOption(request.fetchWesterMovie)}>
        Western
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchAnimationMovie)}>
        Animation
      </h2>
      <h2 onClick={() => setselectedOption(request.fetchTvShow)}>Tv shows</h2>
    </div>
  );
};
