import React from 'react';
import Latest from "../component/partials/Latest.jsx";
import {Col, Container, Row} from "react-bootstrap";
import HeaderDesign from "../component/partials/HeaderDesign.jsx";
import RightSideBar from "../component/RightSideBar.jsx";
import MainSectionInHome from "../component/MainSectionInHome.jsx";
import LeftSidebar from "../component/LeftSidebar.jsx";

const HomePage = () => {
    return (
        <Container>
            <Latest />
            <HeaderDesign />
            <Row className="mt-3">
                <Col md={3}>
                    <LeftSidebar />
                </Col>
                <Col md={6}>
                    <MainSectionInHome />
                </Col>
                <Col md={3}>
                    <RightSideBar />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;