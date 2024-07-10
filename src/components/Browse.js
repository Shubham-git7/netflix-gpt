
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlyingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
  return (

    <div>
      <Header />
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browse