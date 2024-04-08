import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMoviesByQuery } from "../../components/services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import SearchForm from "../../components/SearchForm/SearchForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    setError(false);
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const data = await searchMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);
  const onSearchQuery = (userQuery) => {
    setSearchParams({ query: userQuery });
  };

  return (
    <div>
      <SearchForm onSearchQuery={onSearchQuery} />
      <MovieList movies={movies} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </div>
  );
};

export default MoviesPage;