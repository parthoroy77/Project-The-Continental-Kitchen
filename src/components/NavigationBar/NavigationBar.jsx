import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Button } from 'react-bootstrap';
import { FaRegUserCircle, FaUser, FaUserCircle } from 'react-icons/fa';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(result => {
            //toast
        })
            .catch(error => {
            
        })
    }
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
                            {user ?
                                <Button variant='secondary' className='text-light text-decoration-none fw-semibold' onClick={handleLogOut} >LogOut</Button>
                                : <>
                                    <Link className='me-4 text-secondary text-decoration-none fw-semibold' to="/login">Login</Link>
                                    <Link className='text-secondary text-decoration-none fw-semibold' to="/register">Register</Link>
                                </>
                            }
                            {
                                user && <img src={user.photoURL} title={user.displayName} className='user-img ms-2' alt="" />
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