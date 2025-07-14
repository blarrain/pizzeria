import React, { useContext } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
// import { pizzaCart } from "../data/pizzas";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
	const { token } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);
	const { totalPrice } = useContext(CartContext);

	const updateQty = (item, value) => {
		const updatedCart = [...cart];
		const index = updatedCart.findIndex((ele) => ele.id === item.id);
		updatedCart[index].qty = value;
		setCart(updatedCart);
	};

	const stepQty = (item, amount) => {
		const currentInput = document.getElementById(item.name);
		updateQty(item, Number(currentInput.value) + amount);
	};

	return (
		<Container className='min-vh-75'>
			<Row>
				<Col lg='6' className='py-4 my-4 mx-auto' id='cart-content'>
					<h2 className='mb-4 h4'>Detalles del pedido</h2>
					{cart.map((item) =>
						item.qty > 0 ?
							<Form.Group
								key={item.id}
								as={Row}
								controlId={item.name}
								className='my-3'
							>
								<Col className='d-flex gap-2'>
									<img className='cart-thumbnail' src={item.img} />
									<Form.Label column className='text-capitalize'>
										{item.name}
									</Form.Label>
								</Col>
								<Col md='auto' className='d-flex gap-3'>
									<span>
										${(item.price * item.qty).toLocaleString("es-CL")}
									</span>
									<InputGroup>
										<Button
											variant='outline-danger'
											id={`minus-${item.id}`}
											onClick={() => stepQty(item, -1)}
										>
											-
										</Button>
										<Form.Control
											type='number'
											min={0}
											value={item.qty}
											onChange={(e) => updateQty(item, e.target.value)}
										/>
										<Button
											variant='outline-primary'
											id={`plus-${item.id}`}
											onClick={() => stepQty(item, 1)}
										>
											+
										</Button>
									</InputGroup>
								</Col>
							</Form.Group>
						:	null
					)}
					<hr />
					<p className='h2 my-4'>
						Total: ${totalPrice.toLocaleString("es-CL")}
					</p>
					<Button variant='dark' disabled={!token}>
						Pagar
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Cart;
