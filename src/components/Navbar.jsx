import { Button } from "react-bootstrap";

const Navbar = () => {
	const total = 25000;
	const token = false;

	return (
		<nav className="text-light bg-dark p-2 d-flex justify-content-between align-items-center sticky-top gap-3">
			<span>Pizzería Mamma mia!</span>
			<div className="d-flex gap-3">
				<Button variant="outline-light">🍕 Home</Button>
				<Button variant="outline-light" className={token ? null : 'd-none'}>🔓 Profile</Button>
				<Button variant="outline-light" className={token ? null : 'd-none'}>🔒 Logout</Button>
				<Button variant="outline-light" className={token ? 'd-none' : null}>🔐 Login</Button>
				<Button variant="outline-light" className={token ? 'd-none' : null}>🔐 Register</Button>
			</div>
			<Button variant="outline-primary">🛒 Total: ${total.toLocaleString("es")}</Button>
		</nav>
	);
};

export default Navbar;
