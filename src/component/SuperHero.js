import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spideramanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <h1 class="text-white">SUPERHERO MOVIE</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={antmanImage} alt="Card image" className="images" />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={avengerImage} alt="Card image" className="images" />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image
                src={batmanImage}
                alt="Card image"
                clas
                className="images"
              />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={robinhoodImage} alt="Card image" className="images" />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image
                src={spideramanImage}
                alt="Card image"
                className="images"
              />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={supermanImage} alt="Card image" className="images" />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
