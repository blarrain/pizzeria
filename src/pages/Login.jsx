import React, { useContext, useState } from "react";
import { Alert, Button, Col, Form } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { logIn } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		logIn(email, password);
		limpiar();
	};

	const limpiar = () => {
		setEmail("");
		setPassword("");
	};
	return (
		<Col xs={12} sm={8} md={4} lg={3} className='px-1 py-3 mx-auto'>
			<h2>Iniciar sesión</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='my-3' controlId='formEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						placeholder='Ej: nombre@ejemplo.com'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formPassword'>
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type='password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Registrarse
				</Button>
			</Form>
			{/* <Alert variant={alertType} className="mt-3 p-2 small">
				{alert}
			</Alert> */}
		</Col>
	);
};

export default Login;
