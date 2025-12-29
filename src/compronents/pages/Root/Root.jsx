import React from 'react';
import Nevber from '../../Nevber/Nevber';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div className='bg-gray-100'>
            <Nevber></Nevber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;