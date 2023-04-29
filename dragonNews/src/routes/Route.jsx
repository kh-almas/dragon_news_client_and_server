import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import StartingPoint from "../StartingPoint.jsx";
import NotFound from "../component/NotFound.jsx";
import HomePage from "../pages/HomePage.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <StartingPoint />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
]);

export default routes;