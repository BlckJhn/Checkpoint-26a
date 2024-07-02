import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetail from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/8hP9D6kZseM'
    },
    {
      title: 'Breaking Bad',
      description: 'Walter White, a struggling, frustrated high school chemistry teacher who becomes a crime-lord in the local methamphetamine drug trade, driven to provide for his family financially after being diagnosed with inoperable lung cancer.',
      posterURL: 'https://theactionhospital.com/wp-content/uploads/2013/10/breaking-bad-background-hd-wallpaper.png',
      rating: 4.5,
      trailer: 'https://www.youtube.com/embed/HhesaQXLuRY'
    },
    {
      title: 'The Nun',
      description: 'When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the orders unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.',
      posterURL: 'https://m.media-amazon.com/images/S/pv-target-images/eddfebfc5068a29e45ecd41a196279289f2c3a5f77a7e078c8cb3e48f72e5d4b.jpg',
      rating: 4.5,
      trailer: 'https://www.youtube.com/embed/pzD9zGcUNrw'
    },
    {
      title: 'Gotham',
      description: 'Years before the first appearance of the Batman, GCPD lieutenant Jim Gordon takes up an impossible task: cleaning up the most morally bankrupt city on earth. As Gordon fights against corruption, criminals and lunatics, Bruce Wayne prepares for his journey to become the most feared vigilante this city has ever seen.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMmUyOTdjMGEtN2RmNC00YzUwLTg5ZDEtMTI1NWE4ZjcwN2ViXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg',
      rating: 4.5,
      trailer: 'https://www.youtube.com/embed/0d1zpt6k5OI'
    },
    {
      title: 'The Lincoln Lawyer',
      description: 'Mick Haller (Matthew McConaughey) is a charismatic defense attorney who does business out of his Lincoln Continental sedan. Mick spends most of his time defending petty crooks and other bottom-feeders, so it comes as quite a surprise when he lands the case of a lifetime: defending a Beverly Hills playboy (Ryan Phillippe) who is accused of attempted murder. However, what Mick initially thinks is an open-and-shut case with a big monetary reward develops into something more.',
      posterURL: 'https://resizing.flixster.com/Ok4FBAuxpxjTjeXs54LyErNJ9qs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZWU1ZGFjN2QtYjc0Ny00MjE4LWI3ODgtMzgxMWE0ZDc1Y2MwLmpwZw==',
      rating: 4.5,
      trailer: 'https://www.youtube.com/embed/6yEgcb167k4'
    },
    {
      title: 'The Mandalorian',
      description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic. After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.5,
      trailer: 'https://www.youtube.com/embed/aOC8E8z_ifw'
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (movie) => {
    const newMovies = [...movies, movie];
    setMovies(newMovies);
    setFilteredMovies(newMovies);
  };

  const filterMovies = (name, value) => {
    const filtered = movies.filter(movie => movie[name].toString().toLowerCase().includes(value.toLowerCase()));
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>React-Router Secret Library</h1>
          <Filter onFilter={filterMovies} />
          <Routes>
            <Route path="/" element={
              <>
                <MovieList movies={filteredMovies} />
                <AddMovie onAdd={addMovie} />
              </>
            } />
            <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
