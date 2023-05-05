import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import icon1 from '../../assets/icon/icon1.png'
import './Banner.css'
import LazyLoad from 'react-lazyload';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='px-5'>
                <h1 className='text-light'>
                    Satisfy your cravings with our delicious <span className='text-warning'>Recipe's</span>
                </h1>
                <p className='text-light fw-semibold fs-5'>
                    Life is too short to settle for mediocre food. That's why at restaurant, we're committed to bringing you the very best in culinary excellence. Whether you're in the mood for something savory, sweet, spicy, or somewhere in between, our expert chefs have crafted a menu that's sure to delight even the most discerning palates.
                </p>
                <button className='btn fw-bold shadow btn-warning text-danger fs-5 d-flex align-items-center gap-2'>
                    Reserve Now <FaArrowRight className='text-danger'></FaArrowRight>
                </button>
            </div>
            <div className=' text-center px-3'>
                <LazyLoad>
                    <img src={icon1} className='banner-img' alt="" />
                </LazyLoad>
            </div>
        </div>
    );
};

export default Banner;