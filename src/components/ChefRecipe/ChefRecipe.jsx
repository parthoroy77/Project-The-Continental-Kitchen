import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

const ChefRecipe = ({ recipe }) => {
    const [clicked, setClicked] = useState(false)
    const { recipeName, recipeImg, cookingMethod, ratings, ingredients, recipeInstructions } = recipe
    const handleFavorite = () => {
        setClicked(true);
        toast.success('Added On Favorite')
    }
    console.log(recipe);
    return (
        <div>
            <Card border="secondary">
                <Card.Body>
                    <LazyLoad>
                        <Card.Img height={200} src={recipeImg}></Card.Img>
                    </LazyLoad>
                    <Card.Text className='fs-5 mt-3 fw-semibold'>{recipeName}</Card.Text>
                    <hr />
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
                        <FaHeart style={{ fontSize: '25px', color: 'white' }}></FaHeart>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefRecipe;