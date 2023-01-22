import "./App.css";
import OpenMap from "./Map";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <div className="mb-2">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Map me 😀</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="row m-1">
      <OpenMap />
      </div>
    </div>
  );
}

export default App;
