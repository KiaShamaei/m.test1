import React from "react";
import { Col } from "react-bootstrap";

const CounterValue = ({ value }) => {
  return (
    <Col>
      <h5 className="mt-3 mb-5">{value ? `Your Count : ${value}` : "Zero"}</h5>
    </Col>
  );
};

export default CounterValue;
