import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

export function MyVerticallyCenteredModal(props) { // Modal component for adding a new movie
  const setMovies = props.setMovies;
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [shape, setShape] = useState("");
  const createMovie = () => {
    const newMovie = {
      title,
      genre,
      rating,
      synopsis,
      Image: shape,
    };
    fetch("http://localhost:3001/movies", { // POST request to add a new movie
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then(() => { // Refresh movie list after adding
      fetch("http://localhost:3001/movies")
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .catch((err) => console.error("Error fetching movies:", err));
    });
  };
  return ( // JSX for the modal
    <Modal {...props} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        


  
    <ListGroup> 
      <ListGroup.Item variant="primary"> 
        <p>Title: </p>
        <input
            type="text"
            id="title"
            value={title}
            onChange={(text) => setTitle(text.target.value)}
          />
      </ListGroup.Item>
      <ListGroup.Item variant="success">
        <p>Genre: </p>
        <input
            type="text"
            id="genre"
            value={genre}
            onChange={(text) => setGenre(text.target.value)}
          />
      </ListGroup.Item>
      <ListGroup.Item variant="dark">
        <p>Rating: </p>
        <input
            type="text"
            id="rating"
            value={rating}
            onChange={(text) => setRating(text.target.value)}
          />
      </ListGroup.Item>
      <ListGroup.Item variant="danger">
        <p>Synopsis: </p>
        <input
            type="text"
            id="synopsis"
            value={synopsis}
            onChange={(text) => setSynopsis(text.target.value)}
          />
      </ListGroup.Item>
      <ListGroup.Item variant="info">
        <p>Image URL: </p>
        <input
            type="text"
            id="shape"
            value={shape}
            onChange={(text) => setShape(text.target.value)}
          />
      </ListGroup.Item>
      <Button onClick={createMovie} variant="primary">Add Movie</Button>
    </ListGroup>
   



        
          
          
          
          
          
          
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
} // End of Modal component

function Lala(props) { // Component to trigger the modal
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Movie
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setMovies={props.setMovies}
      />
    </>
  );
} // End of Lala component

export default Lala; // Export Lala component as default
