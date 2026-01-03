import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './compronents/pages/Root/Root.jsx';
import ErrorPage from './compronents/pages/ErrorPage/ErrorPage.jsx';
import Home from './compronents/pages/Home/Home.jsx';
import MyBookings from './compronents/pages/MyBookings/MyBookings.jsx';
import DoctorDetails from './compronents/pages/DoctorDetails/DoctorDetails.jsx';

import Blogs from './compronents/pages/Blogs/Blogs.jsx';
import Doctor from './compronents/pages/Doctor/Doctor.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      index: true,
      path: '/',
      Component: Home,
      loader: () => fetch("Doctors.json")
    },
    {
      path: '/MyBookings',
      Component: MyBookings,
    },
    {
      path:'/DoctorDetails/:id',
      loader:()=>fetch('Doctors.json'),
      Component:DoctorDetails,
     
    },
    {
      path:'/Doctor/:id',
      loader:()=>fetch('Doctors.json'),
      Component:Doctor,
      
    },
    {
      path:'/Blogs',
      Component:Blogs,
    }

    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />,
  </StrictMode>,
)
