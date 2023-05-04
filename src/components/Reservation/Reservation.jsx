import React from 'react';
import icon from '../../assets/icon/icon2.png'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import booking from '../../assets/banner/booking.jpg';
import Form from 'react-bootstrap/Form';
import './Reservation.css';
const Reservation = () => {
    return (
        <Container className='my-5'>
            <div className='text-center'>
                <h3 className=' fw-bold'>Reserve Your Table</h3>
                <img src={icon} width={60} alt="" />
                <hr />
            </div>
            <div className='booking-container' id='reserve'>
                <Form className='px-5 bg-dark text-light py-5 rounded shadow'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Number Of Guests</Form.Label>
                        <Form.Control type="number" placeholder="Number of Guests" />
                    </Form.Group>
                    <Button variant="warning" className='w-100' >
                        Submit
                    </Button>
                </Form>
                <div>
                    <img src={booking} className='w-100 rounded' height={500} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Reservation;