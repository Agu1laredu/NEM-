import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import Nosotros from "./Pages/Nosotros/index.jsx";
import Servicios from "./Pages/Servicios/index.jsx";
import Contacto from "./Pages/Contacto/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Nosotros",
    element: <Nosotros />,
  },
  {
    path: "/Servicios",
    element: <Servicios />,
  },
  {
    path: "/Contacto",
    element: <Contacto />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
