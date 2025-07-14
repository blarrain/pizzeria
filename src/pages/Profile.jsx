import React, { useContext } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const Profile = () => {
    const {logOut} = useContext(UserContext)

	return (
		<Container>
			<Col xs={12} sm={10} md={8} lg={6} className='px-1 py-3 mx-auto'>
            <p className="display-1 mb-0 text-center">👤</p>
            <h2 className="text-center">Mi perfil</h2>
            <hr/>
            <Alert variant="light">
            <p className="fs-5"><strong>Nombre:</strong></p>
            <p className="fs-5"><strong>Fecha de nacimiento:</strong></p>
            <p className="fs-5"><strong>Teléfono:</strong></p>
            <p className="fs-5"><strong>Dirección:</strong></p>
            <p className="fs-5"><strong>Email:</strong> nombre@ejemplo.com</p>
            <Button variant="danger" onClick={() => logOut()}>Cerrar sesión</Button></Alert>
            </Col>
		</Container>
	);
};

export default Profile;
