import React from 'react'
import Container from 'react-bootstrap/Container'

import resume from './resume_pic.png'

function Resume() {
    return (
        <Container className='d-flex justify-content-center'>
            <img src={resume} />
        </Container>
    )
}

export default Resume
