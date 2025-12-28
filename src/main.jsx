import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './compronents/pages/Root/Root.jsx';
import ErrorPage from './compronents/pages/ErrorPage/ErrorPage.jsx';
import Home from './compronents/pages/Home/Home.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      index:true,
      path:'/',
      Component:Home,
   
    }]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />,
  </StrictMode>,
)
