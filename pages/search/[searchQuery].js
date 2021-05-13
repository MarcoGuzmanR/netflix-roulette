import React from 'react';
import styles from './search.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MovieItem from '../components/movieItem/item';
import MoviesService from '../services/movies';

function MovieGrid() {
  const router = useRouter();
  const { searchQuery } = router.query;

  const [movies, setMovies] = React.useState([]);

  React.useEffect(async () => {
    if (searchQuery) {
      const response  = await MoviesService.searchMovies(searchQuery);
    
      setMovies(response.data);
    }
  }, [searchQuery]);

  return (
    <React.Fragment>
      { movies.length ?
        (
          <div className={styles['movie-grid-content']}>
            {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className={styles['movies-not-found']}>
            <h1>No movie found</h1>
            <Link href="/">
              <button type="button" className="btn-confirm">GO BACK TO SEARCH</button>
            </Link>
          </div>
        )
      }
    </React.Fragment>
  );
};

export default MovieGrid;