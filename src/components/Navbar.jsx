import { Button } from "react-bootstrap";

const Navbar = () => {
	const total = 25000;
	const token = false;

	return (
		<nav className="text-light bg-dark p-2 d-flex justify-content-between align-items-center sticky-top gap-3">
			<span>Pizzería Mamma mia!</span>
			<div className="d-flex gap-3">
				<Button variant="outline-light">🍕 Home</Button>
				{token ? <Button variant="outline-light">🔓 Profile</Button> : null}
				{token ? <Button variant="outline-light">🔒 Logout</Button> : null}
				{token ? null : <Button variant="outline-light">🔒 Login</Button>}
				{token ? null : <Button variant="outline-light">🔐 Register</Button>}
			</div>
			<Button variant="outline-primary">🛒 Total: ${total.toLocaleString("es")}</Button>
		</nav>
	);
};

export default Navbar;
