import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cards from './components/ExternalCard/Cards.jsx';
import InternalCard from './components/InternalCard/InternalCard.jsx';
import Home from './LandingPage/Home.jsx';
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
        element:<Cards/>
      },
      {
        path:"/internal",
        element: <div style={{display:"flex", flexWrap:"wrap", gap: "2rem", justifyContent:"center"}}><InternalCard/><InternalCard/><InternalCard/><InternalCard/></div>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>
)
