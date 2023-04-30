import React from 'react';
import {Button} from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaInstagramSquare } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'
import Card from 'react-bootstrap/Card';
import bgImage from '../assets/bg.png';

const RightSideBar = () => {
    return (
        <>
            <div>
                <h4>Login with</h4>
                <Button className="w-100 mb-2 mt-3" variant="outline-primary">{FaGoogle()} Login with google</Button>
                <Button className="w-100" variant="outline-dark">{FaGithub()} Login With github</Button>
            </div>
            <div className="mt-5">
                <h4>Find Us On</h4>
                <ListGroup className="mt-3">
                    <ListGroup.Item>{FaFacebook()} Facebook</ListGroup.Item>
                    <ListGroup.Item>{FaTwitter()} Twitter</ListGroup.Item>
                    <ListGroup.Item>{FaInstagramSquare()} Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="mt-5">
                <h4>Q-Zone</h4>
                <div>
                    <img className="mb-4" src={qZone1} alt=""/>
                    <img className="mb-4" src={qZone2} alt=""/>
                    <img className="mb-4" src={qZone3} alt=""/>
                </div>
            </div>
            <div className="mt-5">
                <Card className="bg-dark text-white">
                    <Card.Img src={bgImage} alt="Card image" />
                    <Card.ImgOverlay>
                        <div className="text-center">
                            <h3 className="mt-5">Create an Amazing Newspaper</h3>
                            <p className="mt-4">
                                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                            </p>
                            <Button variant="danger" className="mt-4">Learn More</Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
};

export default RightSideBar;