import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../../providers/AuthProvider';
const Register = () => {
    const [error, setError] = useState('')
    const { user, createUser } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, confirm, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <h2 className='text-center mt-2 text-primary'>Register Now</h2>
            <Form onSubmit={handleRegister} className='form shadow my-5 mx-auto px-4 py-3 rounded'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>PhotoUrl</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Submit
                </Button>
                <Form.Text>
                    Already Have Account? <Link to='/login' className='text-center text-decoration-none'>Please Login </Link>
                </Form.Text>
                <hr />
            </Form>
        </div>
    );
};

export default Register;