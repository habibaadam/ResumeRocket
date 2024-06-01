import React from 'react';
import './index.css';  
import { Container, Row, Col, Image } from "react-bootstrap";


export const Columlayout= () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Image src="images/image1.jpg"className="rows" />
        </Col> 
        <Col xs={12} md={4}>
          <Image src="images/image2.jpg" className="rows" />
        </Col>
        <Col xs={12} md={4}>
          <Image src="images/image3.jpg" className="rows" />
        </Col>
      </Row>
    </Container>
  );
}

export default Columlayout;