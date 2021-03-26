import React from 'react';
import './app.css';
import './buttons.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MovieAdd from './components/movieAdd/add';
import MovieSearch from './components/movieSearch/search';
import MovieDetails from './components/movieDetails/details';
import MovieFilter from './components/movieFilter/categoryFilter';
import MovieSort from './components/movieSort/sortList';
import MovieGrid from './components/movieGrid/grid';
import NotFound from './components/movieNotFound/notFound';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import ErrorFallback from './components/errorBoundary/errorFallback';
import { connect } from 'react-redux';
import MoviesService from './services/movies';
import { loadMovies as loadMoviesAction } from './state/actions/movies';

function App({ showSearch, loadMovies }) {
  React.useEffect(async () => {
    const response = await MoviesService.loadMovies();

    if (response.data) {
      loadMovies(response.data);
    }
  }, []);

  return (
    <React.Fragment>
      <Router>
        <div className="netflix-roulette-content">
          <Switch>
            <Route exact path="/">
              { showSearch ?
                (
                  <>
                    <MovieAdd />
                    <MovieSearch />
                  </>
                ) : <MovieDetails />
              }

              <div className="movie-main-content">
                <div className="main-content--header">
                  <MovieFilter />
                  <MovieSort />
                </div>

                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <MovieGrid />
                </ErrorBoundary>
              </div>
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  const { showSearch } = state.searchToggleState;

  return { showSearch };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: (movies) => {
      dispatch(loadMoviesAction(movies));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);