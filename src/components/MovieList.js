import React from 'react';
import MoviCard from './MoviCard';

const MovieList = ({ title, movies }) => {
    console.log(movies);


    return (

        <div className='px-6 bg-transparent text-white'>
            <h1 className=' text-3xl  font-bold py-4'>{title}</h1>
            <div className='overflow-x-scroll flex'>
                <div className='flex gap-4'>
                    {movies?.map(movie => (
                        <MoviCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
