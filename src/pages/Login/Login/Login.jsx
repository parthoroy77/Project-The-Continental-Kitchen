import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../../providers/AuthProvider';
const Login = () => {
    const { user, logInUser, googleLogin, gitHubLogin } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.password.value;
        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
            console.log(error);
        })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(error => {
            console.log(error.message);
        })
    }
    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
            })
            .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className=''>
            <Form onSubmit={handleLogin} className='form shadow my-5 mx-auto px-4 py-4 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>

                <Button variant="primary" className='w-100' type="submit">
                    Submit
                </Button>
                <Form.Text>
                    Don't Have Account? <Link to='/register' className='text-center text-decoration-none'>Please Register </Link>
                </Form.Text>
                <hr />
                <Form.Group>
                    <Button
                        onClick={handleGoogleLogin}
                        variant='outline-primary' className='d-flex align-items-center my-1 w-75 justify-content-center mx-auto'>
                        <FaGoogle></FaGoogle><span>Login With Google</span>
                    </Button>
                    <Button variant='outline-secondary'
                        onClick={handleGitHubLogin}
                        className='d-flex align-items-center my-1 w-75 justify-content-center mx-auto'>
                        <FaGithub></FaGithub><span>Login With Github</span>
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;