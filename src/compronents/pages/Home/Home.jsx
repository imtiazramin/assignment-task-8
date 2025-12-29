import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    
    return (
        <div>
         <Banner data={data}></Banner>
        </div>
    );
};

export default Home;