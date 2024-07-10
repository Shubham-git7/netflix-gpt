import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
   <div className='bg-black'>
       <div className='-mt-60 bg-transparent pl-6 z-20 relative'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Populer"} movies={movies.Popularmovies} />
        <MovieList title={"Trainding"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Populer"} movies={movies.Popularmovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
   </div>
      )
  );
};

export default SecondaryContainer