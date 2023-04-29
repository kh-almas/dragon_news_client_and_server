import React from 'react';
import TopBar from "./component/partials/TopBar.jsx";
import {Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const StartingPoint = () => {
    return (
        <>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </>
    );
};

export default StartingPoint;