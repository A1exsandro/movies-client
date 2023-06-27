import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom' 

import './styles.css'

const Header = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand href="/" style={{"color": 'gold'}}>
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{maxHeight: '100px'}}
            navbarScroll
          >
            <NavLink className="nav-link header-nav" to='/'>Home</NavLink>
            <NavLink className="nav-link header-nav" to='/watchList'>Watch List</NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2">Login</Button>
          <Button variant="outline-info" className="me-2">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
