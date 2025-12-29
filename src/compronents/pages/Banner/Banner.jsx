import React from 'react';
import Doctors from '../Doctors/Doctors';

const Banner = () => {
    return (
        <div>
            <div className=' w-11/12 mx-auto my-3.5 py-10 border-4 rounded-2xl  border-white'>
            <div>
            <h1 className='text-3xl font-bold mb-5 text-center mx-auto w-2xl'>Dependable Care, Backed by Trusted  Professionals.</h1>
            <p className=' mb-5 text-center mx-auto w-5xl'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='text-center mb-7'>
                <input className='bg-white lg:w-96 border-gray-600 py-3 rounded-3xl px-5 ' type="search" name="search" id="" placeholder='Search any doctor...' />
                <input className=' rounded-3xl ml-3.5 bg-blue-500 py-2 px-3' type="submit" value="Search Now" />
            </div>
            <div className='flex justify-center items-center gap-5'>
                <img className='w-90 rounded-2xl' src="https://cdn.prod.website-files.com/66bd394eedeb9d6ee29898c6/682f5450a046c241920c1e6f_Three%20doctors%20standing%20side%20by%20side%2C%20crossing%20their%20arms.jpg" alt="" />
                <img className='w-90 rounded-2xl' src="https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg" alt="" />
            </div>
        </div>
        <Doctors></Doctors>
        </div>
        
     
           
    );
};

export default Banner;