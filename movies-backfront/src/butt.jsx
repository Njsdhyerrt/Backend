import Card from "react-bootstrap/Card";



function MovieCard(props) {
  return (
    <Card className="mb-2 mx-1 textcenter" border="border border-5 danger"  style={{ width: '20rem' }} bg="danger" text="white" >
      <Card.Img src={props.Image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>Genre: {props.genre}</Card.Subtitle>
        <Card.Subtitle>Rating: {props.rating}</Card.Subtitle>
        <Card.Text>{props.synopsis}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
