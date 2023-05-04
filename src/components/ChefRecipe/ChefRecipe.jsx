import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const ChefRecipe = ({ recipe }) => {
    const { recipeName, cookingMethod, ratings, ingredients, recipeInstructions } = recipe
    return (
        <div>
            <Card border="secondary">
                <Card.Header className='fs-5 fw-semibold'>{recipeName}</Card.Header>
                <Card.Body>
                    <Card.Text>Cooking Method: <span className='fw-semibold'>{cookingMethod}</span></Card.Text>
                    <Card.Text>
                        Ingredients: <span className='fw-semibold'>{ingredients}</span>
                    </Card.Text>
                    <Card.Text>
                        Instruction: <span className='fw-semibold'>{recipeInstructions}</span>
                    </Card.Text>
                    <Card.Text>
                        Ratings: <span className='fw-semibold'>{ratings}</span>
                    </Card.Text>
                        <Button variant='warning'>
                        <FaHeart style={{ fontSize: '25px', color:'white' }}></FaHeart>
                        </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefRecipe;