import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';

function ProjectGallery(props) {
    return (
        <Container className='pl-0 pr-0 pb-4'>
            <CardDeck>
                <ProjectCard project={props.props.project1} />
                <ProjectCard project={props.props.project2} />
                <ProjectCard project={props.props.project3}/>
            </CardDeck>
        </Container>
    )
}

export default ProjectGallery
