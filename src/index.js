import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Create from './Components/Create';
import About from './Components/About'
import Product from './Components/Product';
import Contactus from './Components/Contactus';


const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Login/>,
  },
  {
    path:'/create',
    element:<Create/>
  },
  {
    path:'/home',
    element:<Home/>,
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/product',
    element:<Product/>
  },
  {
    path:'/contact',
    element:<Contactus/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
