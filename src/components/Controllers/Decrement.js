import React from "react";
import { Col, Button } from "react-bootstrap";

const Decrement = ({ decrement }) => {
  return (
    <Col>
      <Button variant="primary" onClick={decrement}>
        -
      </Button>
    </Col>
  );
};

export default Decrement;
