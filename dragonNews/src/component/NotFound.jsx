import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="d-flex align-items-center mt-5">
            <Row className="mx-auto">
                <Col xs={12} className="text-center">
                    <h1 className="display-1">404</h1>
                    <h2 className="mb-4">Oops! Page not found.</h2>
                    <p className="mb-4">
                        The page you are looking for does not exist or has been removed.
                    </p>
                    <Button as={Link} to="/" variant="primary" size="lg">
                        Go back to homepage
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
