// import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import appRouter from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
 