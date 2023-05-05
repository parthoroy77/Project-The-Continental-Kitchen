import React, { useEffect } from 'react';
import icon from '../../assets/icon/icon1.png'
import { Container } from 'react-bootstrap';
import delivery from '../../assets/icon/delivery.png'
import shop from '../../assets/icon/stand.png'
import tasty from '../../assets/icon/loss-of-sense-of-taste.png'
import healthy from '../../assets/icon/vegetables.png'
import './ServiceSection.css'
import LazyLoad from 'react-lazyload';


const ServiceSection = () => {
    return (
        <Container className='my-4'>
            <div className='text-center'>
                <h3 className=' fw-bold'>What We Offer's</h3>
                <LazyLoad>
                    <img src={icon} width={50} alt="" />
                </LazyLoad>
                <hr />
            </div>
            <div className='service-container'>
                <div className='text-center border rounded shadow px-3 py-4'>
                    <LazyLoad>
                        <img src={shop} alt="" />
                    </LazyLoad>
                    <h3>All Kind Of Foods</h3>
                    <p className='mt-2'>In our restaurant we provide all type of food. We have the best cook from every contrary of the world</p>
                </div>
                <div className='text-center border rounded shadow px-3 py-4'>
                    <LazyLoad>
                        <img src={healthy} alt="" />
                    </LazyLoad>
                    <h3>Fresh & Healthy</h3>
                    <p className='mt-2'>In our restaurant we provide all type of food. We have the best cook from every contrary of the world</p>
                </div>
                <div className='text-center border rounded shadow px-3 py-4'>
                    <LazyLoad>
                        <img src={tasty} style={{ height: '64px' }} alt="" />
                    </LazyLoad>
                    <h3>Best Taste</h3>
                    <p className='mt-2'>In our restaurant we provide all type of food. We have the best cook from every contrary of the world</p>
                </div>
                <div className='text-center border rounded shadow px-3 py-4'>
                    <LazyLoad>
                        <img src={delivery} style={{ height: '64px' }} alt="" />
                    </LazyLoad>
                    <h3>On Time Delivery</h3>
                    <p className='mt-2'>In our restaurant we provide all type of food. We have the best cook from every contrary of the world</p>
                </div>
            </div>
        </Container>
    );
};

export default ServiceSection;