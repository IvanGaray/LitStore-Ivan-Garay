import "./NavBar.css";
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../assets/logos.png'
import CartWidget from '../components/CartWidget/CartWidget'

const navBar = () => {
    return (

        <div>


<Navbar bg="dark" variant="dark">
    <Container>
    <img
        src={logo}
        width="60"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand href="#home">LitStore</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


        </div>
    )
}

export default navBar
