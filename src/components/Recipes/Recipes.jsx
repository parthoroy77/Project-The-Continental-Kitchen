import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import icon from '../../assets/icon/pngwing.com.png'
import Recipe from '../Recipe/Recipe';
import './Recipes.css'
import { AuthContext } from '../../providers/AuthProvider';
const Recipes = ({ data }) => {
    
    return (
        <Container className=' my-5'>
            <div className='text-center'>
                <h3 className=' fw-bold'>Our Chef's</h3>
                <img src={icon} width={40} alt="" />
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