
// import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const data=[
    {
      "id": 1,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGReVOtCUWNARYamWZ6A-NJD-ilErcm_dW_A&s",
      "name": "Dr. Ahsan Rahman",
      "education": "MBBS, FCPS (Cardiology)",
      "speciality": "Cardiologist",
      "consultation_fee": "1200",
      "availability": "Sun–Thu (5pm–9pm)",
       "work": "City Heart Hospital",
      "experience": "12+ Years Experience",
      "registration_number": "BMDC-45001"
    },
    {
      "id": 2,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNID8QK50NFgDMq4svk7SW3ZY5BiMQImtZA&s",
      "name": "Dr. Nusrat Jahan",
      "education": "MBBS, FCPS (Gynecology)",
      "speciality": "Gynecologist",
      "consultation_fee":"1000",
      "availability":"Sat–Wed (4pm–8pm)",
      "work":"Green Life Medical",
      "experience": "9+ Years Experience",
      "registration_number": "BMDC-45002"
    },
    {
      "id": 3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4Sb8CnpGmNyAiJbMiANTP-yIwZsOTGiyYA&s",
      "name": "Dr. Mahmud Hasan",
      "education": "MBBS, MS (Orthopedics)",
      "speciality": "Orthopedic",
      "work":"National Orthopedic Center",
      "availability":"Sun–Thu (6pm–10pm)",
      "consultation_fee":"1500 ",
      "experience": "15+ Years Experience",
      "registration_number": "BMDC-45003"
    },
    {
      "id": 4,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSng-nBLZCTm_TJo4K2zNz4U1ESGpB4kyHI2w&s",
      "name": "Dr. Farzana Akter",
      "education": "MBBS, DDV",
      "speciality": "Dermatologist",
      "work":"Skin Care Clinic",
      "availability":"Sat–Thu (3pm–7pm)",
      "consultation_fee":"800 ",
      "experience": "7+ Years Experience",
      "registration_number": "BMDC-45004"
    },
    {
      "id": 5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhigTnNWyRKYvtcn_8kc0A5UMprcU8G3Wyg&s",
      "name": "Dr. Saiful Islam",
      "education": "MBBS, MD (Neurology)",
      "speciality": "Neurologist",
      "work":"Neuro Science Hospital",
      "availability":"Sun–Thu (5pm–9pm)",
      "consultation_fee":"1600 ",
      "experience": "11+ Years Experience",
      "registration_number": "BMDC-45005"
    },
    {
      "id": 6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5B1BtHSqML9_ofxlybofX-jnRAs7i53mpyA&s",
      "name": "Dr. Tania Sultana",
      "education": "MBBS, DCH",
      "speciality": "Pediatrician",
      "work":"Children Care Hospital",
      "availability":"Sun–Thu (4pm–8pm)",
      "consultation_fee":"700",
      "experience": "8+ Years Experience",
      "registration_number": "BMDC-45006"
    },
    {
      "id": 7,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnebrXWR9QrstpZpUegAwb6IAI_dwKc9DEw&s",
      "name": "Dr. Kamrul Hossain",
      "education": "MBBS",
      "speciality": "General ",
      "work":"Community Health Center",
      "availability":"Sat–Thu (6pm–10pm)",
      "consultation_fee":"600 ",
      "experience": "6+ Years Experience",
      "registration_number": "BMDC-45007"
    },
    {
      "id": 8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7zUGy9RZmoYBSSstDQWbRYDK8WuJTfxGxg&s",
      "name": "Dr. Rashed Chowdhury",
      "education": "MBBS, DLO",
      "speciality": "ENT Specialist",
      "work":"Sound & Care Hospital","availability":"Sun–Thu (5pm–9pm)","consultation_fee":"900 ",
      "experience": "10+ Years Experience",
      "registration_number": "BMDC-45008"
    },
    {
      "id": 9,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LDL6s6gBxIJrDvS7ck_33LN5qS6v3a4kgA&s",
      "name": "Dr. Momena Khatun",
      "education": "MBBS, MD (Endocrinology)",
      "speciality": "Physician",
      "work":"Diabetes Care Center",
      "availability":"Sun–Thu (6pm–9pm)",
      "consultation_fee":"1400 ",
      "experience": "13+ Years Experience",
      "registration_number": "BMDC-45009"
    },
    {
      "id": 10,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMQGwxq6NXekUg9sSRYy-hBX3dix5O4ugPw&s",
      "name": "Dr. Imran Kabir",
      "education": "MBBS, MS (Urology)",
      "speciality": "Urologist",
      "work":"Modern Medical College Hospital",
      "availability":"Sun–Thu (5pm–8pm)",
      "consultation_fee":"1500 ",
      "experience": "14+ Years Experience",
      "registration_number": "BMDC-45010"
    },
    {
      "id": 11,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9U-VXQU8TXAkjXkQrkBdlwvspHnujjkeYg&s",
      "name": "Dr. Shaila Noor",
      "education": "MBBS, MD (Psychiatry)",
      "speciality": "Psychiatrist",
      "work":"Mental Health Institute",
      "availability":"Sat–Wed (4pm–7pm)",
      "consultation_fee":"1000",
      "experience": "9+ Years Experience",
      "registration_number": "BMDC-45011"
    },
    {
      "id": 12,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ym9rqon4eALdkChUlET-9M25xPDZE_Z4Qg&s",
      "name": "Dr. Anwar Hossain",
      "education": "MBBS, MD (Oncology)",
      "speciality": "Oncologist",
      "work":"Cancer Care Hospital",
      "availability":"Sun–Thu (6pm–9pm)",
      "consultation_fee":"1800 ",
      "experience": "16+ Years Experience",
      "registration_number": "BMDC-45012"
    }
  ]


const Doctor = () => {
    const {id}=useParams();
    const doctorId=parseInt(id);
    //  const data=useLoaderData();
     const singleDoctor = data.find(doc => doc.id === doctorId)
    
     
    return (
         <div className='w-8/12 mx-auto bg-white rounded-2xl py-7 px-10 my-14'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold'>{singleDoctor.name}</h1>
                    <h3 className='my-1.5 text-gray-600'>{singleDoctor.education}</h3>
                </div>
                <div>
                    <p className='my-1.5 text-gray-600'>Appointment Fee : {singleDoctor.consultation_fee} + Vat</p>
                </div>
               
            </div>
           
             <button className='text-red-500 border-2 my-2.5 rounded-3xl w-full py-2'>Cancel Appointment</button>
        </div>
    );
};

export default Doctor;