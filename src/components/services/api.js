import axios from "axios";
const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzc4NDI4MzgwNGM4NmIyN2UzZTI4YmZhNmZmNzQ0YiIsInN1YiI6IjY2MGZmY2NjNWY0YjczMDE0YWQ1MDA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ON_kW_WmnPlW92HTA4I58GhzqD2yrtzQ-RnQVN9w0k'
  }
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
  return data;
};

export const searchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  return data;
};

export const searchMoviesDetailsById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US'`,
    options
  );
  return data;
};

export const searchMoviesCreditsById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return data;
};

export const searchMoviesRevById = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};




