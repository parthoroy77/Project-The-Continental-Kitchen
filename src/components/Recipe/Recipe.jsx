import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaArrowRight } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Recipe = ({ chef }) => {
    
    const { chefName, id, chefPicture, chefDescription, cuisineSpecialty, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <Card >
                <LazyLoad height={200}>
                    <Card.Img variant="top" src={chefPicture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title className='fs-4 fw-bold'>{chefName}</Card.Title>
                    <hr />
                    <Card.Text className='text-secondary fw-semibold'>
                        {chefDescription.slice(0,150)}......
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush ">
                    <ListGroup.Item className='text-secondary fw-semibold'>Experience: {yearsOfExperience}</ListGroup.Item>
                    <ListGroup.Item className='text-secondary fw-semibold'>Recipe: {numberOfRecipes}</ListGroup.Item>
                    <ListGroup.Item className='text-secondary fw-semibold'>Master In <span className='text-black fw-bold'>{cuisineSpecialty}</span> Food</ListGroup.Item>
                    <ListGroup.Item className='text-secondary fw-semibold'>Likes: {likes}</ListGroup.Item>
                </ListGroup>
                <Card.Body >
                    <Link to={`/chef/${id}`} className='text-decoration-none text-black'>
                        <button className='btn btn-warning d-flex align-items-center gap-2 '>View Details <FaArrowRight></FaArrowRight></button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;