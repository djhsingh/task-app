import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/" className='navbar-brand'>Pesto Task Application</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='navbar-brand'>Home</Link>
          </Nav>
          <Nav className="float-right">
            <Link to="/task/0" className='navbar-brand btn btn-warning'>New Task</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;