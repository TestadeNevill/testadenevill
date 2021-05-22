import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

import BOF from '../BookOfFees/BOF';
import SmartWater from '../SmartCity/SmartWater';
import FourDDesign from '../4DDesign/4DDesign';



export default function Home() {
    return (
        <div>

            <Jumbotron fluid>
                <Container>
                    <h1>Testa De Nevill</h1>
                    <p>The Head of a New Town</p>
                </Container>
            </Jumbotron>
            <Container>
                <div>
                    <Router>
                        <div >
                            <Row >

                                <Col>
                                    <Link to="/BOF">Book Of Fees</Link>
                                </Col>
                                <Col>
                                    <Link to="/SmartWater">Smart Cities</Link>
                                </Col>
                                <Col>
                                    <Link to="/4DDesign">4D Design</Link>
                                </Col>

                            </Row>

                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path="/BOF">
                                    <BOF />
                                </Route>
                                <Route path="/SmartWater">
                                    <SmartWater />
                                </Route>
                                <Route path="/4DDesign">
                                    <FourDDesign />
                                </Route>
                            </Switch>
                        </div>
                    </Router>

                    <Row>
                        <Col>      <p>A city budget designed to create a financial surplus which is distributed amongst citizens. </p>
                        </Col>
                        <Col>      <p>The details of urban planning, effective transit systems and quality infrastructure that rely on renewable energy and sustainable materials.  </p>
                        </Col>
                        <Col>      <p>Decorative lights and designs for prefabricated wall segments that make construction faster, energy efficent and cost effective.</p>
                        </Col>

                    </Row>


                </div>
            </Container>

        </div>
    )
}
