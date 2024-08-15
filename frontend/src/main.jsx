import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cards from './components/ExternalCard/Cards.jsx';
import InternalCard from './components/InternalCard/InternalCard.jsx';
import Home from './LandingPage/Home.jsx';
import Form from './components/FormEntry/Form.jsx'
import Footer from './components/Footer/Footer.jsx';
import SearchResultComp from './components/SearchResult.jsx/SearchResultComp.jsx';

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
        element: <div style={{display:"flex", flexWrap:"wrap", gap: "2rem", justifyContent:"center"}}><InternalCard/></div>
      },
      {
        path:"/form",
        element:<div className='main-container'><Form/><Footer/></div>
      },
      {
        path:"/search",
        element:<SearchResultComp/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>
)
