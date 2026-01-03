import React from 'react';


const Count = () => {

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold mt-20 mb-4'>We Provide Best Medical Services</h1>
                <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3  w-10/12 mx-auto my-20'>
                <div className='bg-white rounded-2xl w-48 px-10 py-5 my-5'>
                    <img className='w-10' src="https://i.ibb.co.com/wFWC3d8x/success-doctor.png" alt="" />
                    <h1 className='text-3xl font-bold my-3'>199+</h1>
                    <p>Total Doctors</p>
                </div>
                <div  className='bg-white rounded-2xl w-48 px-10 py-5 my-5'>
                    <img className='w-10' src="https://i.ibb.co.com/MDpCGZhB/success-review.png" alt="" />
                    <h1 className='text-3xl font-bold my-3'>447+</h1>
                    <p>Total Reviews</p>
                </div>
                <div className='bg-white rounded-2xl w-48 px-10 py-5 my-5'>
                    <img className='w-10' src="https://i.ibb.co.com/wF94R8jQ/success-patients.png" alt="" />
                    <h1 className='text-3xl font-bold my-3'>1900+</h1>
                    <p>Patients</p>
                </div>
                <div className='bg-white rounded-2xl w-48 px-10 py-5 my-5'>
                    <img className='w-10' src="https://i.ibb.co.com/v4dBNN6J/success-staffs.png" alt="" />
                    <h1 className='text-3xl font-bold my-3'>300+</h1>
                    <p>Total Stuffs</p>
                </div>
            </div>

        </div>
    );
};

export default Count;