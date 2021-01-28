import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col, Navbar, FormControl } from 'react-bootstrap';
import { PizzaCard } from './components/PizzaCard';
import { Confirmation } from './components/Confirmation';
import {NavBar} from './Navbar'
import {FrontPage} from './Pages/FrontPage'
import pizzas from './data';

function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }


  return (
    <Container>
      <Row>
        <Col>
        <NavBar/>
        </Col>
      </Row>
      <Row>
<Col>

<FrontPage/>
</Col>

      </Row>
    </Container>
  );
}

export default App