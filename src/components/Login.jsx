import React, { useState } from "react";
import { Alert, Button, Col, Form } from "react-bootstrap";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alert, setAlert] = useState("");
	const [alertType, setAlertType] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		validar();
	};

	const validar = () => {
		if (!email || !password) {
			setAlert("Todos los campos son obligatorios");
			setAlertType("danger");
			return;
		}
		if (password.length < 6) {
			setAlert("La contraseña debe tener al menos 6 caracteres");
			setAlertType("danger");
			return;
		}

		setAlert("¡Registro exitoso!");
		setAlertType("success");
		limpiar();
	};

	const limpiar = () => {
		setEmail("");
		setPassword("");
	};

	return (
		<Col xs={12} sm={8} md={4} lg={3} className="px-1 py-3 mx-auto">
			<h2>Iniciar sesión</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="my-3" controlId="formEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Ej: nombre@ejemplo.com"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formPassword">
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Registrarse
				</Button>
			</Form>
			<Alert variant={alertType} className="mt-3 p-2 small">
				{alert}
			</Alert>
		</Col>
	);
};

export default Login;
