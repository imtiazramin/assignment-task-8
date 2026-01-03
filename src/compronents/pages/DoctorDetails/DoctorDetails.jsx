import { Link, useLoaderData, useParams } from 'react-router';
import { PiTrademarkRegistered } from 'react-icons/pi';
import { BiMessageSquareError } from 'react-icons/bi';



const DoctorDetails = () => {
    const { id } = useParams();
    const doctorId = parseInt(id)
    const data = useLoaderData()
    const singleDoctor = data.find(doctor => doctor.id === doctorId)
    
    return (
        <div id='booked'>
            <div className='text-center  bg-white rounded-2xl w-8/12 mx-auto my-14 py-7'>
                <h1 className='text-3xl font-bold py-4'>Doctor’s Profile Details</h1>
                <p> Helps patients compare providers, understand their background, and make informed decisions.</p>
            </div>
            <div className='flex items-center pl-14 gap-7 bg-white rounded-2xl w-8/12 mx-auto my-14 py-7'>
                <div>
                    <img className='h-72 rounded-2xl' src={singleDoctor.image} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>{singleDoctor.name}</h1>
                    <h3 className='my-2 text-gray-600'>{singleDoctor.education}</h3>
                    <h3 className='mb-0.5 text-gray-400'>Working at </h3>
                    <h2 className='text-2xl mb-3.5 font-bold'> {singleDoctor.work}</h2>
                    <div className=' w-full border-t-2 border-b-2 border-gray-300 border-dashed'>
                        <h1 className='flex items-center gap-2 py-3 text-gray-600'><PiTrademarkRegistered size={20}></PiTrademarkRegistered> {singleDoctor.registration_number}</h1>
                    </div>
                    <div>
                        <div className='flex items-center gap-3.5'>
                            <h1 className='font-bold'>Availability </h1>
                            <h1 className='bg-amber-100 rounded-2xl px-3 py-1 my-3.5'> {singleDoctor.availability}</h1>
                        </div>
                        <div  className='flex items-center '>
                            <p className='font-bold mr-3'>Consultation Fee:</p>
                            <p className='text-blue-400 mr-1'><span>Taka :</span> {singleDoctor.consultation_fee} </p>
                            <p> <span className='text-gray-500'>(incl. Vat)</span> <span className='text-blue-400'>Per consultation</span></p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='  bg-white rounded-2xl w-8/12 mx-auto my-14 py-7 px-7'>
                <div>
                    <h1 className='text-3xl font-bold py-4 text-center' >Book an Appointment</h1>
                </div>
                <div className='flex items-center justify-between border-t-2 border-b-2 border-gray-300 border-dashed py-2.5 my-2 '>
                    <p className='font-bold'>Availability</p>
                    <p className='bg-green-50 text-green-400 px-2.5 py-1 rounded-2xl'>Doctor Available Today</p>
                </div>
                <div className='flex items-center bg-yellow-50 gap-3 px-6 my-3.5 rounded-2xl py-1.5 text-yellow-500'>
                    <BiMessageSquareError></BiMessageSquareError>
                    <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>
                <Link to={`/Doctor/${id}`}>
                <button className='bg-blue-500 w-full  py-2.5 rounded-2xl my-3.5 text-white font-bold'>Book Appointment Now</button>
                </Link>
                
            </div>
           
        </div>

    );
};

export default DoctorDetails;