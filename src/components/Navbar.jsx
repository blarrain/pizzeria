import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const {totalPrice} = useContext(CartContext)
	const token = false;

	return (
		<nav className="text-light bg-dark p-2 d-flex justify-content-between align-items-center sticky-top gap-3">
			<span>Pizzería Mamma mia!</span>
			<div className="d-flex gap-3">
				<Button variant="outline-light" as={Link} to="/">🍕 Home</Button>
				{token ? <Button variant="outline-light" as={Link} to="/profile">🔓 Profile</Button> : null}
				{token ? <Button variant="outline-light">🔒 Logout</Button> : null}
				{token ? null : <Button variant="outline-light" as={Link} to="/login">🔒 Login</Button>}
				{token ? null : <Button variant="outline-light" as={Link} to="/register">🔐 Register</Button>}
			</div>
			<Button variant="outline-primary" as={Link} to="/cart">🛒 Total: ${totalPrice.toLocaleString("es-CL")}</Button>
		</nav>
	);
};

export default Navbar;
