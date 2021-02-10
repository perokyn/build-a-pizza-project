import React,{useState} from 'react';
import { Container, Row, Col, Image,} from 'react-bootstrap';
import {SlideShow} from '../components/Carousel'
import { PizzaCard } from '../components/PizzaCard';
import { Confirmation } from '../components/Confirmation';
import pizzas from '../data';
import {Dragg} from '../components/Dragg'
import Draggable from '../components/Draggable'
export function FrontPage() {



  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }



  return (
   
    <Container >
   
  <Row>

<Col >

<SlideShow/>

</Col>

  </Row>

  <Row>

<Col>

<Row>
    <Col   >

    <h2 className='text-white mt-3 BrushSc-font '>Build your dream Pizza</h2>
      <Image  className="d-block w-100" src="/images/build.jpg" fluid />
      </Col>
</Row>



{ordered && <Confirmation toggle={setOrdered} />}
<Row>
        <Col> 
        <h2 className='text-white mt-3 BrushSc-font '>Check out our Delicous pre-built selection</h2>
        </Col>

        </Row>
        
      <Row  className='mt-3 '>
        {pizzas.map(data => (
          <Col xs={12} sm={6} xl={3} className="mb-5" key={`${data.id}`}>
            <PizzaCard data={data} setOrdered={displayConfirmation} />
          </Col>
        ))}
      </Row>

</Col>

  </Row>
<Container >
<Row>

  <Col>
  
  
  <Draggable/>
  </Col>
</Row>
</Container >
    </Container>


  )
}