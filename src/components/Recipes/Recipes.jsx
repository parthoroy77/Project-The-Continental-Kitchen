import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import icon from '../../assets/icon/pngwing.com.png'
import Recipe from '../Recipe/Recipe';
import './Recipes.css'
import { AuthContext } from '../../providers/AuthProvider';
import { ClipLoader } from 'react-spinners';
import LazyLoad from 'react-lazyload';


const Recipes = ({ data }) => {
    const { loader } = useContext(AuthContext);
    if (loader) {
        return (
            <div className='d-flex justify-content-center align-content-center' style={{ height: '300px' }}>
                <div className='mt-5'>
                    <ClipLoader
                        className='text-center mt-5'
                        loading={loader}
                        cssOverride={{ textAlign: 'center' }}
                        size={100}
                        aria-label="Loading Spinner"
                        color="#36d7b7" />
                </div>
            </div>
        )
    }
    return (
        <Container className=' my-5'>
            <div className='text-center'>
                <h3 className=' fw-bold'>Our Chef's</h3>
                <LazyLoad>
                    <img src={icon} width={40} alt="" />
                </LazyLoad>
                <hr />
            </div>
            <div className='chef-container'>
                {
                    data.map(chef => <Recipe key={chef.id} chef={chef}></Recipe>)
                }
            </div>
        </Container>
    );
};

export default Recipes;