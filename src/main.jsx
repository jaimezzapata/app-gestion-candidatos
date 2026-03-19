import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routerApp } from './routes/routerApp'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routerApp)}/>
  </StrictMode>,
)
