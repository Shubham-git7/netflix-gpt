import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <iframe
        className=" top-0 left-0 w-full h-full transform scale-125"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&vq=hd1080`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ zIndex: 1 }}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
