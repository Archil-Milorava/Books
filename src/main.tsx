import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import BookPage from './Pages/BookPage.tsx';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path:'/:id', element: <BookPage />}
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
