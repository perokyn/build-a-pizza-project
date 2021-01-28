import React, { useState } from 'react';
import './App.scss';
import { Navbar, Nav,FormControl,Form, Button } from 'react-bootstrap';


export function NavBar(){

    return(
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">The Pizza</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Build One!</Nav.Link>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-info">Search</Button>
</Form>
</Navbar>


)}