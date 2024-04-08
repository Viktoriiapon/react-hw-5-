import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { searchMoviesDetailsById } from "../../components/services/api";
import { lazy, useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await searchMoviesDetailsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const genres =
    movieDetails.genres &&
    movieDetails.genres.map((genre) => genre.name).join(", ");
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      <Link to={backLinkRef.current}>← Go back</Link>
      {loading && <Loader />}
      <div className={css.mainContainer}>
        <div className={css.detailContainer}>
          <img
            className={css.img}
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
                : defaultImg
            }
            alt=""
            width={300}
            height={450}
          />
          <div className={css.movieDetails}>
            <h2 className={css.original_title}>{movieDetails.original_title}</h2>
            <p className={css.genres}>Genres: {genres}</p>
            <p className={css.overview}>{movieDetails.overview}</p>
            <p className={css.budget}>Budget: {movieDetails.budget}$</p>
            <p className={css.runtime}> Runtime: {movieDetails.runtime}min</p>
            <p className={css.release_date}>
            Release date: {movieDetails.release_date}
            </p>
          </div>
        </div>
        <Link className={css.btnCastRev} to="cast">
          Cast
        </Link>
        <Link className={css.btnCastRev} to="reviews">
          Reviews
        </Link>
        <Outlet />
        {error && <ErrorMessage />}
      </div>
    </div>
  );
};

export default MovieDetailsPage;