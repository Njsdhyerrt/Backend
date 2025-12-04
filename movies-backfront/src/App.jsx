import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { MyVerticallyCenteredModal } from "./hide";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./butt";
import { CardGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function App() {
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const response = setTimeout(100);
    response;
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <>
      <header>
        <h1
          style={{
            textAlign: "center", color: "white",
          }}
        >
          Movies for Today Screening
        </h1>
      </header>

      <Button variant="dark" onClick={() => setModalShow(true)}>
        Add Movie
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setMovies={setMovies}
      />

      <div className="main-layout" >
        <main>
          <CardGroup className="textcenter">
            <Row md={3}>
              {movies.map((movie) => (
                <MovieCard
                  title={movie.title}
                  genre={movie.genre}
                  rating={movie.rating}
                  Image={movie.Image}
                  synopsis={movie.synopsis}
                />
              ))}
            </Row>
          </CardGroup>
        </main>
      </div>

      <footer>
        <p>Movies.</p>
      </footer>
    </>
  );
}

export default App;
