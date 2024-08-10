import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// <<<<<<< externalcard
// import Home from './components/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
//     <Home />
=======
// <<<<<<< internalCard
// import InternalCard from "./InternalCard.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
//     <InternalCard/>
// =======
import NavBar from './NavBar'
import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<NavBar/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
// >>>>>>> main
// >>>>>>> main
  </StrictMode>,
)
