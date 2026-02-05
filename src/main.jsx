
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
import PostPage from "./pages/PostPage.jsx";
import NotFound from "./pages/NotFound.jsx";
//import NavBar from "./components/NavBar.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{path: "/", element: <HomePage /> },
      { path: "/fundraiser/:id", element: <FundraiserPage /> },
      {path: "/aboutpage", element: <AboutPage /> },
      {path: "/contactpage", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/post", element: <PostPage /> },
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