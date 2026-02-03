
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './components/layout'
import HomePage from './pages/HomePage'
import FundraiserPage from './pages/FundraiserPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from "./pages/LoginPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";


const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{path: "/", element: <HomePage /> },
      { path: "/fundraiser/:id", element: <FundraiserPage /> },
      {path: "/aboutpage", element: <AboutPage /> },
      {path: "/contactpage", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
  </StrictMode>,
)