import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);
  const navigate = useNavigate();

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetail;
