import React from 'react';
import Latest from "../component/partials/Latest.jsx";
import {Container} from "react-bootstrap";
import HeaderDesign from "../component/partials/HeaderDesign.jsx";

const HomePage = () => {
    return (
        <Container>
            <Latest />
            <HeaderDesign />
            ok, this is home.
        </Container>
    );
};

export default HomePage;