import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addPopularmovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=500", API_OPTIONS); // Fetch from the last page (e.g., page 500)
      const json = await data.json();
      dispatch(addPopularmovies(json.results));
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return null; // Or return some component if needed
};

export default usePopularMovies;
