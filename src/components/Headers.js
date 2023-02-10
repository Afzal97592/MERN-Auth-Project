import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


const Headers = () => {


  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link to='/dashboard' style={{textDecoration:'none', fontSize:34}}>AhmadDev</Link></Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home" style={{textDecoration:'none',fontSize:24, color:'white'}}><NavLink to='/register' style={{textDecoration:'none',fontSize:24, color:'white'}}>Register</NavLink> / <NavLink to='/' style={{textDecoration:'none',fontSize:24, color:'white'}}>Login</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers