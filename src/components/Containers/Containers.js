import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Containers(props) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" className=" text-center">
          <h1>First counter</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Button variant="primary" onClick={props.increament}>
            +
          </Button>
        </Col>
        <Col>
          <h5>{props.value ? `Your Count : ${props.value}` : "Zero"}</h5>
        </Col>
        <Col>
          <Button variant="primary" onClick={props.decrement}>
            -
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button variant="outline-danger" onClick={props.set}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Containers;
