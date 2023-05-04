import React from 'react';
import Banner from '../../components/Banner/Banner';
import Recipes from '../../components/Recipes/Recipes';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Recipes data={data}></Recipes>
        </div>
    );
};

export default Home;