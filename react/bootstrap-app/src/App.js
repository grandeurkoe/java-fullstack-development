import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Rounded from './Images/rounded.svg';
import RoundedCircle from './Images/roundedCircle.svg';
import CardImage from './Images/cardImage.svg?text=Image cap'
import Thumbnail from './Images/thumbnail.svg';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="App">
      <h1>Bootstrap App</h1>
      <hr />
      <h2>Buttons</h2>
      <div class="myButtons">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <hr />
      <h2>Images</h2>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Rounded} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={RoundedCircle} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Thumbnail} thumbnail />
        </Col>
      </Row>
     </Container>
     <hr />
     <h2>Table</h2>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <h2>Cards</h2>
      <div class="myCards">
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={CardImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
