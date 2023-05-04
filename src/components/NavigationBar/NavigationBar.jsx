import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='warning' variant='light'>
                <Container className='py-3 '>
                    <Link className='text-black fst-italic text-decoration-none fw-bold fs-5' to="/">The Continental Kitchen</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Link className='me-4 text-secondary text-decoration-none fw-semibold' to="/chef">Home</Link>
                            <Link className='me-4 text-secondary text-decoration-none fw-semibold' to="/blog">Blogs</Link>
                            {user ? <Link className='text-secondary text-decoration-none fw-semibold' to="">Log Out</Link>
                                : <>
                                    <Link className='me-4 text-secondary text-decoration-none fw-semibold' to="/login">Login</Link>
                                    <Link className='text-secondary text-decoration-none fw-semibold' to="/register">Register</Link>
                                </>
                            }

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