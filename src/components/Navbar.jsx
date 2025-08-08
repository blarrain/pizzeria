import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
	const token = localStorage.getItem("token")
	const {totalPrice} = useContext(CartContext)
	const {logOut} = useContext(UserContext);

	return (
		<nav className="text-light bg-dark p-2 d-flex justify-content-between align-items-center sticky-top gap-3">
			<span>Pizzería Mamma mia!</span>
			<div className="d-flex gap-3">
				<Button variant="outline-light" as={NavLink} to="/">🍕 Home</Button>
				{token ? <Button variant="outline-light" as={NavLink} to="/profile">🔓 Profile</Button> : null}
				{token ? <Button variant="outline-light" onClick={() => logOut()}>🔒 Logout</Button> : null}
				{token ? null : <Button variant="outline-light" as={NavLink} to="/login">🔒 Login</Button>}
				{token ? null : <Button variant="outline-light" as={NavLink} to="/register">🔐 Register</Button>}
			</div>
			<Button variant="outline-primary" as={NavLink} to="/cart">🛒 Total: ${totalPrice.toLocaleString("es-CL")}</Button>
		</nav>
	);
};

export default Navbar;
