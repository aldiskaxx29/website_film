import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everyThing from "../assets/images/trending/everything.jpg";
import infinite from "../assets/images/trending/infinite.jpg";
import joker from "../assets/images/trending/joker.jpg";
import lightyear from "../assets/images/trending/lightyear.jpg";
import morbius from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <h1 class="text-white">TRENDING MOVIE</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={duneImage} alt="Card image" className="images" />
              <div className="text-white p-2">
                <Card.Title className="text-center">Dune</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button className="btn btn-secondary">Show</Button>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={everyThing} alt="Card image" className="images" />
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
              <Image src={infinite} alt="Card image" clas className="images" />
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
              <Image src={joker} alt="Card image" className="images" />
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
              <Image src={lightyear} alt="Card image" className="images" />
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
              <Image src={morbius} alt="Card image" className="images" />
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

export default Trending;
