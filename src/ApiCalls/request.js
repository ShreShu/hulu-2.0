const API_KEY = "<API_KEY>";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,

  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,

  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,

  fetchRomanticMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,

  fetchMystryMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,

  fetchScifiMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,

  fetchWesterMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,

  fetchAnimationMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,

  fetchTvShow: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
};

export default request;
