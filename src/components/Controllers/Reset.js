import React from "react";
import { Col, Button } from "react-bootstrap";

const Reset = ({ reset }) => {
  return (
    <Col md="auto">
      <Button variant="outline-danger" onClick={reset}>
        Reset
      </Button>
    </Col>
  );
};

export default Reset;
