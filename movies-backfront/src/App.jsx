

import './App.css'
import './index.css'
import { useState, useEffect } from 'react'


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = setTimeout(100)
    response
    fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  return (
    <>
      <header>
        <h1>Movies for Today Screening</h1>
      </header>

      
        <div className="main-layout">
          <main>
            <div className="movie-row">
              {movies.map(movie => (
                <div key={movie.id} className="movie-card">
                  <div className="movie-cover"></div>
                  <h2>{movie.title}</h2>
                  <p><strong>Genre:</strong> {movie.genre}</p>
                  <p><strong>Rating:</strong> {movie.rating}</p>
                  <p>{movie.synopsis}</p>
                </div>
              ))}
            </div>
          </main>
        </div>


      <footer>
        <p>Movies.</p>
      </footer>
    </>
  );
}

export default App;