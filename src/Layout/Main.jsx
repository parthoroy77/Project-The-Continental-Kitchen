import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className='' style={{minHeight: '100vh'}}>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;