import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cards from './components/ExternalCard/Cards.jsx';
import InternalCard from './components/InternalCard/InternalCard.jsx';
import Home from './LandingPage/Home.jsx';
import Form from './components/FormEntry/Form.jsx'
import Footer from './components/Footer/Footer.jsx';

import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element: <div className='main-container'><Cards/><Footer/></div>
      },
      {
        path:"/internal",
        element:<InternalCard/>
      },
      {
        path:"/form",
        element:<div className='main-container'><Form/><Footer/></div>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>
)
