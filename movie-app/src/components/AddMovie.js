import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating && trailerUrl) {
      onAdd({ title, description, posterURL,trailerUrl, rating: parseFloat(rating) });
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
      setTrailerUrl(''); 
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleAddMovie} className="add-movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        step="0.1"
        min="0"
        max="5"
      />
      <input
        type="text"
        placeholder="Trailer URL"
        value={trailerUrl}
        onChange={(e) => setTrailerUrl(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
