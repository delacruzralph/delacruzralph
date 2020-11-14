import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(props) {
    return (
        <Card className='mb-5' style={{ width: 'auto' }}>
            <Card.Img variant="top" src={props.project.imgSrc} />
            <Card.Body>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
            </Card.Body>
            <footer>
                <Button className='m-3' variant="dark" target='_blank' href={props.project.link}>View</Button>
            </footer>
        </Card>

    )
}

export default ProjectCard
