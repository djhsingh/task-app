import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" className='fixed-bottom'>
        <Container>
           <h5 className='text-white'>CopyRight Pesto @2024</h5>
           <p className='text-white'>All rights reserved</p>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;