import React from "react";
import { Button, Col, Container } from "react-bootstrap";

const NotFound = () => {
	return (
		<Container>
			<Col
				xs={12}
				sm={10}
				md={8}
				lg={6}
				className='px-1 py-3 mx-auto text-center '
			>
				<p className='display-1 mb-0 text-center'>🧐</p>
				<h2 className='display-4'>Esta página no existe</h2>
				<p className='fs-3 fw-light text-black-50'>(tampoco la piña en nuestras pizzas)</p>
                <hr/>
                <div className="my-5">
                <p className="text-start fw-light fs-5">No sabemos bien qué pasó, pero no se pudo encontrar la ruta solicitada. ¿Volvamos al principio?</p>
                <Button variant="dark" href="/" size="lg">Ir al inicio 🏠</Button>
                </div>
			</Col>
		</Container>
	);
};

export default NotFound;
