import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import CSProjects from './CSProjects';
import DesignProjects from './DesignProjects';
import EducationalProjects from './EducationalProjects';
import ExtrasProjects from './ExtrasProjects';

function Projects() {
    return (
        <div>
            <Router>
                <ButtonGroup className='d-flex justify-content-around pb-4'>
                    <LinkContainer to='/cs'><Button variant='outline-light'>Computer Science</Button></LinkContainer>
                    <LinkContainer to='/design'><Button variant='outline-light'>Design</Button></LinkContainer>
                    <LinkContainer to='/community'><Button variant='outline-light'>Educational</Button></LinkContainer>
                    <LinkContainer to='/extras'><Button variant='outline-light'>Extras</Button></LinkContainer>
                </ButtonGroup>

                <Switch>
                    <Route path='/cs' component={CSProjects} />
                    <Route path='/design' component={DesignProjects} />
                    <Route path='/community' component={EducationalProjects} />
                    <Route path='/extras' component={ExtrasProjects} />
                </Switch>
            </Router>
        </div>
    )
}

export default Projects
