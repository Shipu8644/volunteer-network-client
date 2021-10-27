import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png'
const Header = () => {
    return (
        <div className="App">
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="light" bg='light' >
                <Container >
                    <Navbar.Brand as={Link} to='/home'><img style={{ width: '140px' }} src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=" justify-content-end" >
                        <Nav >
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className="ms-4" as={Link} to=''>Donation</Nav.Link>
                            <Nav.Link className="ms-4" as={Link} to=''>Event</Nav.Link>
                            <Nav.Link className="ms-4" as={Link}
                                to='/login'   >Login</Nav.Link>
                            <Nav.Link className="ms-4 bg-primary text-white rounded" as={Link} to='/register'   >Register</Nav.Link>
                            <Nav.Link className="ms-4 bg-dark text-white rounded" as={Link} to=''  >Admin</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;