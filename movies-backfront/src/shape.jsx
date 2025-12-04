
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function ShapeExample(props) {
  return (
    <Container>
      
          <Image src={props.img} thumbnail width={100}  />
          
        
    </Container>
  );
}

export default ShapeExample;