import React from 'react';
import {Card} from "react-bootstrap";
import cardImage from '../assets/editorsInsight1.png';
import profileImage from  '../assets/1.png';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const MainSectionInHome = () => {
    return (
        <div>
            <h3>Dragon News Home</h3>
            <div>
                <Card className="mt-4">
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={profileImage} alt="profile" width="50" height="50" className="rounded-circle"/>
                                <div className="ps-2">
                                    <h5>Awlad Hossain</h5>
                                    <p className="mb-0">2022-08-21</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaBookmark className="me-2" style={{ fontSize: '20px' }} />
                                <FaShareAlt className="me-2" style={{ fontSize: '20px' }} />
                            </div>
                        </div>
                    </Card.Footer>
                    <h3 className="p-3">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                    <Card.Img variant="top" src={cardImage} />
                    <Card.Body>

                        <Card.Text>
                            TWednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security,
                            UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion
                            in new U.S. military a... <a href="">Read more</a>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <div>
                                    <FaStar className="me-2" style={{ fontSize: '20px', color: '#FF8C47' }} />
                                    <FaStar className="me-2" style={{ fontSize: '20px', color: '#FF8C47' }} />
                                    <FaStar className="me-2" style={{ fontSize: '20px', color: '#FF8C47' }} />
                                    <FaStar className="me-2" style={{ fontSize: '20px', color: '#FF8C47' }} />
                                    <FaStar className="me-2" style={{ fontSize: '20px', color: '#FF8C47' }} />
                                </div>
                                <p className="mb-0" style={{ fontSize: '20px', color: '#FF8C47' }}>4.9</p>
                            </div>
                            <div>
                                <p className="mb-0"><FaEye className="me-2" style={{ fontSize: '20px' }} /> 499</p>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default MainSectionInHome;