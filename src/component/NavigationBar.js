import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>ALFILM</Navbar.Brand>
          <Nav>
            <Nav.Link>TRENDING</Nav.Link>
            <Nav.Link>SUPER HERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
