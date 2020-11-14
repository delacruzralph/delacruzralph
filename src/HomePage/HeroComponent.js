import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import my_photo from './assets/me_crop.jpg';

function HeroComponent() {
    const greeting = 'Hi, I\'m Ralph!';
    const sub_greeting = 'Check out some of my projects down below.'

    return (
        <Jumbotron className='bg-transparent jumbotron-fluid mb-0 pt-5'>
            <Container className='justify-content-center'>
                <Row className='pt-3 hero_content'>
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                        <h1 className='mt-5'>{greeting}</h1>
                        <p className='pt-3'>{sub_greeting}</p>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                        <img src={my_photo} alt='Photo of myself' width='300' className='my_photo' />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroComponent