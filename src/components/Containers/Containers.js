import React from "react";
import { Container, Row } from "react-bootstrap";
import Decrement from "../Controllers/Decrement";
import Increment from "../Controllers/Increment";
import Reset from "../Controllers/Reset";
import CounterValue from "../View/CounterValue";
import Title from "../View/Title";

function Containers({
  resetCounter,
  incrementCounter,
  decrementCounter,
  counterValue,
}) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Title />
      </Row>
      <Row className="justify-content-md-center">
        <Increment increment={incrementCounter} />
        <CounterValue value={counterValue} />
        <Decrement decrement={decrementCounter} />
      </Row>
      <Row className="justify-content-md-center">
        <Reset reset={resetCounter} />
      </Row>
    </Container>
  );
}

export default Containers;
