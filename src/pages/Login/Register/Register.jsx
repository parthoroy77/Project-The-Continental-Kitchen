import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const { user, createUser, profileUpdate } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const confirm = form.confirm.value;
        const password = form.password.value;
        if (password != confirm) {
            return toast.error('Please Enter Same Password In Both Field');
        }
        else if (password.length < 6) {
            return toast.error('Password is too short')
        }
        else if (/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/.test(password)) {
            return toast.error('Password must have 1 uppercase, 1 lowercase, 1 digit and 1 special character')
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                toast.success('User Created Successfully')
                profileUpdate(name, photoUrl).then(result => { }).catch(error => toast.error(error.message))
                form.reset()
                navigate('/login')
            })
            .catch(error => {
            toast.error(error.message);
        })
    }
    const handleShow = (e) => {
        if (e.target.checked) {
            setShowPass(true)
        }
        else {
            setShowPass(false)
        }
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
                    <Form.Control type="text" name='photo' placeholder="Enter PhotoUrl" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPass ? 'text' : 'password'} name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type={showPass ? 'text' : 'password'} name='confirm' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3"
                    onClick={handleShow}
                    controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Register
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