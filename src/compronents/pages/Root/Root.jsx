import React from 'react';
import Nevber from '../../Nevber/Nevber';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Nevber></Nevber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;