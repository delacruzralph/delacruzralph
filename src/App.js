import './App.css';
import React, { Component } from 'react';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './HomePage/Home';


class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Container className='nav_container p-0' fluid={true}>
          <Navbar sticky='top' className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand><Link className='nav-link text-dark' to='/'>Ralph Dela Cruz</Link></Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/resume'>Resume</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Container className='main_container' fluid={true}>
          <Route path='/' exact render={() =>
            <Home />} />
          <Container className='bottom' >
            <Row>
              <br />
            </Row>
          </Container>
        </Container>
      </Router>
    )
  }
}

export default App
