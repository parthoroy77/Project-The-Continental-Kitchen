import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ChefDetails.css'
import ChefRecipe from '../../components/ChefRecipe/ChefRecipe';
const ChefDetails = () => {
    const chefData = useLoaderData()
    console.log(chefData);
    const { chefName, chefPicture, chefDescription, chefRecipes, cuisineSpecialty, likes, id, numberOfRecipes, yearsOfExperience } = chefData;
    return (
        <div>
            <div className='py-5 chef-banner'>
                <Card className='w-75 mx-auto shadow card-container'>
                    <Card.Body>
                        <Card.Title className=' fs-2 fw-bold'> {chefName}</Card.Title>
                        <Card.Text className='ms-3 my-3 fw-semibold text-secondary'>
                            <span className='' style={{color:'black' , fontSize: '20px'}}>Description: </span>{chefDescription}
                        </Card.Text>
                            <Card.Text className='ms-3 my-3 fw-semibold text-secondary'>
                                <span className='' style={{color:'black' , fontSize: '20px'}}>Special On: </span>{cuisineSpecialty}
                            </Card.Text>
                        <Card.Text className='ms-3 my-3 fw-semibold text-secondary'>
                            <span className='' style={{color:'black' , fontSize: '20px'}}>Experience: </span>{yearsOfExperience} Years Of Work Experience
                        </Card.Text>
                        <div className='recipe-container px-3'>
                            {chefRecipes.map((recipe,idx) => <ChefRecipe key={idx} recipe={recipe}></ChefRecipe>)}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ChefDetails;