import express from 'express';
import cors from 'cors';


const app = express();
const port = 3001;

const movies = [
  {
    id: 1,
    title: 'Star Wars: Episode IV - A New Hope',
    synopsis: 'A long time ago in a galaxy far, far away...',
    rating: 5,
    genre: 'Sci-Fi, Adventure'
  },
  {
    id: 2,
    title: 'The Godfather',
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 5,
    genre: 'Crime, Drama'
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 4,
    genre: 'Crime, Drama'
  },
];
app.use(express.json());
app.use(cors());

// In-memory storage
let nextId = movies.length + 1;

// GET all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// GET a movie by ID
app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.json(movie);
});

// POST create a new movie
app.post('/movies', (req, res) => {
  const { title, genre, rating, synopsis } = req.body;
  const movie = {
    title,
    genre,
    rating,
    synopsis,
    id: nextId++
  };
  if (!title || !genre || !rating || !synopsis || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  movies.push(movie);
  res.status(201).json(movie);
});

// PUT update a movie
app.put('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: 'Movie not found' });

  const { title, genre, rating, synopsis } = req.body;

  if (!title || !genre || !rating || !synopsis || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  movie.title = title;
  movie.genre = genre;
  movie.rating = rating;
  movie.synopsis = synopsis;

  res.json(movie);
});

// DELETE a movie
app.delete('/movies/:id', (req, res) => {
  const index = movies.findIndex(m => m.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Movie not found' });

  const deleted = movies.splice(index, 1);
  res.json(deleted[0]);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Movie API!');
});

// Start server
app.listen(port, () => {
  console.log(`Movie API running at http://localhost:${port}/movies`);
});
