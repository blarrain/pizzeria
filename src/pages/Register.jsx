import React, { useContext, useState } from "react";
import { Alert, Button, Col, Form } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [alert, setAlert] = useState("");
	const [alertType, setAlertType] = useState("");
	const {register} = useContext(UserContext)

	const handleSubmit = (e) => {
		e.preventDefault();
		validar();
	};

	const validar = () => {
		if (!email || !password || !passwordConfirm) {
			setAlert("Todos los campos son obligatorios");
			setAlertType("danger");
			return;
		}
		if (password.length < 6) {
			setAlert("La contraseña debe tener al menos 6 caracteres");
			setAlertType("danger");
			return;
		}
		if (password !== passwordConfirm) {
			setAlert("Las contraseñas no coinciden");
			setAlertType("danger");
			return;
		}
		setAlert("¡Registro exitoso!");
		setAlertType("success");
		register(email, password)
        limpiar()
	};

	const limpiar = () => {
		setEmail("");
		setPassword("");
		setPasswordConfirm("");
	};

	return (
		<Col xs={12} sm={8} md={4} lg={3} className="px-1 py-3 mx-auto">
			<h2>Registrarse</h2>
			<p className="text-black-50">
				Completa el formulario para registrarte como cliente de Mamma Mia!
				Pizzeria
			</p>
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
				<Form.Group className="mb-3" controlId="formPasswordConfirm">
					<Form.Label>Confirma tu contraseña</Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => {
							setPasswordConfirm(e.target.value);
						}}
						value={passwordConfirm}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Iniciar sesión
				</Button>
			</Form>
			<Alert variant={alertType} className="mt-3 p-2 small">
				{alert}
			</Alert>
		</Col>
	);
};

export default Register;
