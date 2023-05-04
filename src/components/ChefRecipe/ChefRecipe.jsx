import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';

const ChefRecipe = ({ recipe }) => {
    const [clicked,setClicked] = useState(false)
    const { recipeName, cookingMethod, ratings, ingredients, recipeInstructions } = recipe
    const handleFavorite = () => {
        setClicked(true);
        toast.success('Added On Favorite')
    }
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
                        <Button disabled={clicked} variant='warning' onClick={handleFavorite}>
                        <FaHeart style={{ fontSize: '25px', color:'white' }}></FaHeart>
                        </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefRecipe;