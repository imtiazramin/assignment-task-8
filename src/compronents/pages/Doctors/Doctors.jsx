import React from 'react';
import { Link } from 'react-router';

const Doctors = ({doctors}) => {
        const {id, name, education, experience, image, registration_number, speciality } = doctors

    return (
         <div className='card p-8 shadow-2xl bg-white mb-10 w-96 shadow-white'>
            <div>
                <div>
                    <img className='h-44 rounded-2xl mb-3.5 w-full ' src={image} alt="" />
                </div>
                <div className='my-2.5'>
                    <span className='mr-4 border border-green-200 px-2 py-1 bg-green-50 text-green-400 rounded-3xl '>{speciality}</span>
                    <span className='mr-4  border border-blue-200 px-2 py-1 bg-blue-50 text-blue-400 rounded-3xl '>{experience}</span>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <h3 className='mt-1.5 text-gray-500'>{education}</h3>
                </div>
                <div className='border border-gray-400 border-dashed my-2.5'></div>
                <div>
                    <p className='mb-4 text-gray-500'>Reg No : {registration_number}</p>
                </div>
                <Link to={`/DoctorDetails/${id}`}> <button className='w-full text-blue-400 border-2 py-1.5 rounded-3xl'>View Details</button></Link>
               
            </div>

        </div>
    );
};

export default Doctors;