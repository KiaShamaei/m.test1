import React, { useState } from 'react';
import { Container, Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Counter (props) {
	const [count, setCount] = useState(0);
	;
	
	  	return ( 
		<Container>
			<Row className="justify-content-md-center">
				<Col md="auto" className=" text-center">
                <h1>First counter</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
			
			<Col><Button variant="primary" onClick={props.increament}>+</Button></Col>
            <Col><h5>Count is {props.value}</h5></Col>
            <Col><Button variant="primary" onClick={props.decrement} >-</Button></Col>

			</Row>
			<Row className="justify-content-md-center">
				<Col md="auto" > 
				 <Button variant="outline-danger" onClick={props.set}>Reset</Button>
				</Col>
			</Row>
		</Container>
	 );
}
 
export default Counter;
