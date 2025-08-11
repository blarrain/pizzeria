import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
	const {addToCart} = useContext(CartContext)
	const [pizza, setPizza] = useState([]);
	const [error, setError] = useState(null);
	const { id } = useParams();

	const consultarApi = async () => {
		const url = "http://localhost:5000/api/pizzas/";
		try {
			const res = await fetch(`${url}/${id}`);
			if (!res.ok) {
				throw new Error("No se encontró ninguna pizza con ese ID");
			}
			const data = await res.json();
			setPizza(data);
		} catch (err) {
			setError(err.message);
			setPizza(null);
		}
	};

	useEffect(() => {
		consultarApi();
	}, [id]);

	return (
		<Container className='py-4 mb-5'>
			{!pizza && !error && <p>Cargando...</p>}
			{error && <p>{error}</p>}
			{pizza && (
				<Row className='row-gap-5'>
					<Col xs={12} md={6} lg={4}>
						<Image src={pizza.img} fluid className='ratio ratio-1x1 rounded' />
					</Col>
					<Col xs={12} md={6} lg={8}>
						<h1 className=''>Pizza {pizza.name}</h1>
						<p className='h2'>${pizza.price?.toLocaleString("es-CL")}</p>
						<p className='fw-light text-body-secondary'>{pizza?.desc}</p>
						<h2 className='h4 text-body-secondary'>Ingredientes</h2>
						<ul className='text-body-secondary fw-light'>
							{pizza.ingredients?.map((ingredient) => (
								<li key={ingredient}>{ingredient}</li>
							))}
						</ul>
						<Button variant='dark' onClick={() => addToCart({id: pizza.id, img: pizza.img, name:pizza.name, price: pizza.price})}>Agregar al carrito</Button>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Pizza;
