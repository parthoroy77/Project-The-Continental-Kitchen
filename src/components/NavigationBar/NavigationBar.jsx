import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
                <Container className='py-2'>
                    <Link className='text-primary text-decoration-none fw-bold fs-4' to="/">The Continental Kitchen</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Link className='me-3 text-decoration-none fw-semibold' to="/">Home</Link>
                            <Link className='me-3 text-decoration-none fw-semibold' to="/blog">Blogs</Link>
                            <Link className='me-3 text-decoration-none fw-semibold' to="/login">Login</Link>
                            <Link className='me-3 text-decoration-none fw-semibold' to="/register">Register</Link>
                        </Nav>
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;