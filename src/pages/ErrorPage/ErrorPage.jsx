import React from 'react';
import error from '../../assets/banner/404.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


const ErrorPage = () => {
    return (
        <div className='d-flex align-content-center' style={{ minHeight: '100vh' }}>
            <div>
                <div className='text-center'>
                    <LazyLoad>
                        <img src={error} className='w-50' alt="" />
                    </LazyLoad>
                </div>
                <div className='text-center'>
                    <h1 className='fw-bold' style={{ fontSize: '60px' }}>OOPS!!! PAGE NOT FOUND</h1>
                    <h4>Sorry, the page you're looking for doesn't exist.</h4>
                    <Button variant='outline-info'>
                        <Link className='text-decoration-none fs-4' to='/chef'>Go Back</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;