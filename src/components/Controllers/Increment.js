import React from "react";
import { Col, Button } from "react-bootstrap";

const Increment = ({ increment }) => {
  return (
    <Col>
      <Button variant="primary" onClick={increment}>
        +
      </Button>
    </Col>
  );
};

export default Increment;
