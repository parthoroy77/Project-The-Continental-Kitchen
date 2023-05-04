import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-light py-5 px-4'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h5>About Us</h5>
                        <p className='text-secondary fw-bold'>
                            <small>We take pride in sharing our love of food with our customers and strive to create memorable dining experiences that leave a lasting impression.</small>
                        </p>
                    </Col>
                    <Col md={2}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link className='text-decoration-none' to="#">Home</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to="#">About Us</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to="#">Services</Link>
                            </li>
                            <li>
                                <Link className='text-decoration-none' to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-map-marker"></i> 1234 Main Street, Suite 200
                            </li>
                            <li>
                                <i className="fa fa-phone"></i> (123) 456-7890
                            </li>
                            <li>
                                <i className="fa fa-envelope"></i>{" "}
                                <a className='text-decoration-none' to="mailto:info@company.com">info@company.com</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <div>
                            <h5>Subscribe Now</h5>
                            <input type="email" className='w-75 rounded' style={{height: '40px'}} name="email" id="" />
                            <button className='btn btn-warning w-75 my-2'>Subscribe</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <p className="text-center">
                            © {new Date().getFullYear()} Company Name. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;