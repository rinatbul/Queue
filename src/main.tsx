import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ReastaurantsPage} from "./Components/RestaurantsPage/RestaurantsPage";
import {Restaurant} from "./Components/Restaurant/Restaurant";
import {AdminPage} from "./Components/RestaurantsPage/AdminPage";
import {Provider} from "react-redux";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "restaurants",
                element: <ReastaurantsPage />,
            },
            {
                path: "restaurants/:id",
                element: <Restaurant />,
            },
            {
                path:'admin',
                element: <AdminPage/>,
            }
        ],

    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(<RouterProvider router={router} />)
