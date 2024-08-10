import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InternalCard from "./InternalCard.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InternalCard/>
  </StrictMode>,
)
