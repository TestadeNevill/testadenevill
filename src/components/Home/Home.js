import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

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
                <Row>
                    <Col>      <h2>Book of Fees</h2></Col>
                    <Col>      <h2>Smart Cities</h2></Col>
                    <Col>      <h2>4D Design</h2></Col>
                </Row>
                <Row>
                    <Col>      <p>A city budget designed to create a financial surplus which is distributed amongst citizens. </p>
                    </Col>
                    <Col>      <p>The details of urban planning, effective transit systems and quality infrastructure that rely on renewable energy and sustainable materials.  </p>
                    </Col>
                    <Col>      <p>Decorative lights and designs for prefabricated wall segments that make construction faster, energy efficent and cost effective.</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
