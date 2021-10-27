import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png'
const Header = () => {
    return (
        <div className="App">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light" bg='light' >
                <Container >
                    <Navbar.Brand as={Link} to='/home'><img style={{ width: '160px' }} src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to=''>Donation</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to=''>Event</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to=''   >Blog</Nav.Link>
                        <Nav.Link className="ms-4 bg-primary text-white rounded" as={Link} to=''   >Register</Nav.Link>
                        <Nav.Link className="ms-4 bg-dark text-white rounded" as={Link} to=''  >Admin</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;