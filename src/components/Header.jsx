import React from "react";

const Header = () => {
	return (
		<header
			id="header"
			className="d-flex flex-column text-light justify-content-center align-items-center p-2 text-center"
		>
			<h1 className="display-1 text-uppercase fw-light">
				Mamma Mia! <br />
				Pizzería
			</h1>
			<p className="fs-4 fw-light">
				¡Tenemos las mejores pizzas que podrás encontrar!
			</p>
		</header>
	);
};

export default Header;
