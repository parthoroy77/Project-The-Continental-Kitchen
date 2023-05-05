import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Link, NavLink, useMatch } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Modal } from 'react-bootstrap';
import { FaRegUserCircle, FaUser, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const NavigationBar = () => {
    const { user, logOut, profileUpdate } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    //Log out function
    const handleLogOut = () => {
        logOut().then(result => {
            //toast
            toast.success('Logout successfully')
        })
            .catch(error => {

            })
    }
    // Profile update function
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleUrlChange = e => {
        setUrl(e.target.value)
    }
    const handleSubmit = () => {
        profileUpdate(name, url).then(result => toast.success('Update successfully')).catch(error => { })
    }
    // modal function
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='warning' variant='light'>
                <Container className='py-3 '>
                    <Link className='text-black fst-italic text-decoration-none fw-bold fs-5' to="/">The Continental Kitchen</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/chef">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blog">Blogs</NavLink>
                            {user ?
                                <>
                                    <Button variant='secondary' className='text-light text-decoration-none fw-semibold' onClick={handleLogOut} >LogOut</Button>
                                    <img src={user.photoURL} title={user.displayName} className='user-img ms-2' alt="" onClick={handleShowModal} />
                                </>
                                : <>
                                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/login">Login</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/register">Register</NavLink>
                                </>
                            }
                        </Nav>
                        <Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Add the Modal component */}
            {
                user && <Modal className='' show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-primary fw-bold'>{user?.displayName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='px-5 text-center'>
                        <div className='d-flex mb-4 align-items-center'>
                            <h6 className='text-center'>Current Email: {user.email ? user.email : 'User Email is Private'}</h6>
                            <img src={user?.photoURL} alt="" className=" ms-auto"
                                style={{ borderRadius: '50%', height: '70px', width: '70px' }} />
                        </div>
                        <div className='mb-3'>
                            <div className='mb-2'>
                                <span>Update Your Name?</span>
                                <input onChange={handleNameChange} type="text" placeholder='Enter New Name' required className='w-100 mt-2 ps-2 mx-auto border rounded' style={{ height: '40px' }} name="name" id="" />
                            </div>
                            <div>
                                <span>Update Your Profile Picture?</span>
                                <input onChange={handleUrlChange} type="text" placeholder='Enter New Photo Url' required className='w-100 mt-2  ps-2 mx-auto border rounded' style={{ height: '40px' }} name="photo" id="" />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='btn w-75 mx-auto btn-outline-secondary'>Submit</button>
                    </Modal.Body>
                </Modal>
            }
        </div>
    );
};

export default NavigationBar;
