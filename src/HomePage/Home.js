import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import HeroComponent from './HeroComponent';
import Projects from './Projects';

function Home() {
    return (
        <Container className='home_container'>
            <Row>
                <Col>
                    <HeroComponent />
                    <Projects />
                </Col>
            </Row>
            <Row></Row>
        </Container>
    );
}

export default Home

