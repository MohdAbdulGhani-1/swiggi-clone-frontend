import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
import ErrorPage from "./component/ErrorPage";
import Body from './component/body';
import {lazy, Suspense} from "react";

const Grocery = lazy(()=> import("./component/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1 style={{padding: "200px"}}>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <ErrorPage />,
    },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
