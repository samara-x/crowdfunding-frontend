
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AuthProvider } from "./components/AuthProvider.jsx";

import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage'
import FundraiserPage from './pages/FundraiserPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import CreateFundraiser from "./pages/CreateFundraiserPage.jsx";
import NotFound from "./pages/NotFound.jsx";
//import NavBar from "./components/NavBar.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{path: "/", element: <HomePage /> }, // this is the defauult home page
      { path: "/fundraiser/:id", element: <FundraiserPage /> },
      {path: "/about", element: <AboutPage /> },
      {path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/create-fundraiser", element: <CreateFundraiser /> },
      { path: "*", element: <NotFound /> }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
  </StrictMode>,
)